import { useState } from "react";
import s from "./profile.module.scss";

export const Profile = () => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("myProject_currentUser") || "{}")
    );

    const [isEditing, setIsEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState({ ...currentUser });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUpdatedUser({ ...updatedUser, [name]: value });
    };

    const handleSave = () => {
        const allUsers = JSON.parse(localStorage.getItem("myProject_users") || "[]");

        // Проверка на уникальность почты
        const isEmailTaken = allUsers.some(
            (user: any) => user.email === updatedUser.email && user.id !== updatedUser.id
        );

        if (isEmailTaken) {
            alert("Пользователь с такой почтой уже существует!");
            return;
        }

        // Обновляем данные в массиве пользователей
        const updatedUsers = allUsers.map((user: any) =>
            user.id === currentUser.id ? updatedUser : user
        );

        // Сохраняем обновлённые данные в localStorage
        localStorage.setItem("myProject_users", JSON.stringify(updatedUsers));
        localStorage.setItem("myProject_currentUser", JSON.stringify(updatedUser));

        setCurrentUser(updatedUser);
        setIsEditing(false);
    };

    const handleEdit = () => setIsEditing(true);

    if (!currentUser || !currentUser.lastName || !currentUser.firstName) {
        return <p className={s.error}>Данные пользователя недоступны.</p>;
    }

    return (
        <div className={s.profile}>
            <h1>Личный кабинет</h1>
            <div className={s.profileInfo}>
                <div className={s.avatar}>
                    <img
                        src={currentUser.photo || "https://www.gravatar.com/avatar/?d=identicon"}
                        alt="Аватар"
                    />
                </div>
                <div className={s.details}>
                    {!isEditing ? (
                        <>
                            <p><strong>Фамилия:</strong> {currentUser.lastName}</p>
                            <p><strong>Имя:</strong> {currentUser.firstName}</p>
                            <p><strong>Отчество:</strong> {currentUser.middleName || "Нет данных"}</p>
                            <p><strong>Почта:</strong> {currentUser.email}</p>
                            <button className={s.editButton} onClick={handleEdit}>Редактировать</button>
                        </>
                    ) : (
                        <>
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Фамилия"
                                value={updatedUser.lastName}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="firstName"
                                placeholder="Имя"
                                value={updatedUser.firstName}
                                onChange={handleInputChange}
                            />
                            <input
                                type="text"
                                name="middleName"
                                placeholder="Отчество"
                                value={updatedUser.middleName || ""}
                                onChange={handleInputChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Почта"
                                value={updatedUser.email}
                                onChange={handleInputChange}
                            />
                            <button className={s.saveButton} onClick={handleSave}>Сохранить</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};
