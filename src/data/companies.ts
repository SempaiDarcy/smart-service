import greentech from './../assets/company/greentech.jpg'
import edusmart from './../assets/company/edusmart.jpg'
import medicare from './../assets/company/medicare.jpg'
import agroworld from './../assets/company/agroworld.jpg'
import lampochka from './../assets/company/lampochka.jpg'
import itechnology from './../assets/company/itechnology.png'
import eventpro from './../assets/company/eventpro.jpg'
import fintech from './../assets/company/fintech.jpg'
import ithelp from './../assets/company/ithelp.png'


export const companiesArray = [
    {
        id: 1,
        name: "EventPro",
        description: "Платформа для автоматизации мероприятий с использованием современных веб-технологий.",
        photo: eventpro,
        rating: 4.0,
        reviews: [],
        likes: 9,
    },
    {
        id: 2,
        name: "GreenTech",
        description: "Компания, разрабатывающая экологичные решения с применением IoT и облачных технологий.",
        photo: greentech,
        rating: 4.2,
        reviews: [],
        likes: 12,
    },
    {
        id: 3,
        name: "FinTech Solutions",
        description: "Разработка инновационных финансовых приложений и API для банков и финтех-стартапов.",
        photo: fintech,
        rating: 4.7,
        reviews: [],
        likes: 17,
    },
    {
        id: 4,
        name: "EduSmart",
        description: "Онлайн-платформа для обучения программированию и развития навыков разработки.",
        photo: edusmart,
        rating: 4.9,
        reviews: [],
        likes: 20,
    },
    {
        id: 5,
        name: "It-Help",
        description: "Служба поддержки IT-инфраструктуры и разработка кастомизированных решений.",
        photo: ithelp,
        rating: 4.3,
        reviews: [],
        likes: 11,
    },
    {
        id: 6,
        name: "MediCare",
        description: "Инновационные программные решения для медицинских учреждений и телемедицины.",
        photo: medicare,
        rating: 4.7,
        reviews: [],
        likes: 18,
    },
    {
        id: 7,
        name: "AgroWorld",
        description: "Разработка IT-инструментов для автоматизации сельскохозяйственного бизнеса.",
        photo: agroworld,
        rating: 3.6,
        reviews: [],
        likes: 5,
    },
    {
        id: 8,
        name: "LightBULB",
        description: "Решения для умного дома и освещения, основанные на программируемых микроконтроллерах.",
        photo: lampochka,
        rating: 4.0,
        reviews: [],
        likes: 7,
    },
    {
        id: 9,
        name: "ITECHNOLOGY",
        description: "Компания, создающая IT-продукты для автоматизации бизнеса и повышения производительности.",
        photo: itechnology,
        rating: 4.6,
        reviews: [],
        likes: 16,
    },
];

// Сохраняем данные в localStorage
if (!localStorage.getItem("companies")) {
    localStorage.setItem("companies", JSON.stringify(companiesArray));
}
