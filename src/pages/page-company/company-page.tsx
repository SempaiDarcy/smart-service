import { useParams, useNavigate } from "react-router-dom";
import {
    Typography,
    Box,
    Card,
    TextField,
    Button,
    Avatar,
    Rating,
    Alert,
} from "@mui/material";
import Grid from "@mui/material/Grid2";
import { PersonAdd } from "@mui/icons-material";
import { useState, useEffect, KeyboardEvent } from "react";
import { Company, Review } from "../../types/company";

export const CompanyPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [company, setCompany] = useState<Company | null>(null);
    const [newReview, setNewReview] = useState("");
    const [newRating, setNewRating] = useState<number | null>(null);
    const [currentUser, setCurrentUser] = useState<any>(() =>
        JSON.parse(localStorage.getItem("myProject_currentUser") || "{}")
    );

    // Загрузка данных компании и пользователя
    const loadData = () => {
        const companies = JSON.parse(localStorage.getItem("companies") || "[]");
        const currentCompany = companies.find((c: Company) => c.id === Number(id));
        setCompany(currentCompany);

        const updatedUser = JSON.parse(
            localStorage.getItem("myProject_currentUser") || "{}"
        );
        setCurrentUser(updatedUser);

        // Обновляем отзывы, если пользователь обновился
        if (currentCompany && updatedUser.id) {
            const updatedReviews = currentCompany.reviews.map((review: Review) => {
                if (review.userId === updatedUser.id) {
                    return {
                        ...review,
                        userName: `${updatedUser.firstName} ${updatedUser.lastName}`.trim(),
                        userPhoto: updatedUser.photo || "",
                    };
                }
                return review;
            });

            const updatedCompany = { ...currentCompany, reviews: updatedReviews };
            const updatedCompanies = companies.map((c: Company) =>
                c.id === currentCompany.id ? updatedCompany : c
            );

            setCompany(updatedCompany);
            localStorage.setItem("companies", JSON.stringify(updatedCompanies));
        }
    };

    useEffect(() => {
        loadData(); // Загрузка данных при монтировании компонента
    }, [id]);

    // const handleServiceClick = (serviceName: string) => {
    //     if (!currentUser?.id) {
    //         navigate("/auth");
    //     } else {
    //         navigate(`/company/${id}/chat/${serviceName}`);
    //     }
    // };

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
        setNewReview("");
        setNewRating(null);
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

            <Card sx={{ display: "flex", gap: "2rem", marginTop: "2rem", padding: "1rem" }}>
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
                    <Typography sx={{ marginTop: "1rem" }}>
                        <strong>Описание:</strong> {company.fullDescription}
                    </Typography>
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

            <Typography variant="h5" sx={{ marginTop: "2rem" }}>
                Услуги
            </Typography>
            <Grid container spacing={2} sx={{ marginTop: "1rem" }}>
                {company.services.map((service, index) => (
                    <Grid size={{ xs: 12, md: 4 }} key={index}>
                        <Card
                            // onClick={() => handleServiceClick(service.name)}
                            sx={{
                                padding: "1rem",
                                height: "100%",
                                transition: "transform 0.2s, box-shadow 0.2s",
                                cursor: "pointer",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                                },
                            }}
                        >
                            <Typography variant="h6">{service.name}</Typography>
                            <Typography>{service.description}</Typography>
                            {service.priceRange && (
                                <Typography>
                                    <strong>Цена:</strong> {service.priceRange}
                                </Typography>
                            )}
                        </Card>
                    </Grid>
                ))}
            </Grid>

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
                                <Typography variant="h6">{review.userName}</Typography>
                                <Typography>{review.comment}</Typography>
                                <Rating value={review.rating} readOnly />
                            </Box>
                        </Box>
                    </Card>
                ))
            ) : (
                <Typography>Пока отзывов нет.</Typography>
            )}

            {!currentUser?.id && (
                <Alert
                    severity="info"
                    sx={{ marginTop: "2rem", padding: "1.5rem" }}
                >
                    <Typography variant="h6" gutterBottom>
                        Хотите оставить отзыв?
                    </Typography>
                    <Button
                        variant="contained"
                        startIcon={<PersonAdd />}
                        onClick={() => navigate("/auth")}
                    >
                        Зарегистрироваться
                    </Button>
                </Alert>
            )}

            {currentUser?.id && (
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
                            onChange={(_, newValue) => setNewRating(newValue)}
                        />
                        <Button
                            variant="contained"
                            onClick={handleReviewSubmit}
                            disabled={!newReview.trim() || !newRating}
                        >
                            Отправить
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
};
