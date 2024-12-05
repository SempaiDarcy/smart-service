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
import { AttachFile } from "@mui/icons-material";
import { Company } from "../../types/company";

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
        const companies = JSON.parse(localStorage.getItem("companies") || "[]");
        const currentCompany = companies.find((c: Company) => c.id === Number(id));
        setCompany(currentCompany);

        const updatedUser = JSON.parse(
            localStorage.getItem("myProject_currentUser") || "{}"
        );
        setCurrentUser(updatedUser); // Обновляем пользователя при изменении фото в личном кабинете
    }, [id]);

    const handleReviewSubmit = () => {
        if (!company || !newReview.trim() || !newRating) return;

        const newReviewData = {
            userId: currentUser?.id || Date.now(),
            userName: currentUser?.firstName || "Аноним",
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
                        <strong>Услуги:</strong> {company.services.join(", ")}
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


// import { useParams } from "react-router-dom";
// import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
// import {
//     Typography,
//     Box,
//     Card,
//     TextField,
//     Button,
//     Avatar,
//     IconButton,
//     Rating,
// } from "@mui/material";
// import { AttachFile } from "@mui/icons-material";
// import { Company } from "../../types/company";
//
// export const CompanyPage = () => {
//     const { id } = useParams();
//     const [company, setCompany] = useState<Company | null>(null);
//     const [newReview, setNewReview] = useState(""); // Текст нового отзыва
//     const [attachedFile, setAttachedFile] = useState<File | null>(null); // Прикрепленный файл
//     const [newRating, setNewRating] = useState<number | null>(null); // Рейтинг нового отзыва
//     const currentUser = JSON.parse(localStorage.getItem("myProject_currentUser") || "{}");
//
//     useEffect(() => {
//         const companies = JSON.parse(localStorage.getItem("companies") || "[]");
//         const currentCompany = companies.find((c: Company) => c.id === Number(id));
//         setCompany(currentCompany);
//     }, [id]);
//
//     const handleReviewSubmit = () => {
//         if (!company || !newReview.trim() || !newRating) return;
//
//         const newReviewData = {
//             userId: currentUser?.id || Date.now(),
//             userName: currentUser?.firstName || "Аноним",
//             comment: newReview,
//             rating: newRating,
//             userPhoto: currentUser?.photo || "",
//         };
//
//         const updatedCompany = {
//             ...company,
//             reviews: [...company.reviews, newReviewData],
//         };
//
//         const companies = JSON.parse(localStorage.getItem("companies") || "[]");
//         const updatedCompanies = companies.map((c: Company) =>
//             c.id === company.id ? updatedCompany : c
//         );
//
//         setCompany(updatedCompany);
//         localStorage.setItem("companies", JSON.stringify(updatedCompanies));
//         setNewReview(""); // Очищаем поле ввода
//         setAttachedFile(null); // Очищаем прикрепленный файл
//         setNewRating(null); // Сбрасываем рейтинг
//     };
//
//     const handleFileAttach = (event: ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files && event.target.files[0]) {
//             setAttachedFile(event.target.files[0]);
//         }
//     };
//
//     const handleKeyDown = (event: KeyboardEvent) => {
//         if (event.key === "Enter" && !event.shiftKey) {
//             event.preventDefault();
//             handleReviewSubmit();
//         }
//     };
//
//     if (!company) return <Typography>Компания не найдена.</Typography>;
//
//     return (
//         <Box sx={{ padding: "5rem", overflowY: "auto" }}>
//             <Typography variant="h4">{company.name}</Typography>
//             <Card
//                 sx={{
//                     display: "flex",
//                     gap: "2rem",
//                     marginTop: "2rem",
//                     padding: "1rem",
//                     overflow: "hidden",
//                 }}
//             >
//                 <img
//                     src={company.photo}
//                     alt={company.name}
//                     style={{
//                         width: "100%",
//                         height: "auto",
//                         maxWidth: "300px",
//                         objectFit: "contain",
//                     }}
//                 />
//                 <Box>
//                     <Typography>{company.detailedDescription}</Typography>
//                     <Typography sx={{ marginTop: "1rem" }}>
//                         <strong>Рейтинг:</strong> {company.rating.toFixed(1)}
//                     </Typography>
//                     <Typography>
//                         <strong>Почта:</strong>{" "}
//                         <a href={`mailto:${company.email}`}>{company.email}</a>
//                     </Typography>
//                     <Typography>
//                         <strong>Адрес:</strong> {company.address}
//                     </Typography>
//                     <Typography>
//                         <strong>Сайт:</strong>{" "}
//                         <a href={`https://${company.website}`} target="_blank" rel="noopener noreferrer">
//                             {company.website}
//                         </a>
//                     </Typography>
//                     <Typography>
//                         <strong>Услуги:</strong> {company.services.join(", ")}
//                     </Typography>
//                     <Typography>
//                         <strong>Часы работы:</strong> {company.workingHours}
//                     </Typography>
//                     <Typography>
//                         <strong>Рабочие дни:</strong> {company.workingDays}
//                     </Typography>
//                 </Box>
//             </Card>
//             <Typography variant="h5" sx={{ marginTop: "2rem" }}>
//                 Отзывы
//             </Typography>
//             {company.reviews.length > 0 ? (
//                 company.reviews.map((review, index) => (
//                     <Card key={index} sx={{ marginTop: "1rem", padding: "1rem" }}>
//                         <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
//                             <Avatar src={review.userPhoto}>
//                                 {!review.userPhoto && review.userName[0]}
//                             </Avatar>
//                             <Box>
//                                 <Typography>{review.userName}</Typography>
//                                 <Typography>{review.comment}</Typography>
//                                 <Rating value={review.rating} readOnly />
//                             </Box>
//                         </Box>
//                     </Card>
//                 ))
//             ) : (
//                 <Typography>Пока отзывов нет.</Typography>
//             )}
//             <Box sx={{ marginTop: "2rem" }}>
//                 <Typography variant="h6">Добавить отзыв</Typography>
//                 <TextField
//                     multiline
//                     rows={4}
//                     fullWidth
//                     variant="outlined"
//                     placeholder="Напишите ваш отзыв"
//                     value={newReview}
//                     onChange={(e) => setNewReview(e.target.value)}
//                     onKeyDown={handleKeyDown}
//                     sx={{ marginTop: "1rem" }}
//                 />
//                 <Box sx={{ display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
//                     <Rating
//                         value={newRating}
//                         onChange={(event, newValue) => setNewRating(newValue)}
//                     />
//                     <IconButton component="label">
//                         <AttachFile />
//                         <input
//                             type="file"
//                             hidden
//                             accept="image/*"
//                             onChange={handleFileAttach}
//                         />
//                     </IconButton>
//                     <Button
//                         variant="contained"
//                         onClick={handleReviewSubmit}
//                         disabled={!newReview.trim() || !newRating}
//                     >
//                         Отправить
//                     </Button>
//                 </Box>
//                 {attachedFile && (
//                     <Typography sx={{ marginTop: "1rem" }}>
//                         Прикрепленный файл: {attachedFile.name}
//                     </Typography>
//                 )}
//             </Box>
//         </Box>
//     );
// };



// import {useParams} from "react-router-dom";
// import {useState, useEffect, ChangeEvent, KeyboardEvent} from "react";
// import {
//     Typography,
//     Box,
//     Card,
//     TextField,
//     Button,
//     Avatar,
//     IconButton,
// } from "@mui/material";
// import {EmojiEmotions, AttachFile} from "@mui/icons-material";
// import {Company} from "../../types/company";
//
//
// export const CompanyPage = () => {
//     const {id} = useParams();
//     const [company, setCompany] = useState<Company | null>();
//     const [newReview, setNewReview] = useState(""); // Текст нового отзыва
//     const [attachedFile, setAttachedFile] = useState<File | null>(null); // Прикрепленный файл
//     const currentUser = JSON.parse(
//         localStorage.getItem("myProject_currentUser") || "{}"
//     );
//
//     useEffect(() => {
//         const companies = JSON.parse(localStorage.getItem("companies") || "[]");
//         const currentCompany = companies.find((c: Company) => c.id === Number(id));
//         setCompany(currentCompany);
//     }, [id]);
//
//     const handleReviewSubmit = () => {
//         if (!company || !newReview.trim()) return;
//
//         const reviewWithFile = attachedFile
//             ? `${newReview} (Прикрепленный файл: ${attachedFile.name})`
//             : newReview;
//
//         const newReviewData = {
//             userId: Date.now(),
//             userName: currentUser?.firstName || "Аноним",
//             comment: reviewWithFile,
//             rating: 5,
//             userPhoto: currentUser?.photo || "",
//         };
//
//         const updatedCompany = {
//             ...company,
//             reviews: [...company.reviews, newReviewData],
//         };
//
//         setCompany(updatedCompany);
//
//         const companies = JSON.parse(localStorage.getItem("companies") || "[]");
//         const updatedCompanies = companies.map((c: Company) =>
//             c.id === company.id ? updatedCompany : c
//         );
//         localStorage.setItem("companies", JSON.stringify(updatedCompanies));
//         setNewReview(""); // Очищаем поле ввода
//         setAttachedFile(null); // Очищаем прикрепленный файл
//     };
//
//     const handleFileAttach = (event: ChangeEvent<HTMLInputElement>) => {
//         if (event.target.files && event.target.files[0]) {
//             setAttachedFile(event.target.files[0]);
//         }
//     };
//
//     const handleKeyDown = (event: KeyboardEvent) => {
//         if (event.key === "Enter" && !event.shiftKey) {
//             event.preventDefault();
//             handleReviewSubmit();
//         }
//     };
//
//     if (!company) return <Typography>Компания не найдена.</Typography>;
//
//     return (
//         <Box sx={{padding: "5rem", overflowY: "auto"}}>
//             <Typography variant="h4">{company.name}</Typography>
//             <Card
//                 sx={{
//                     display: "flex",
//                     gap: "2rem",
//                     marginTop: "2rem",
//                     padding: "1rem",
//                     overflow: "hidden",
//                 }}
//             >
//                 <img
//                     src={company.photo}
//                     alt={company.name}
//                     style={{
//                         width: "100%",
//                         height: "auto",
//                         maxWidth: "300px",
//                         objectFit: "contain", // Сохраняем пропорции
//                     }}
//                 />
//                 <Box>
//                     <Typography>{company.description}</Typography>
//                     <Typography sx={{marginTop: "1rem"}}>
//                         Рейтинг: {company.rating}
//                     </Typography>
//                 </Box>
//             </Card>
//             <Typography variant="h5" sx={{marginTop: "2rem"}}>
//                 Отзывы
//             </Typography>
//             {company.reviews.length > 0 ? (
//                 company.reviews.map((review, index) => (
//                     <Card key={index} sx={{marginTop: "1rem", padding: "1rem"}}>
//                         <Box sx={{display: "flex", gap: "1rem", alignItems: "center"}}>
//                             <Avatar src={review.userPhoto}>
//                                 {!review.userPhoto && review.userName[0]}
//                             </Avatar>
//                             <Box>
//                                 <Typography>{review.userName}</Typography>
//                                 <Typography>{review.comment}</Typography>
//                             </Box>
//                         </Box>
//                     </Card>
//                 ))
//             ) : (
//                 <Typography>Пока отзывов нет.</Typography>
//             )}
//             <Box sx={{marginTop: "2rem"}}>
//                 <Typography variant="h6">Добавить отзыв</Typography>
//                 <TextField
//                     multiline
//                     rows={4}
//                     fullWidth
//                     variant="outlined"
//                     placeholder="Напишите ваш отзыв"
//                     value={newReview}
//                     onChange={(e) => setNewReview(e.target.value)}
//                     onKeyDown={handleKeyDown}
//                     sx={{marginTop: "1rem"}}
//                 />
//                 <Box sx={{display: "flex", alignItems: "center", gap: "1rem", marginTop: "1rem"}}>
//                     <IconButton component="label">
//                         <AttachFile/>
//                         <input
//                             type="file"
//                             hidden
//                             accept="image/*"
//                             onChange={handleFileAttach}
//                         />
//                     </IconButton>
//                     <IconButton>
//                         <EmojiEmotions/>
//                     </IconButton>
//                     <Button
//                         variant="contained"
//                         onClick={handleReviewSubmit}
//                         disabled={!newReview.trim()}
//                     >
//                         Отправить
//                     </Button>
//                 </Box>
//                 {attachedFile && (
//                     <Typography sx={{marginTop: "1rem"}}>
//                         Прикрепленный файл: {attachedFile.name}
//                     </Typography>
//                 )}
//             </Box>
//         </Box>
//     );
// };


// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { Typography, Box, Card, TextField, Button, Avatar } from "@mui/material";
// import { Company } from "../../types/company";
//
// export const CompanyPage = () => {
//     const { id } = useParams();
//     const [company, setCompany] = useState<Company | null>(null);
//
//     useEffect(() => {
//         const companies = JSON.parse(localStorage.getItem("companies") || "[]");
//         const currentCompany = companies.find((c: Company) => c.id === Number(id));
//         setCompany(currentCompany);
//     }, [id]);
//
//     const handleReviewSubmit = (review: string) => {
//         if (!company) return;
//         const newReview = {
//             userId: Date.now(),
//             userName: "Текущий пользователь",
//             comment: review,
//             rating: 5,
//         };
//         const updatedCompany = { ...company, reviews: [...company.reviews, newReview] };
//         setCompany(updatedCompany);
//
//         const companies = JSON.parse(localStorage.getItem("companies") || "[]");
//         const updatedCompanies = companies.map((c: Company) =>
//             c.id === company.id ? updatedCompany : c
//         );
//         localStorage.setItem("companies", JSON.stringify(updatedCompanies));
//     };
//
//     if (!company) return <Typography>Компания не найдена.</Typography>;
//
//     return (
//         <Box sx={{ padding:'5rem', overflowY:'auto'}}>
//             <Typography variant="h4">{company.name}</Typography>
//             <Card sx={{ display: "flex", gap: "2rem", marginTop: "2rem", padding: "1rem" }}>
//                 <img
//                     src={company.photo}
//                     alt={company.name}
//                     style={{ width: "300px", height: "300px", objectFit: "cover" }}
//                 />
//                 <Box>
//                     <Typography>{company.description}</Typography>
//                     <Typography sx={{ marginTop: "1rem" }}>
//                         Рейтинг: {company.rating}
//                     </Typography>
//                 </Box>
//             </Card>
//             <Typography variant="h5" sx={{ marginTop: "2rem" }}>
//                 Отзывы
//             </Typography>
//             {company.reviews.length > 0 ? (
//                 company.reviews.map((review) => (
//                     <Card key={review.userId} sx={{ marginTop: "1rem", padding: "1rem" }}>
//                         <Avatar sx={{ marginBottom: "0.5rem" }}>
//                             {review.userName[0]}
//                         </Avatar>
//                         <Typography>{review.userName}</Typography>
//                         <Typography>{review.comment}</Typography>
//                     </Card>
//                 ))
//             ) : (
//                 <Typography>Пока отзывов нет.</Typography>
//             )}
//             <Box sx={{ marginTop: "2rem" }}>
//                 <Typography variant="h6">Добавить отзыв</Typography>
//                 <TextField
//                     multiline
//                     rows={4}
//                     fullWidth
//                     variant="outlined"
//                     placeholder="Напишите ваш отзыв"
//                     sx={{ marginTop: "1rem" }}
//                 />
//                 <Button
//                     variant="contained"
//                     sx={{ marginTop: "1rem" }}
//                     onClick={() => handleReviewSubmit("Ваш отзыв")}
//                 >
//                     Отправить
//                 </Button>
//             </Box>
//         </Box>
//     );
// };
