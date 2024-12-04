import s from "./profile.module.scss";

export const Profile = () => {
    const currentUser = JSON.parse(localStorage.getItem("myProject_currentUser") || "{}");

    if (!currentUser || !currentUser.lastName || !currentUser.firstName) {
        return <p className={s.error}>Данные пользователя недоступны.</p>;
    }

    return (
        <div className={s.profile}>
            <h1>Личный кабинет</h1>
            <div className={s.info}>
                <p><strong>Фамилия:</strong> {currentUser.lastName}</p>
                <p><strong>Имя:</strong> {currentUser.firstName}</p>
                {currentUser.middleName && (
                    <p><strong>Отчество:</strong> {currentUser.middleName}</p>
                )}
                <p><strong>Логин:</strong> {currentUser.login}</p>
            </div>
        </div>
    );
};
