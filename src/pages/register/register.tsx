import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./register.module.scss";
import { useAuth } from "../../context/auth-context.tsx";

export const Register = () => {
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [middleName, setMiddleName] = useState(""); // Отчество (может быть пустым)
    const [login, setLogin] = useState("");
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
        if (!login.trim()) {
            setError("Логин не может быть пустым.");
            return false;
        }
        if (password.length < 8 || !/[A-Za-z]/.test(password) || !/\d/.test(password)) {
            setError("Пароль должен содержать минимум 8 символов, хотя бы одну букву и одну цифру.");
            return false;
        }
        setError(""); // Если ошибок нет
        return true;
    };

    const handleRegister = () => {
        if (!validateFields()) return;

        const users = JSON.parse(localStorage.getItem("myProject_users") || "[]");
        if (users.find((u: any) => u.login === login)) {
            setError("Пользователь с таким логином уже существует!");
            return;
        }

        const newUser = {
            id: Date.now(),
            lastName,
            firstName,
            middleName,
            login,
            password,
        };

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
                type="text"
                placeholder="Почта"
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




// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import s from "./register.module.scss";
// import {useAuth} from "../../context/auth-context.tsx";
//
// export const Register = () => {
//     const [login, setLogin] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const { login: authenticate } = useAuth();
//
//     const handleRegister = () => {
//         const users = JSON.parse(localStorage.getItem("myProject_users") || "[]");
//         if (users.find((u: any) => u.login === login)) {
//             setError("Пользователь с таким логином уже существует!");
//             return;
//         }
//
//         const newUser = { id: Date.now(), login, password };
//         localStorage.setItem("myProject_users", JSON.stringify([...users, newUser]));
//         authenticate(newUser);
//         navigate("/");
//     };
//
//     return (
//         <div className={s.register}>
//             <h1>Регистрация</h1>
//             {error && <p className={s.error}>{error}</p>}
//             <input
//                 type="text"
//                 placeholder="Логин"
//                 value={login}
//                 onChange={(e) => setLogin(e.target.value)}
//             />
//             <input
//                 type="password"
//                 placeholder="Пароль"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//             />
//             <button onClick={handleRegister}>Зарегистрироваться</button>
//         </div>
//     );
// };
//
