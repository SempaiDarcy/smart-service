import { FaHome, FaList, FaUser } from 'react-icons/fa';
import s from './navbar.module.scss';

export const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <ul className={s.navList}>
                <li className={s.navItem}>
                    <a href="/">
                        <FaHome /> Главная
                    </a>
                </li>
                <li className={s.navItem}>
                    <a href="/catalog">
                        <FaList /> Каталог
                    </a>
                </li>
                <li className={s.navItem}>
                    <a href="/profile">
                        <FaUser /> Личный кабинет
                    </a>
                </li>
            </ul>
        </nav>
    );
};
