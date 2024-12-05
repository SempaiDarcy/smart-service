export interface Company {
    id: number; // Уникальный ID компании
    name: string; // Название компании
    description: string; // Описание компании
    photo: string; // URL или путь к фото
    rating: number; // Средний рейтинг (0-5)
    reviews: Review[]; // Массив отзывов
    likes: number; // Количество лайков
}

export interface Review {
    userId: number; // ID пользователя, оставившего отзыв
    userName: string; // Имя пользователя
    comment: string; // Текст отзыва
    rating: number; // Рейтинг от 1 до 5
}
