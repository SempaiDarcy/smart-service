import { FaHome, FaList, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import s from "./navbar.module.scss";
import { useAuth } from "../../context/auth-context.tsx";

export const Navbar = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout(); // Выходим из системы
        navigate("/"); // Перенаправляем на AuthLanding
    };

    return (
        <nav className={s.navbar}>
            <ul className={s.navList}>
                <li className={s.navItem}>
                    <Link to="/">
                        <FaHome /> Главная
                    </Link>
                </li>
                <li className={s.navItem}>
                    <Link to="/catalog">
                        <FaList /> Каталог
                    </Link>
                </li>
                <li className={s.navItem}>
                    <Link to="/profile">
                        <FaUser /> Личный кабинет
                    </Link>
                </li>
                <li className={s.navItem} onClick={handleLogout}>
                    <a>
                        <FaSignOutAlt /> Выйти
                    </a>
                </li>
            </ul>
        </nav>
    );
};
