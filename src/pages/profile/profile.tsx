import { useState, ChangeEvent, KeyboardEvent } from "react";
import {
    Avatar,
    IconButton,
    TextField,
    Tooltip,
    Box,
    Typography,
} from "@mui/material";
import { PhotoCamera } from "@mui/icons-material";
import s from "./profile.module.scss";

export const Profile = () => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("myProject_currentUser") || "{}")
    );
    const [editField, setEditField] = useState<string | null>(null);
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handlePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = () => {
                const photo = reader.result as string;
                const updatedUser = { ...currentUser, photo };
                setCurrentUser(updatedUser);
                updateUserInLocalStorage(updatedUser);
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    const validateField = (field: string, value: string) => {
        if (value.trim() === "") {
            return "Поле не может быть пустым.";
        }
        if (field === "email" && !/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            return "Введите корректный адрес почты.";
        }
        return ""; // Нет ошибок
    };

    const handleFieldChange = (field: string, value: string) => {
        setCurrentUser((prev: any) => ({ ...prev, [field]: value }));
        const error = validateField(field, value);
        setErrors((prev) => ({ ...prev, [field]: error }));
    };

    const updateUserInLocalStorage = (updatedUser: any) => {
        const users = JSON.parse(localStorage.getItem("myProject_users") || "[]");
        const updatedUsers = users.map((user: any) =>
            user.id === updatedUser.id ? updatedUser : user
        );
        localStorage.setItem("myProject_users", JSON.stringify(updatedUsers));
        localStorage.setItem("myProject_currentUser", JSON.stringify(updatedUser));
    };

    const handleBlur = (field: string) => {
        if (errors[field]) {
            return; // Не закрываем поле, если есть ошибка
        }
        updateUserInLocalStorage(currentUser);
        setEditField(null); // Закрываем поле
    };

    const handleKeyDown = (field: string, event: KeyboardEvent) => {
        if (event.key === "Enter" && !errors[field]) {
            handleBlur(field);
        }
    };

    const handleFocus = (field: string) => {
        if (editField && errors[editField]) {
            return; // Не переключаемся, если текущее поле содержит ошибку
        }
        setEditField(field);
    };

    // Проверяем наличие текущего пользователя
    if (!currentUser) {
        return <p className={s.error}>Данные пользователя недоступны.</p>;
    }

    return (
        <Box className={s.profile}>
            <Typography variant="h4" gutterBottom>
                Личный кабинет
            </Typography>
            <Box
                className={s.profileInfo}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "1rem",
                }}
            >
                <Box className={s.avatarContainer}>
                    <Avatar
                        src={currentUser.photo}
                        sx={{
                            width: 150,
                            height: 150,
                            border: "5px solid #e9ecef",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                        }}
                    />
                    <Tooltip title="Изменить фото" arrow>
                        <IconButton
                            component="label"
                            sx={{
                                position: "absolute",
                                bottom: 0,
                                right: 0,
                                backgroundColor: "#fff",
                                "&:hover": {
                                    backgroundColor: "#f0f0f0",
                                },
                            }}
                        >
                            <PhotoCamera />
                            <input
                                type="file"
                                hidden
                                accept="image/png, image/jpeg"
                                onChange={handlePhotoChange}
                            />
                        </IconButton>
                    </Tooltip>
                </Box>
                <Box className={s.details} sx={{ width: "100%", maxWidth: "400px" }}>
                    {["lastName", "firstName", "middleName", "email"].map((field) => (
                        <Box
                            key={field}
                            sx={{ display: "flex", alignItems: "center", gap: "1rem" }}
                        >
                            {editField === field ? (
                                <TextField
                                    label={
                                        field === "lastName"
                                            ? "Фамилия"
                                            : field === "firstName"
                                                ? "Имя"
                                                : field === "middleName"
                                                    ? "Отчество"
                                                    : "Почта"
                                    }
                                    value={currentUser[field] || ""}
                                    onChange={(e) => handleFieldChange(field, e.target.value)}
                                    onBlur={() => handleBlur(field)}
                                    onKeyDown={(e) => handleKeyDown(field, e)}
                                    variant="outlined"
                                    error={!!errors[field]}
                                    helperText={errors[field] || ""}
                                />
                            ) : (
                                <Typography
                                    onClick={() => handleFocus(field)}
                                    sx={{
                                        fontSize: "1rem",
                                        cursor: "pointer",
                                        "&:hover": {
                                            textDecoration: "underline",
                                        },
                                    }}
                                >
                                    {field === "lastName"
                                        ? `Фамилия: ${currentUser.lastName}`
                                        : field === "firstName"
                                            ? `Имя: ${currentUser.firstName}`
                                            : field === "middleName"
                                                ? `Отчество: ${currentUser.middleName || "Нет данных"}`
                                                : `Почта: ${currentUser.email}`}
                                </Typography>
                            )}
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};
