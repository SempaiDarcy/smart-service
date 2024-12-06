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
        description: "EventPro — это платформа, предназначенная для автоматизации процессов, связанных с организацией мероприятий. Система позволяет легко управлять регистрацией гостей, планированием программы, рассылкой приглашений и анализом итогов. Подходит для выставок, конференций, корпоративных мероприятий и других событий. Весь процесс становится прозрачным, эффективным и управляемым.",
        photo: eventpro,
        rating: 4.5,
        reviews: [
            { userId: 101, userName: "Алиса Иванова", comment: "Отличная платформа! Очень помогает в организации мероприятий.", rating: 5, userPhoto: "https://example.com/photos/user1.jpg" },
            { userId: 102, userName: "Иван Петров", comment: "Удобный интерфейс и отличные функции.", rating: 4, userPhoto: "https://example.com/photos/user2.jpg" },
        ],
        likes: 9,
        email: "contact@eventpro.com",
        address: "Москва, ул. Примерная, д. 10",
        services: [
            { name: "Планирование мероприятий", description: "Комплексные услуги по планированию мероприятий любого типа.", priceRange: "30 000 - 300 000 руб." },
            { name: "Аренда оборудования", description: "Аренда звукового и светового оборудования.", priceRange: "10 000 - 200 000 руб." },
            { name: "Координация на месте", description: "Профессиональная координация в день мероприятия.", priceRange: "20 000 - 100 000 руб." },
        ],
        website: "www.eventpro.com",
        workingHours: "09:00 - 18:00",
        workingDays: "Пн - Пт",
        averagePrice: 150000,
    },
    {
        id: 2,
        name: "GreenTech",
        description: "GreenTech специализируется на разработке экологически чистых решений. Компания предлагает умные IoT-системы для мониторинга окружающей среды, а также услуги консультации по устойчивости бизнеса. GreenTech помогает снижать углеродный след, улучшать экологическую эффективность процессов и внедрять современные технологии для устойчивого развития. Это надежный партнер для тех, кто заботится об экологии.",
        photo: greentech,
        rating: 4.2,
        reviews: [
            { userId: 103, userName: "Олег Смирнов", comment: "Замечательные экологические решения. Рекомендую!", rating: 4, userPhoto: "https://example.com/photos/user3.jpg" },
            { userId: 104, userName: "Мария Кузнецова", comment: "Хорошие технологии, но немного дороговато.", rating: 3, userPhoto: "https://example.com/photos/user4.jpg" },
        ],
        likes: 12,
        email: "info@greentech.com",
        address: "Санкт-Петербург, ул. Эко, д. 22",
        services: [
            { name: "IoT решения", description: "Умные IoT решения для мониторинга окружающей среды.", priceRange: "100 000 - 1 000 000 руб." },
            { name: "Экологические консультации", description: "Консультации по улучшению экологической практики.", priceRange: "15 000 - 150 000 руб." },
            { name: "Аудиты по устойчивости", description: "Аудиты для оценки устойчивости бизнеса.", priceRange: "30 000 - 300 000 руб." },
        ],
        website: "www.greentech.com",
        workingHours: "10:00 - 19:00",
        workingDays: "Пн - Сб",
        averagePrice: 378333,
    },
    {
        id: 3,
        name: "FinTech Solutions",
        description: "FinTech Solutions предоставляет передовые финансовые технологии, которые помогают бизнесу оптимизировать процессы и повышать прибыль. Мы предлагаем разработку кастомизированных приложений, создание API для банковских систем и услуги финансового консалтинга. FinTech Solutions — это ваш надежный партнер в мире современных финансовых технологий.",
        photo: fintech,
        rating: 4.7,
        reviews: [
            { userId: 105, userName: "Петр Сидоров", comment: "Отличные решения для бизнеса!", rating: 5, userPhoto: "https://example.com/photos/user5.jpg" },
            { userId: 106, userName: "Алексей Иванов", comment: "Не хватает документации для разработчиков.", rating: 3, userPhoto: "https://example.com/photos/user6.jpg" },
        ],
        likes: 17,
        email: "support@fintech.com",
        address: "Екатеринбург, ул. Финансовая, д. 5",
        services: [
            { name: "Разработка приложений", description: "Создание кастомизированных финансовых приложений.", priceRange: "50 000 - 500 000 руб." },
            { name: "API для банков", description: "Разработка API для интеграции с банковскими системами.", priceRange: "100 000 - 1 000 000 руб." },
            { name: "Консультации по финансам", description: "Финансовые консультации для бизнеса.", priceRange: "10 000 - 100 000 руб." },
        ],
        website: "www.fintechsolutions.com",
        workingHours: "08:00 - 17:00",
        workingDays: "Пн - Пт",
        averagePrice: 450000,
    },
    {
        id: 4,
        name: "EduSmart",
        description: "EduSmart — это онлайн-платформа, которая предоставляет доступ к образовательным курсам по IT и программированию. Благодаря удобному интерфейсу, современным методикам обучения и поддержке преподавателей платформа помогает быстро освоить новые навыки. EduSmart — ваш верный помощник в освоении IT-профессий.",
        photo: edusmart,
        rating: 4.8,
        reviews: [
            { userId: 107, userName: "Дмитрий Фролов", comment: "Лучший ресурс для обучения программированию!", rating: 5, userPhoto: "https://example.com/photos/user7.jpg" },
            { userId: 108, userName: "Елена Григорьева", comment: "Много полезной информации и курсов.", rating: 4, userPhoto: "https://example.com/photos/user8.jpg" },
        ],
        likes: 20,
        email: "info@edusmart.com",
        address: "Казань, ул. Учебная, д. 15",
        services: [
            { name: "Курсы по программированию", description: "Онлайн-курсы по языкам программирования.", priceRange: "5 000 - 30 000 руб." },
            { name: "Мастер-классы", description: "Практические мастер-классы по современным технологиям.", priceRange: "3 000 - 15 000 руб." },
            { name: "Консультации", description: "Индивидуальные консультации по обучению.", priceRange: "1 000 - 5 000 руб." },
        ],
        website: "www.edusmart.com",
        workingHours: "09:00 - 20:00",
        workingDays: "Пн - Вс",
        averagePrice: 13333,
    },
    {
        id: 5,
        name: "It-Help",
        description: "It-Help предоставляет комплексные услуги по поддержке IT-инфраструктуры. Мы решаем задачи любого уровня сложности, предоставляем консультации и оказываем услуги по оптимизации IT-ресурсов. Благодаря It-Help ваш бизнес всегда будет работать стабильно и эффективно.",
        photo: ithelp,
        rating: 4.3,
        reviews: [
            { userId: 109, userName: "Сергей Алексеев", comment: "Хорошая служба поддержки.", rating: 4, userPhoto: "https://example.com/photos/user9.jpg" },
            { userId: 110, userName: "Татьяна Лебедева", comment: "Проблемы решаются быстро.", rating: 5, userPhoto: "https://example.com/photos/user10.jpg" },
        ],
        likes: 11,
        email: "help@ithelp.com",
        address: "Новосибирск, ул. IT, д. 8",
        services: [
            { name: "Поддержка IT-инфраструктуры", description: "Услуги по технической поддержке IT-систем.", priceRange: "20 000 - 200 000 руб." },
            { name: "Разработка ПО", description: "Создание программного обеспечения под заказ.", priceRange: "50 000 - 500 000 руб." },
            { name: "Консультации", description: "Консультации по оптимизации IT-ресурсов.", priceRange: "10 000 - 100 000 руб." },
        ],
        website: "www.ithelp.com",
        workingHours: "09:00 - 18:00",
        workingDays: "Пн - Пт",
        averagePrice: 210000,
    },
    {
        id: 6,
        name: "MediCare",
        description: "MediCare — лидер в разработке программного обеспечения для медицинских учреждений. Мы создаем телемедицинские решения, системы управления клиниками и базы данных для хранения медицинских данных. MediCare помогает оптимизировать работу клиник, улучшить обслуживание пациентов и снизить затраты на управление процессами.",
        photo: medicare,
        rating: 4.6,
        reviews: [
            { userId: 111, userName: "Артем Васильев", comment: "Отличный софт для медицины.", rating: 5, userPhoto: "https://example.com/photos/user11.jpg" },
            { userId: 112, userName: "Светлана Романова", comment: "Идеально для клиник.", rating: 4, userPhoto: "https://example.com/photos/user12.jpg" },
        ],
        likes: 18,
        email: "info@medicare.com",
        address: "Москва, ул. Медицинская, д. 3",
        services: [
            { name: "Программное обеспечение для клиник", description: "Разработка ПО для управления клиниками.", priceRange: "100 000 - 1 000 000 руб." },
            { name: "Телемедицина", description: "Услуги телемедицины для удаленного обслуживания.", priceRange: "50 000 - 500 000 руб." },
            { name: "Управление данными", description: "Системы для управления медицинскими данными.", priceRange: "30 000 - 300 000 руб." },
        ],
        website: "www.medicare.com",
        workingHours: "08:00 - 17:00",
        workingDays: "Пн - Пт",
        averagePrice: 476666,
    },
    {
        id: 7,
        name: "AgroWorld",
        description: "AgroWorld создает инновационные решения для автоматизации сельского хозяйства. Мы предоставляем умные IT-инструменты, которые помогают фермерам оптимизировать процессы, повысить урожайность и сократить затраты. AgroWorld — это будущее агропромышленного комплекса.",
        photo: agroworld,
        rating: 4.0,
        reviews: [
            { userId: 113, userName: "Евгений Рябов", comment: "Хорошие инструменты для агробизнеса.", rating: 4, userPhoto: "https://example.com/photos/user13.jpg" },
            { userId: 114, userName: "Ксения Пономарева", comment: "Помогли оптимизировать процессы.", rating: 4, userPhoto: "https://example.com/photos/user14.jpg" },
        ],
        likes: 5,
        email: "contact@agroworld.com",
        address: "Калуга, ул. Сельская, д. 10",
        services: [
            { name: "Агро-IT решения", description: "IT-решения для автоматизации агропроизводства.", priceRange: "50 000 - 500 000 руб." },
            { name: "Консультации для фермеров", description: "Консультации по внедрению технологий в сельском хозяйстве.", priceRange: "10 000 - 50 000 руб." },
            { name: "Автоматизация процессов", description: "Услуги по автоматизации агрономических процессов.", priceRange: "20 000 - 200 000 руб." },
        ],
        website: "www.agroworld.com",
        workingHours: "09:00 - 17:00",
        workingDays: "Пн - Пт",
        averagePrice: 250000,
    },
    {
        id: 8,
        name: "LightBULB",
        description: "LightBULB — это компания, разрабатывающая решения для умного освещения. Наши технологии помогают экономить энергию, создавать комфортную атмосферу и автоматизировать управление освещением. LightBULB делает ваш дом и офис удобнее и умнее.",
        photo: lampochka,
        rating: 4.1,
        reviews: [
            { userId: 115, userName: "Евгений Кузнецов", comment: "Интересные решения, но цена высока.", rating: 3, userPhoto: "https://example.com/photos/user15.jpg" },
            { userId: 116, userName: "Людмила Сидорова", comment: "Довольна покупкой. Рекомендую!", rating: 5, userPhoto: "https://example.com/photos/user16.jpg" },
        ],
        likes: 7,
        email: "info@lightbulb.com",
        address: "Ростов-на-Дону, ул. Светлая, д. 5",
        services: [
            { name: "Умное освещение", description: "Системы умного освещения для дома и офиса.", priceRange: "10 000 - 100 000 руб." },
            { name: "Консультации по освещению", description: "Консультации по выбору и установке освещения.", priceRange: "5 000 - 20 000 руб." },
            { name: "Продажа оборудования", description: "Продажа оборудования для освещения.", priceRange: "1 000 - 50 000 руб." },
        ],
        website: "www.lightbulb.com",
        workingHours: "10:00 - 19:00",
        workingDays: "Пн - Сб",
        averagePrice: 35000,
    },
    {
        id: 9,
        name: "ITECHNOLOGY",
        description: "ITECHNOLOGY создает IT-продукты для автоматизации бизнеса. Наши системы помогают оптимизировать процессы, интегрировать новые решения и улучшать эффективность работы компаний. Мы предлагаем разработку программного обеспечения, консалтинг и системную интеграцию.",
        photo: itechnology,
        rating: 4.6,
        reviews: [
            { userId: 117, userName: "Роман Гусев", comment: "Качественные продукты.", rating: 5, userPhoto: "https://example.com/photos/user17.jpg" },
            { userId: 118, userName: "Светлана Мельникова", comment: "Проблемы с интеграцией.", rating: 3, userPhoto: "https://example.com/photos/user18.jpg" },
        ],
        likes: 16,
        email: "info@itechnology.com",
        address: "Воронеж, ул. IT, д. 20",
        services: [
            { name: "Разработка ПО", description: "Создание программного обеспечения под заказ.", priceRange: "50 000 - 500 000 руб." },
            { name: "IT-консалтинг", description: "Консультации по оптимизации IT-процессов.", priceRange: "10 000 - 100 000 руб." },
            { name: "Системная интеграция", description: "Интеграция различных IT-систем.", priceRange: "30 000 - 300 000 руб." },
        ],
        website: "www.itechnology.com",
        workingHours: "09:00 - 18:00",
        workingDays: "Пн - Пт",
        averagePrice: 316666,
    },
];

// Сохранение данных в localStorage
if (!localStorage.getItem("companies")) {
    localStorage.setItem("companies", JSON.stringify(companiesArray));
}
