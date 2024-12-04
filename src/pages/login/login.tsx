import { useState } from "react";
import { useNavigate } from "react-router-dom";
import s from "./login.module.scss";
import { useAuth } from "../../context/auth-context.tsx";

export const Login = () => {
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const { login: authenticate } = useAuth();

    const handleLogin = () => {
        if (!login.trim()) {
            setError("Введите логин.");
            return;
        }
        if (!password.trim()) {
            setError("Введите пароль.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("myProject_users") || "[]");
        const user = users.find(
            (u: any) => u.login === login && u.password === password
        );

        if (!user) {
            setError("Неверный логин или пароль!");
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
            <button onClick={handleLogin}>Войти</button>
        </div>
    );
};












// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import s from "./login.module.scss";
// import {useAuth} from "../../context/auth-context.tsx";
//
// export const Login = () => {
//     const [login, setLogin] = useState("");
//     const [password, setPassword] = useState("");
//     const [error, setError] = useState("");
//     const navigate = useNavigate();
//     const { login: authenticate } = useAuth();
//
//     const handleLogin = () => {
//         const users = JSON.parse(localStorage.getItem("myProject_users") || "[]");
//         const user = users.find(
//             (u: any) => u.login === login && u.password === password
//         );
//
//         if (!user) {
//             setError("Неверный логин или пароль!");
//             return;
//         }
//
//         authenticate(user);
//         navigate("/");
//     };
//
//     return (
//         <div className={s.login}>
//             <h1>Вход</h1>
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
//             <button onClick={handleLogin}>Войти</button>
//         </div>
//     );
// };
//
