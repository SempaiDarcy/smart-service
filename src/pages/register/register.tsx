import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./register.module.scss";
import {useAuth} from "../../context/auth-context.tsx";

export const Register = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login: authenticate } = useAuth();

    const handleRegister = () => {
        const users = JSON.parse(localStorage.getItem("myProject_users") || "[]");
        if (users.find((u: any) => u.login === login)) {
            setError("Пользователь с таким логином уже существует!");
            return;
        }

        const newUser = { id: Date.now(), login, password };
        localStorage.setItem("myProject_users", JSON.stringify([...users, newUser]));
        authenticate(newUser);
        navigate("/");
    };

    return (
        <div className={s.register}>
            <h1>Регистрация</h1>
            {error && <p className={s.error}>{error}</p>}
            <input
                type="text"
                placeholder="Логин"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
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

