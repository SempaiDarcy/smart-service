import greentech from './../assets/company/greentech.jpg';
import edusmart from './../assets/company/edusmart.jpg';
import medicare from './../assets/company/medicare.jpg';
import agroworld from './../assets/company/agroworld.jpg';
import lampochka from './../assets/company/lampochka.jpg';
import itechnology from './../assets/company/itechnology.png';
import eventpro from './../assets/company/eventpro.jpg';
import fintech from './../assets/company/fintech.jpg';
import ithelp from './../assets/company/ithelp.png';
import { Company } from "../types/company.ts";

export const companiesArray: Company[] = [
    {
        id: 1,
        name: "EventPro",
        description: "Платформа для автоматизации мероприятий.",
        detailedDescription: "EventPro предоставляет инновационные решения для управления мероприятиями любого масштаба. Мы используем современные веб-технологии, чтобы сделать процесс организации простым и эффективным. Наша команда профессионалов готова поддержать вас на каждом этапе.",
        photo: eventpro,
        rating: 4.5,
        reviews: [
            {
                userId: 101,
                userName: "Алиса Иванова",
                comment: "Отличная платформа! Очень помогает в организации мероприятий.",
                rating: 5,
                userPhoto: "https://example.com/photos/user1.jpg",
            },
            {
                userId: 102,
                userName: "Иван Петров",
                comment: "Удобный интерфейс и отличные функции.",
                rating: 4,
                userPhoto: "https://example.com/photos/user2.jpg",
            },
        ],
        likes: 9,
        email: "contact@eventpro.com",
        address: "Москва, ул. Примерная, д. 10",
        services: ["Организация мероприятий", "Координация событий", "Аренда оборудования"],
        website: "www.eventpro.com",
        workingHours: "09:00 - 18:00",
        workingDays: "Пн - Пт",
    },
    {
        id: 2,
        name: "GreenTech",
        description: "Компания, разрабатывающая экологичные решения.",
        detailedDescription: "GreenTech специализируется на разработке экологически чистых технологий и продуктов, которые помогают сократить углеродный след и улучшить качество жизни. Мы предлагаем широкий спектр услуг, включая консультации и аудит.",
        photo: greentech,
        rating: 4.2,
        reviews: [
            {
                userId: 103,
                userName: "Олег Смирнов",
                comment: "Замечательные экологические решения. Рекомендую!",
                rating: 4,
                userPhoto: "https://example.com/photos/user3.jpg",
            },
            {
                userId: 104,
                userName: "Мария Кузнецова",
                comment: "Хорошие технологии, но немного дороговато.",
                rating: 3,
                userPhoto: "https://example.com/photos/user4.jpg",
            },
        ],
        likes: 12,
        email: "info@greentech.com",
        address: "Санкт-Петербург, ул. Эко, д. 22",
        services: ["Разработка IoT решений", "Консультации по экологии", "Экологический аудит"],
        website: "www.greentech.com",
        workingHours: "10:00 - 19:00",
        workingDays: "Пн - Сб",
    },
    {
        id: 3,
        name: "FinTech Solutions",
        description: "Разработка инновационных финансовых приложений.",
        detailedDescription: "FinTech Solutions предлагает широкий спектр финансовых технологий, включая API для банков и стартапов, а также кастомизированные приложения для бизнеса. Наша команда экспертов готова помочь вам достичь ваших целей.",
        photo: fintech,
        rating: 4.7,
        reviews: [
            {
                userId: 105,
                userName: "Петр Сидоров",
                comment: "Отличные решения для бизнеса!",
                rating: 5,
                userPhoto: "https://example.com/photos/user5.jpg",
            },
            {
                userId: 106,
                userName: "Алексей Иванов",
                comment: "Не хватает документации для разработчиков.",
                rating: 3,
                userPhoto: "https://example.com/photos/user6.jpg",
            },
        ],
        likes: 17,
        email: "support@fintech.com",
        address: "Екатеринбург, ул. Финансовая, д. 5",
        services: ["Разработка приложений", "API для банков", "Консультации по финансам"],
        website: "www.fintechsolutions.com",
        workingHours: "08:00 - 17:00",
        workingDays: "Пн - Пт",
    },
    {
        id: 4,
        name: "EduSmart",
        description: "Онлайн-платформа для обучения.",
        detailedDescription: "EduSmart предлагает курсы по программированию и другим IT-направлениям. Мы помогаем людям развивать навыки и находить работу в сфере технологий. Обучение проходит в удобном формате, что позволяет учиться в своем темпе.",
        photo: edusmart,
        rating: 4.8,
        reviews: [
            {
                userId: 107,
                userName: "Дмитрий Фролов",
                comment: "Лучший ресурс для обучения программированию!",
                rating: 5,
                userPhoto: "https://example.com/photos/user7.jpg",
            },
            {
                userId: 108,
                userName: "Елена Григорьева",
                comment: "Много полезной информации и курсов.",
                rating: 4,
                userPhoto: "https://example.com/photos/user8.jpg",
            },
        ],
        likes: 20,
        email: "info@edusmart.com",
        address: "Казань, ул. Учебная, д. 15",
        services: ["Курсы по программированию", "Мастер-классы", "Консультации"],
        website: "www.edusmart.com",
        workingHours: "09:00 - 20:00",
        workingDays: "Пн - Вс",
    },
    {
        id: 5,
        name: "It-Help",
        description: "Служба поддержки IT-инфраструктуры.",
        detailedDescription: "It-Help предоставляет услуги по поддержке и обслуживанию IT-инфраструктуры для бизнеса, а также разработку кастомизированных решений. Наша команда работает на результат и всегда готова помочь.",
        photo: ithelp,
        rating: 4.3,
        reviews: [
            {
                userId: 109,
                userName: "Сергей Алексеев",
                comment: "Хорошая служба поддержки.",
                rating: 4,
                userPhoto: "https://example.com/photos/user9.jpg",
            },
            {
                userId: 110,
                userName: "Татьяна Лебедева",
                comment: "Проблемы решаются быстро.",
                rating: 5,
                userPhoto: "https://example.com/photos/user10.jpg",
            },
        ],
        likes: 11,
        email: "help@ithelp.com",
        address: "Новосибирск, ул. IT, д. 8",
        services: ["Поддержка IT-инфраструктуры", "Разработка ПО", "Консультации"],
        website: "www.ithelp.com",
        workingHours: "09:00 - 18:00",
        workingDays: "Пн - Пт",
    },
    {
        id: 6,
        name: "MediCare",
        description: "Инновационные программные решения для медицины.",
        detailedDescription: "MediCare предлагает передовые программные решения для медицинских учреждений. Мы помогаем оптимизировать процессы, улучшить качество обслуживания и обеспечить безопасность данных пациентов.",
        photo: medicare,
        rating: 4.6,
        reviews: [
            {
                userId: 111,
                userName: "Артем Васильев",
                comment: "Отличный софт для медицины.",
                rating: 5,
                userPhoto: "https://example.com/photos/user11.jpg",
            },
            {
                userId: 112,
                userName: "Светлана Романова",
                comment: "Идеально для клиник.",
                rating: 4,
                userPhoto: "https://example.com/photos/user12.jpg",
            },
        ],
        likes: 18,
        email: "info@medicare.com",
        address: "Москва, ул. Медицинская, д. 3",
        services: ["Программное обеспечение для клиник", "Телемедицина", "Управление медицинскими данными"],
        website: "www.medicare.com",
        workingHours: "08:00 - 17:00",
        workingDays: "Пн - Пт",
    },
    {
        id: 7,
        name: "AgroWorld",
        description: "Разработка IT-инструментов для сельского хозяйства.",
        detailedDescription: "AgroWorld предлагает современные IT-решения для автоматизации процессов в сельском хозяйстве. Мы помогаем фермерам и агрокомпаниям повышать эффективность и устойчивость бизнеса.",
        photo: agroworld,
        rating: 4.0,
        reviews: [
            {
                userId: 113,
                userName: "Евгений Рябов",
                comment: "Хорошие инструменты для агробизнеса.",
                rating: 4,
                userPhoto: "https://example.com/photos/user13.jpg",
            },
            {
                userId: 114,
                userName: "Ксения Пономарева",
                comment: "Помогли оптимизировать процессы.",
                rating: 4,
                userPhoto: "https://example.com/photos/user14.jpg",
            },
        ],
        likes: 5,
        email: "contact@agroworld.com",
        address: "Калуга, ул. Сельская, д. 10",
        services: ["Агро-IT решения", "Консультации для фермеров", "Автоматизация процессов"],
        website: "www.agroworld.com",
        workingHours: "09:00 - 17:00",
        workingDays: "Пн - Пт",
    },
    {
        id: 8,
        name: "LightBULB",
        description: "Умные решения для освещения.",
        detailedDescription: "LightBULB предлагает инновационные решения для умного освещения. Мы используем современные технологии, чтобы сделать ваш дом более комфортным и безопасным.",
        photo: lampochka,
        rating: 4.1,
        reviews: [
            {
                userId: 115,
                userName: "Евгений Кузнецов",
                comment: "Интересные решения, но цена высока.",
                rating: 3,
                userPhoto: "https://example.com/photos/user15.jpg",
            },
            {
                userId: 116,
                userName: "Людмила Сидорова",
                comment: "Довольна покупкой. Рекомендую!",
                rating: 5,
                userPhoto: "https://example.com/photos/user16.jpg",
            },
        ],
        likes: 7,
        email: "info@lightbulb.com",
        address: "Ростов-на-Дону, ул. Светлая, д. 5",
        services: ["Умное освещение", "Консультации по освещению", "Продажа оборудования"],
        website: "www.lightbulb.com",
        workingHours: "10:00 - 19:00",
        workingDays: "Пн - Сб",
    },
    {
        id: 9,
        name: "ITECHNOLOGY",
        description: "IT-продукты для бизнеса.",
        detailedDescription: "ITECHNOLOGY создает IT-продукты для автоматизации бизнеса и повышения производительности. Мы помогаем компаниям оптимизировать внутренние процессы и улучшить результаты.",
        photo: itechnology,
        rating: 4.6,
        reviews: [
            {
                userId: 117,
                userName: "Роман Гусев",
                comment: "Качественные продукты.",
                rating: 5,
                userPhoto: "https://example.com/photos/user17.jpg",
            },
            {
                userId: 118,
                userName: "Светлана Мельникова",
                comment: "Проблемы с интеграцией.",
                rating: 3,
                userPhoto: "https://example.com/photos/user18.jpg",
            },
        ],
        likes: 16,
        email: "info@itechnology.com",
        address: "Воронеж, ул. IT, д. 20",
        services: ["Разработка ПО", "IT-консалтинг", "Системная интеграция"],
        website: "www.itechnology.com",
        workingHours: "09:00 - 18:00",
        workingDays: "Пн - Пт",
    },
];

// Сохраняем данные в localStorage
if (!localStorage.getItem("companies")) {
    localStorage.setItem("companies", JSON.stringify(companiesArray));
}







// import greentech from './../assets/company/greentech.jpg';
// import edusmart from './../assets/company/edusmart.jpg';
// import medicare from './../assets/company/medicare.jpg';
// import agroworld from './../assets/company/agroworld.jpg';
// import lampochka from './../assets/company/lampochka.jpg';
// import itechnology from './../assets/company/itechnology.png';
// import eventpro from './../assets/company/eventpro.jpg';
// import fintech from './../assets/company/fintech.jpg';
// import ithelp from './../assets/company/ithelp.png';
// import { Company } from "../types/company.ts";
// export const companiesArray: Company[] = [
//     {
//         id: 1,
//         name: "EventPro",
//         description: "Платформа для автоматизации мероприятий с использованием современных веб-технологий.",
//         photo: eventpro,
//         rating: 4.5,
//         reviews: [
//             {
//                 userId: 101,
//                 userName: "Алиса Иванова",
//                 comment: "Отличная платформа! Очень помогает в организации мероприятий.",
//                 rating: 5,
//                 userPhoto: "https://example.com/photos/user1.jpg",
//             },
//             {
//                 userId: 102,
//                 userName: "Иван Петров",
//                 comment: "Удобный интерфейс и отличные функции.",
//                 rating: 4,
//                 userPhoto: "https://example.com/photos/user2.jpg",
//             },
//             {
//                 userId: 103,
//                 userName: "Дмитрий Фролов",
//                 comment: "Немного сложно разобраться с настройками.",
//                 rating: 3,
//                 userPhoto: "https://example.com/photos/user3.jpg",
//             },
//             {
//                 userId: 104,
//                 userName: "Наталья Смирнова",
//                 comment: "Система работает стабильно, рекомендую!",
//                 rating: 5,
//                 userPhoto: "https://example.com/photos/user4.jpg",
//             },
//         ],
//         likes: 9,
//     },
//     {
//         id: 2,
//         name: "GreenTech",
//         description: "Компания, разрабатывающая экологичные решения с применением IoT и облачных технологий.",
//         photo: greentech,
//         rating: 4.2,
//         reviews: [
//             {
//                 userId: 105,
//                 userName: "Олег Смирнов",
//                 comment: "Замечательные экологические решения. Рекомендую!",
//                 rating: 4,
//                 userPhoto: "https://example.com/photos/user5.jpg",
//             },
//             {
//                 userId: 106,
//                 userName: "Мария Кузнецова",
//                 comment: "Хорошие технологии, но немного дороговато.",
//                 rating: 3,
//                 userPhoto: "https://example.com/photos/user6.jpg",
//             },
//             {
//                 userId: 107,
//                 userName: "Сергей Павлов",
//                 comment: "Как же я рад, что выбрал именно эту компанию!",
//                 rating: 5,
//                 userPhoto: "https://example.com/photos/user7.jpg",
//             },
//             {
//                 userId: 108,
//                 userName: "Елена Григорьева",
//                 comment: "Не хватает поддержки для новичков.",
//                 rating: 2,
//                 userPhoto: "https://example.com/photos/user8.jpg",
//             },
//         ],
//         likes: 12,
//     },
//     {
//         id: 3,
//         name: "FinTech Solutions",
//         description: "Разработка инновационных финансовых приложений и API для банков и финтех-стартапов.",
//         photo: fintech,
//         rating: 4.7,
//         reviews: [
//             {
//                 userId: 109,
//                 userName: "Петр Сидоров",
//                 comment: "Отличные решения для бизнеса!",
//                 rating: 5,
//                 userPhoto: "https://example.com/photos/user9.jpg",
//             },
//             {
//                 userId: 110,
//                 userName: "Алексей Иванов",
//                 comment: "Не хватает документации для разработчиков.",
//                 rating: 3,
//                 userPhoto: "https://example.com/photos/user10.jpg",
//             },
//             {
//                 userId: 111,
//                 userName: "Анна Петрова",
//                 comment: "Классный сервис, рекомендую всем!",
//                 rating: 5,
//                 userPhoto: "https://example.com/photos/user11.jpg",
//             },
//         ],
//         likes: 17,
//     },
//     {
//         id: 4,
//         name: "EduSmart",
//         description: "Онлайн-платформа для обучения программированию и развития навыков разработки.",
//         photo: edusmart,
//         rating: 4.8,
//         reviews: [
//             {
//                 userId: 112,
//                 userName: "Дмитрий Фролов",
//                 comment: "Лучший ресурс для обучения программированию!",
//                 rating: 5,
//                 userPhoto: "https://example.com/photos/user12.jpg",
//             },
//             {
//                 userId: 113,
//                 userName: "Елена Григорьева",
//                 comment: "Много полезной информации и курсов.",
//                 rating: 4,
//                 userPhoto: "https://example.com/photos/user13.jpg",
//             },
//             {
//                 userId: 114,
//                 userName: "Алексей Сидоров",
//                 comment: "Некоторые курсы слишком сложные для начинающих.",
//                 rating: 3,
//                 userPhoto: "https://example.com/photos/user14.jpg",
//             },
//         ],
//         likes: 20,
//     },
//     {
//         id: 5,
//         name: "It-Help",
//         description: "Служба поддержки IT-инфраструктуры и разработка кастомизированных решений.",
//         photo: ithelp,
//         rating: 4.3,
//         reviews: [
//             {
//                 userId: 115,
//                 userName: "Сергей Алексеев",
//                 comment: "Хорошая служба поддержки.",
//                 rating: 4,
//                 userPhoto: "https://example.com/photos/user15.jpg",
//             },
//             {
//                 userId: 116,
//                 userName: "Татьяна Лебедева",
//                 comment: "Проблемы решаются быстро.",
//                 rating: 5,
//                 userPhoto: "https://example.com/photos/user16.jpg",
//             },
//             {
//                 userId: 117,
//                 userName: "Ольга Ковалёва",
//                 comment: "Иногда сложности с ответами на вопросы.",
//                 rating: 2,
//                 userPhoto: "https://example.com/photos/user17.jpg",
//             },
//         ],
//         likes: 11,
//     },
//     {
//         id: 6,
//         name: "MediCare",
//         description: "Инновационные программные решения для медицинских учреждений и телемедицины.",
//         photo: medicare,
//         rating: 4.7,
//         reviews: [
//             {
//                 userId: 118,
//                 userName: "Артем Васильев",
//                 comment: "Отличный софт для медицины.",
//                 rating: 5,
//                 userPhoto: "https://example.com/photos/user18.jpg",
//             },
//             {
//                 userId: 119,
//                 userName: "Светлана Романова",
//                 comment: "Идеально для клиник.",
//                 rating: 4,
//                 userPhoto: "https://example.com/photos/user19.jpg",
//             },
//             {
//                 userId: 120,
//                 userName: "Николай Соловьев",
//                 comment: "Интерфейс немного устарел.",
//                 rating: 3,
//                 userPhoto: "https://example.com/photos/user20.jpg",
//             },
//         ],
//         likes: 18,
//     },
//     {
//         id: 7,
//         name: "AgroWorld",
//         description: "Разработка IT-инструментов для автоматизации сельскохозяйственного бизнеса.",
//         photo: agroworld,
//         rating: 4.0,
//         reviews: [
//             {
//                 userId: 121,
//                 userName: "Евгений Рябов",
//                 comment: "Хорошие инструменты для агробизнеса.",
//                 rating: 4,
//                 userPhoto: "https://example.com/photos/user21.jpg",
//             },
//             {
//                 userId: 122,
//                 userName: "Ксения Пономарева",
//                 comment: "Помогли оптимизировать процессы.",
//                 rating: 4,
//                 userPhoto: "https://example.com/photos/user22.jpg",
//             },
//             {
//                 userId: 123,
//                 userName: "Александр Ковалев",
//                 comment: "Неплохо, но можно улучшить.",
//                 rating: 3,
//                 userPhoto: "https://example.com/photos/user23.jpg",
//             },
//         ],
//         likes: 5,
//     },
//     {
//         id: 8,
//         name: "LightBULB",
//         description: "Решения для умного дома и освещения, основанные на программируемых микроконтроллерах.",
//         photo: lampochka,
//         rating: 4.1,
//         reviews: [
//             {
//                 userId: 124,
//                 userName: "Евгений Кузнецов",
//                 comment: "Интересные решения, но цена высока.",
//                 rating: 3,
//                 userPhoto: "https://example.com/photos/user24.jpg",
//             },
//             {
//                 userId: 125,
//                 userName: "Людмила Сидорова",
//                 comment: "Довольна покупкой. Рекомендую!",
//                 rating: 5,
//                 userPhoto: "https://example.com/photos/user25.jpg",
//             },
//             {
//                 userId: 126,
//                 userName: "Дмитрий Михайлов",
//                 comment: "Хорошее качество, но долго ждать доставку.",
//                 rating: 4,
//                 userPhoto: "https://example.com/photos/user26.jpg",
//             },
//         ],
//         likes: 7,
//     },
//     {
//         id: 9,
//         name: "ITECHNOLOGY",
//         description: "Компания, создающая IT-продукты для автоматизации бизнеса и повышения производительности.",
//         photo: itechnology,
//         rating: 4.6,
//         reviews: [
//             {
//                 userId: 127,
//                 userName: "Роман Гусев",
//                 comment: "Качественные продукты.",
//                 rating: 5,
//                 userPhoto: "https://example.com/photos/user27.jpg",
//             },
//             {
//                 userId: 128,
//                 userName: "Светлана Мельникова",
//                 comment: "Проблемы с интеграцией.",
//                 rating: 3,
//                 userPhoto: "https://example.com/photos/user28.jpg",
//             },
//             {
//                 userId: 129,
//                 userName: "Татьяна Кузнецова",
//                 comment: "Отличная поддержка и сервис.",
//                 rating: 5,
//                 userPhoto: "https://example.com/photos/user29.jpg",
//             },
//         ],
//         likes: 16,
//     },
// ];
//
// // Сохраняем данные в localStorage
// if (!localStorage.getItem("companies")) {
//     localStorage.setItem("companies", JSON.stringify(companiesArray));
// }














// import greentech from './../assets/company/greentech.jpg'
// import edusmart from './../assets/company/edusmart.jpg'
// import medicare from './../assets/company/medicare.jpg'
// import agroworld from './../assets/company/agroworld.jpg'
// import lampochka from './../assets/company/lampochka.jpg'
// import itechnology from './../assets/company/itechnology.png'
// import eventpro from './../assets/company/eventpro.jpg'
// import fintech from './../assets/company/fintech.jpg'
// import ithelp from './../assets/company/ithelp.png'
// import {Company} from "../types/company.ts";
//
//
// export const companiesArray: Company[] = [
//     {
//         id: 1,
//         name: "EventPro",
//         description: "Платформа для автоматизации мероприятий с использованием современных веб-технологий.",
//         photo: eventpro,
//         rating: 4.0,
//         reviews: [],
//         likes: 9,
//     },
//     {
//         id: 2,
//         name: "GreenTech",
//         description: "Компания, разрабатывающая экологичные решения с применением IoT и облачных технологий.",
//         photo: greentech,
//         rating: 4.2,
//         reviews: [],
//         likes: 12,
//     },
//     {
//         id: 3,
//         name: "FinTech Solutions",
//         description: "Разработка инновационных финансовых приложений и API для банков и финтех-стартапов.",
//         photo: fintech,
//         rating: 4.7,
//         reviews: [],
//         likes: 17,
//     },
//     {
//         id: 4,
//         name: "EduSmart",
//         description: "Онлайн-платформа для обучения программированию и развития навыков разработки.",
//         photo: edusmart,
//         rating: 4.9,
//         reviews: [],
//         likes: 20,
//     },
//     {
//         id: 5,
//         name: "It-Help",
//         description: "Служба поддержки IT-инфраструктуры и разработка кастомизированных решений.",
//         photo: ithelp,
//         rating: 4.3,
//         reviews: [],
//         likes: 11,
//     },
//     {
//         id: 6,
//         name: "MediCare",
//         description: "Инновационные программные решения для медицинских учреждений и телемедицины.",
//         photo: medicare,
//         rating: 4.7,
//         reviews: [],
//         likes: 18,
//     },
//     {
//         id: 7,
//         name: "AgroWorld",
//         description: "Разработка IT-инструментов для автоматизации сельскохозяйственного бизнеса.",
//         photo: agroworld,
//         rating: 3.6,
//         reviews: [],
//         likes: 5,
//     },
//     {
//         id: 8,
//         name: "LightBULB",
//         description: "Решения для умного дома и освещения, основанные на программируемых микроконтроллерах.",
//         photo: lampochka,
//         rating: 4.0,
//         reviews: [],
//         likes: 7,
//     },
//     {
//         id: 9,
//         name: "ITECHNOLOGY",
//         description: "Компания, создающая IT-продукты для автоматизации бизнеса и повышения производительности.",
//         photo: itechnology,
//         rating: 4.6,
//         reviews: [],
//         likes: 16,
//     },
// ];
//
// // Сохраняем данные в localStorage
// if (!localStorage.getItem("companies")) {
//     localStorage.setItem("companies", JSON.stringify(companiesArray));
// }
