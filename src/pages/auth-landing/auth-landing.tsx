import {useNavigate} from "react-router-dom";
import s from "./auth-landing.module.scss";

export const AuthLanding = () => {
    const navigate = useNavigate();

    return (
        <div className={s.authLanding}><h1>Добро пожаловать!</h1>
            <p>Выберите действие:</p>
            <div className={s.buttons}>
                <button onClick={() => navigate("/login")}>Войти</button>
                <button onClick={() => navigate("/register")}>Зарегистрироваться</button>
            </div>
        </div>);
};