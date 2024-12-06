import { Typography } from "@mui/material";
import s from "./auth-landing.module.scss";
import Typewriter from "typewriter-effect";
import {LoginRegister} from "../login-register/login-register.tsx";

export const AuthLanding = () => {
    return (
        <div className={s.authLanding}>
            <Typography
                component="h1"
                sx={{
                    fontSize: "2rem",
                    fontWeight: "bold",
                    color: "#1F2937",
                    textAlign: "center",
                }}
            >
                <Typewriter
                    options={{
                        autoStart: true,
                        loop: false,
                        delay: 75,
                    }}
                    onInit={(typewriter: any) => {
                        typewriter
                            .typeString("Добро пожаловать на сайт SmartService!") // Печатаем текст
                            .start();
                    }}
                />
            </Typography>
            {/*<Typography component="p" sx={{ marginTop: "1rem", fontSize: "1.2rem", textAlign: "center" }}>*/}
            {/*    Выберите действие:*/}
            {/*</Typography>*/}
            {/*<div className={s.buttons}>*/}
            {/*    <button onClick={() => navigate("/login")}>Войти</button>*/}
            {/*    <button onClick={() => navigate("/register")}>Зарегистрироваться</button>}*/}
            {/*</div>*/}
            <LoginRegister/>
        </div>
    );
};
