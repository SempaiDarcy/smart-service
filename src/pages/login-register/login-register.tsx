import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Tabs, Tab, TextField, Button, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../context/auth-context";

export const LoginRegister = () => {
    const [tabIndex, setTabIndex] = useState(0); // Управление вкладками
    const [showPassword, setShowPassword] = useState(false); // Для отображения/скрытия пароля

    const navigate = useNavigate();
    const { login: authenticate } = useAuth();

    // Общие поля
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Поля для регистрации
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabIndex(newValue);
        setError(""); // Сбрасываем ошибку при переключении вкладок
    };

    const handleLogin = () => {
        if (!email.trim() || !password.trim()) {
            setError("Заполните все поля.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("myProject_users") || "[]");
        const user = users.find(
            (u: any) => u.email === email && u.password === password
        );

        if (!user) {
            setError("Неверная почта или пароль.");
            return;
        }

        authenticate(user);
        navigate("/");
    };

    const handleRegister = () => {
        if (!lastName.trim() || !firstName.trim() || !email.trim() || !password.trim()) {
            setError("Заполните все обязательные поля.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("myProject_users") || "[]");
        if (users.find((u: any) => u.email === email)) {
            setError("Пользователь с такой почтой уже существует.");
            return;
        }

        const newUser = {
            id: Date.now(),
            lastName,
            firstName,
            email,
            password,
        };

        localStorage.setItem("myProject_users", JSON.stringify([...users, newUser]));
        authenticate(newUser);
        navigate("/");
    };

    return (
        <Box
            sx={{
                width: "400px",
                margin: "2rem auto",
                backgroundColor: "#1F2937",
                borderRadius: "8px",
                padding: "20px",
                color: "#fff",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
            }}
        >
            {/* Вкладки */}
            <Tabs
                value={tabIndex}
                onChange={handleTabChange}
                centered
                textColor="inherit"
                TabIndicatorProps={{ style: { backgroundColor: "#3b82f6" } }}
                sx={{
                    marginBottom: "20px",
                    "& .MuiTab-root": {
                        fontWeight: "bold",
                        color: "#aaa",
                        "&.Mui-selected": {
                            color: "#3b82f6",
                        },
                    },
                }}
            >
                <Tab label="Sign In" />
                <Tab label="Sign Up" />
            </Tabs>

            {/* Форма */}
            {tabIndex === 0 ? (
                // Форма входа
                <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {error && <Box sx={{ color: "#f44336", fontSize: "14px" }}>{error}</Box>}
                    <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        sx={{ input: { color: "#fff" }, "& .MuiOutlinedInput-root": { borderColor: "#555" } }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                        sx={{ color: "#aaa" }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        sx={{ input: { color: "#fff" }, "& .MuiOutlinedInput-root": { borderColor: "#555" } }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleLogin}
                        sx={{ backgroundColor: "#3b82f6", "&:hover": { backgroundColor: "#2563eb" } }}
                    >
                        Sign In
                    </Button>
                </Box>
            ) : (
                // Форма регистрации
                <Box component="form" sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    {error && <Box sx={{ color: "#f44336", fontSize: "14px" }}>{error}</Box>}
                    <TextField
                        fullWidth
                        label="First Name"
                        variant="outlined"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        sx={{ input: { color: "#fff" }, "& .MuiOutlinedInput-root": { borderColor: "#555" } }}
                    />
                    <TextField
                        fullWidth
                        label="Last Name"
                        variant="outlined"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        sx={{ input: { color: "#fff" }, "& .MuiOutlinedInput-root": { borderColor: "#555" } }}
                    />
                    <TextField
                        fullWidth
                        label="Email Address"
                        variant="outlined"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        sx={{ input: { color: "#fff" }, "& .MuiOutlinedInput-root": { borderColor: "#555" } }}
                    />
                    <TextField
                        fullWidth
                        label="Password"
                        variant="outlined"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(!showPassword)}
                                        edge="end"
                                        sx={{ color: "#aaa" }}
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                        InputLabelProps={{ style: { color: "#aaa" } }}
                        sx={{ input: { color: "#fff" }, "& .MuiOutlinedInput-root": { borderColor: "#555" } }}
                    />
                    <Button
                        fullWidth
                        variant="contained"
                        onClick={handleRegister}
                        sx={{ backgroundColor: "#3b82f6", "&:hover": { backgroundColor: "#2563eb" } }}
                    >
                        Create Account
                    </Button>
                </Box>
            )}
        </Box>
    );
};

