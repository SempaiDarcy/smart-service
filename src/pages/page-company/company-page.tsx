import { useParams } from "react-router-dom";
import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import {
    Typography,
    Box,
    Card,
    TextField,
    Button,
    Avatar,
    IconButton,
    Rating,
} from "@mui/material";
import Grid from '@mui/material/Grid2';
import { AttachFile } from "@mui/icons-material";
import { Company, Review } from "../../types/company";

export const CompanyPage = () => {
    const { id } = useParams();
    const [company, setCompany] = useState<Company | null>(null);
    const [newReview, setNewReview] = useState(""); // Текст нового отзыва
    const [attachedFile, setAttachedFile] = useState<File | null>(null); // Прикрепленный файл
    const [newRating, setNewRating] = useState<number | null>(null); // Рейтинг нового отзыва
    const [currentUser, setCurrentUser] = useState<any>(() =>
        JSON.parse(localStorage.getItem("myProject_currentUser") || "{}")
    );

    useEffect(() => {
        // Загружаем текущую компанию
        const companies = JSON.parse(localStorage.getItem("companies") || "[]");
        const currentCompany = companies.find((c: Company) => c.id === Number(id));
        setCompany(currentCompany);

        // Загружаем текущего пользователя
        const updatedUser = JSON.parse(
            localStorage.getItem("myProject_currentUser") || "{}"
        );
        setCurrentUser(updatedUser);

        // Обновляем все комментарии пользователя в компании
        if (currentCompany) {
            const updatedReviews = currentCompany.reviews.map((review: Review) => {
                if (review.userId === updatedUser.id) {
                    return {
                        ...review,
                        userName: `${updatedUser.firstName} ${updatedUser.lastName}`.trim(),
                        userPhoto: updatedUser.photo,
                    };
                }
                return review;
            });

            const updatedCompany = { ...currentCompany, reviews: updatedReviews };
            setCompany(updatedCompany);

            const updatedCompanies = companies.map((c: Company) =>
                c.id === currentCompany.id ? updatedCompany : c
            );
            localStorage.setItem("companies", JSON.stringify(updatedCompanies));
        }
    }, [id]);

    const handleReviewSubmit = () => {
        if (!company || !newReview.trim() || !newRating) return;

        const fullName = `${currentUser?.firstName || "Аноним"} ${
            currentUser?.lastName || ""
        }`.trim();

        const newReviewData: Review = {
            userId: currentUser?.id || Date.now(),
            userName: fullName,
            comment: newReview,
            rating: newRating,
            userPhoto: currentUser?.photo || "",
        };

        const updatedCompany = {
            ...company,
            reviews: [...company.reviews, newReviewData],
        };

        const companies = JSON.parse(localStorage.getItem("companies") || "[]");
        const updatedCompanies = companies.map((c: Company) =>
            c.id === company.id ? updatedCompany : c
        );

        setCompany(updatedCompany);
        localStorage.setItem("companies", JSON.stringify(updatedCompanies));
        setNewReview(""); // Очищаем поле ввода
        setAttachedFile(null); // Очищаем прикрепленный файл
        setNewRating(null); // Сбрасываем рейтинг
    };

    const handleFileAttach = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setAttachedFile(e.target.files[0]);
        }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleReviewSubmit();
        }
    };

    if (!company) return <Typography>Компания не найдена.</Typography>;

    return (
        <Box sx={{ padding: "5rem", overflowY: "auto" }}>
            <Typography variant="h4">{company.name}</Typography>
            <Card
                sx={{
                    display: "flex",
                    gap: "2rem",
                    marginTop: "2rem",
                    padding: "1rem",
                    overflow: "hidden",
                }}
            >
                <img
                    src={company.photo}
                    alt={company.name}
                    style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "300px",
                        objectFit: "contain",
                    }}
                />
                <Box>
                    <Typography>{company.detailedDescription}</Typography>
                    <Typography sx={{ marginTop: "1rem" }}>
                        <strong>Рейтинг:</strong> {company.rating.toFixed(1)}
                    </Typography>
                    <Typography>
                        <strong>Почта:</strong>{" "}
                        <a href={`mailto:${company.email}`}>{company.email}</a>
                    </Typography>
                    <Typography>
                        <strong>Адрес:</strong> {company.address}
                    </Typography>
                    <Typography>
                        <strong>Сайт:</strong>{" "}
                        <a
                            href={`https://${company.website}`}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {company.website}
                        </a>
                    </Typography>
                    <Typography>
                        <strong>Часы работы:</strong> {company.workingHours}
                    </Typography>
                    <Typography>
                        <strong>Рабочие дни:</strong> {company.workingDays}
                    </Typography>
                </Box>
            </Card>

            {/* Отображение услуг */}
            <Typography variant="h5" sx={{ marginTop: "2rem" }}>
                Услуги
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
                {company.services?.length > 0 ? (
                    company.services.map((service, index) => (
                        <Grid size={{ xs: 12, md: 4 }} key={index}>
                            <Card sx={{ padding: "1rem", height: "100%" }}>
                                <Typography variant="h6">{service.name}</Typography>
                                <Typography>{service.description}</Typography>
                                {service.priceRange && (
                                    <Typography>
                                        <strong>Цена:</strong> {service.priceRange}
                                    </Typography>
                                )}
                            </Card>
                        </Grid>
                    ))
                ) : (
                    <Typography>Услуги не найдены.</Typography>
                )}
            </Grid>

            {/* Отображение отзывов */}
            <Typography variant="h5" sx={{ marginTop: "4rem" }}>
                Отзывы
            </Typography>
            {company.reviews.length > 0 ? (
                company.reviews.map((review, index) => (
                    <Card key={index} sx={{ marginTop: "1rem", padding: "1rem" }}>
                        <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                            <Avatar src={review.userPhoto}>
                                {!review.userPhoto && review.userName[0]}
                            </Avatar>
                            <Box>
                                <Typography>{review.userName}</Typography>
                                <Typography>{review.comment}</Typography>
                                <Rating value={review.rating} readOnly />
                            </Box>
                        </Box>
                    </Card>
                ))
            ) : (
                <Typography>Пока отзывов нет.</Typography>
            )}

            {/* Добавить отзыв */}
            <Box sx={{ marginTop: "2rem" }}>
                <Typography variant="h6">Добавить отзыв</Typography>
                <TextField
                    multiline
                    rows={4}
                    fullWidth
                    variant="outlined"
                    placeholder="Напишите ваш отзыв"
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    onKeyDown={handleKeyDown}
                    sx={{ marginTop: "1rem" }}
                />
                <Box sx={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
                    <Rating
                        value={newRating}
                        onChange={(_e, newValue) => setNewRating(newValue)}
                    />
                    <IconButton component="label">
                        <AttachFile />
                        <input
                            type="file"
                            hidden
                            accept="image/*"
                            onChange={handleFileAttach}
                        />
                    </IconButton>
                    <Button
                        variant="contained"
                        onClick={handleReviewSubmit}
                        disabled={!newReview.trim() || !newRating}
                    >
                        Отправить
                    </Button>
                </Box>
                {attachedFile && (
                    <Typography sx={{ marginTop: "1rem" }}>
                        Прикрепленный файл: {attachedFile.name}
                    </Typography>
                )}
            </Box>
        </Box>
    );
};
