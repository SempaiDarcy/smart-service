import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./login.module.scss";
import { useAuth } from "../../context/auth-context.tsx";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login: authenticate } = useAuth();

    const handleLogin = () => {
        if (!email.trim()) {
            setError("Введите почту.");
            return;
        }
        if (!password.trim()) {
            setError("Введите пароль.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("myProject_users") || "[]");
        const user = users.find(
            (u: any) => u.email === email && u.password === password
        );

        if (!user) {
            setError("Неверная почта или пароль!");
            return;
        }

        authenticate(user);
        navigate("/");
    };

    return (
        <div className={s.login}>
            <h1>Вход</h1>
            {error && <p className={s.error}>{error}</p>}
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
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};
