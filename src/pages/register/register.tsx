import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./register.module.scss";
import { useAuth } from "../../context/auth-context.tsx";

export const Register = () => {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [email, setEmail] = useState(""); // Почта
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login: authenticate } = useAuth();

    // Валидация данных
    const validateFields = () => {
        if (!lastName.trim() || !firstName.trim()) {
            setError("Фамилия и Имя обязательны для заполнения.");
            return false;
        }
        if (!email.trim() || !/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            setError("Введите корректный адрес электронной почты.");
            return false;
        }
        if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
            setError("Пароль должен содержать минимум 8 символов, хотя бы одну букву и одну цифру.");
            return false;
        }
        setError("");
        return true;
    };

    const handleRegister = () => {
        if (!validateFields()) return;

        const users = JSON.parse(localStorage.getItem("myProject_users") || "[]");
        if (users.find((u: any) => u.email === email)) {
            setError("Пользователь с такой почтой уже зарегистрирован!");
            return;
        }

        const newUser = {
            id: Date.now(),
            lastName,
            firstName,
            middleName,
            email,
            password,
        };

        localStorage.setItem("myProject_users", JSON.stringify([...users, newUser]));
        authenticate(newUser); // Аутентификация после регистрации
        navigate("/"); // Переход на главную
    };

    return (
        <div className={s.register}>
            <h1>Регистрация</h1>
            {error && <p className={s.error}>{error}</p>}
            <input
                type="text"
                placeholder="Фамилия"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Имя"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Отчество (необязательно)"
                value={middleName}
                onChange={(e) => setMiddleName(e.target.value)}
            />
            <input
                type="email"
                placeholder="Почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button onClick={handleRegister}>Зарегистрироваться</button>
        </div>
    );
};
