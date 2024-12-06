import { FaHome, FaList, FaUser, FaSignOutAlt, FaSignInAlt, FaFeather } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { useAuth } from "../../context/auth-context.tsx";
import s from "./navbar.module.scss";

export const Navbar = () => {
    const { logout, isAuthenticated } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogout = () => {
        logout(); // Выходим из системы
        navigate("/"); // Перенаправляем на главную
    };

    const isActive = (path: string) => location.pathname === path; // Проверяем, соответствует ли путь

    return (
        <Box component="nav" className={s.navbar}>
            <Box
                className={s.navBrand}
            >
                <Typography
                    component="span"
                    sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "#E5E7EB",
                    }}
                >
                    Smart-Service
                </Typography>
                <FaFeather size={24} color="#3B82F6" />
            </Box>

            {/* Ссылки навигации */}
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
                {isAuthenticated ? (
                    <>
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
                    </>
                ) : (
                    <Box component="li" className={s.navItem}>
                        <Link to="/auth">
                            <FaSignInAlt />
                            <Typography component="span">Войти</Typography>
                        </Link>
                    </Box>
                )}
            </Box>
        </Box>
    );
};
