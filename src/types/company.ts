export interface Company {
    id: number; // Уникальный ID компании
    name: string; // Название компании
    description: string; // Краткое описание компании
    detailedDescription: string; // Подробное описание компании
    photo: string; // URL или путь к фото
    rating: number; // Средний рейтинг (0-5)
    reviews: Review[]; // Массив отзывов
    likes: number; // Количество лайков
    email: string; // Электронная почта компании
    address: string; // Адрес компании
    services: string[]; // Услуги, которые предоставляет компания
    website: string; // Сайт компании
    workingHours: string; // Часы работы
    workingDays: string; // Дни работы
}

export interface Review {
    userId: number; // ID пользователя, оставившего отзыв
    userName: string; // Имя пользователя
    comment: string; // Текст отзыва
    rating: number; // Рейтинг от 1 до 5
    userPhoto?: string; // URL или путь к фото пользователя (опционально)
}


// export interface Company {
//     id: number; // Уникальный ID компании
//     name: string; // Название компании
//     description: string; // Описание компании
//     photo: string; // URL или путь к фото
//     rating: number; // Средний рейтинг (0-5)
//     reviews: Review[]; // Массив отзывов
//     likes: number; // Количество лайков
// }
//
// export interface Review {
//     userId: number; // ID пользователя, оставившего отзыв
//     userName: string; // Имя пользователя
//     comment: string; // Текст отзыва
//     rating: number; // Рейтинг от 1 до 5
//     userPhoto?: string; // URL или путь к фото пользователя (опционально)
// }