import { FaHome, FaList, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import s from "./navbar.module.scss";
import { useAuth } from "../../context/auth-context.tsx";

export const Navbar = () => {

    const { logout } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout(); // Выходим из системы
        navigate("/"); // Перенаправляем на AuthLanding
    };

    const isActive = (path: string) => location.pathname === path; // Проверяем, соответствует ли путь

    return (
        <Box component="nav" className={s.navbar}>
            <Box component="ul" className={s.navList}>
                <Box component="li" className={`${s.navItem} ${isActive("/") ? s.active : ""}`}>
                    <Link to="/">
                        <FaHome />
                        <Typography component="span">Главная</Typography>
                    </Link>
                </Box>
                <Box component="li" className={`${s.navItem} ${isActive("/catalog") ? s.active : ""}`}>
                    <Link to="/catalog">
                        <FaList />
                        <Typography component="span">Каталог</Typography>
                    </Link>
                </Box>
                <Box component="li" className={`${s.navItem} ${isActive("/profile") ? s.active : ""}`}>
                    <Link to="/profile">
                        <FaUser />
                        <Typography component="span">Личный кабинет</Typography>
                    </Link>
                </Box>
                <Box component="li" className={s.navItem} onClick={handleLogout}>
                    <a>
                        <FaSignOutAlt />
                        <Typography component="span">Выйти</Typography>
                    </a>
                </Box>
            </Box>
        </Box>
    );
};
