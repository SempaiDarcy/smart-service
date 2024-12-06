import { Typography, Card, CardContent, List, ListItem, ListItemText } from "@mui/material";
import Typewriter from "typewriter-effect";

export const Home = () => {
    return (
        <div style={{paddingTop:'3rem', overflow:'hidden'}}><Card
            sx={{
                maxWidth: "70%",
                margin: "3rem auto",
                backgroundColor: "#1F2937",
                color: "#E5E7EB",
                borderRadius: "16px",
                boxShadow: "0 6px 20px rgba(0, 0, 0, 0.8)",
                // padding: "2rem",
            }}
        >
            <CardContent>
                {/* Заголовок с Typewriter */}
                <Typography
                    variant="h4"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: "bold",
                        color: "#3B82F6",
                        textAlign: "center",
                        marginBottom: "2rem",
                    }}
                >
                    <Typewriter
                        options={{
                            strings: [
                                "Добро пожаловать в Smart-Service!",
                                "Ваш проводник в мире услуг и компаний!",
                                "Оцените, найдите, взаимодействуйте!",
                            ],
                            autoStart: true,
                            loop: true,
                            delay: 50,
                            deleteSpeed: 25,
                        }}
                    />
                </Typography>

                {/* Описание платформы */}
                <Typography
                    variant="h6"
                    paragraph
                    sx={{
                        textAlign: "center",
                        fontWeight: "500",
                        fontSize: "1.2rem",
                        lineHeight: "1.8",
                        marginBottom: "2rem",
                    }}
                >
                    Smart-Service — это удобная платформа для поиска компаний,
                    оценки их услуг и взаимодействия с другими пользователями.
                    Узнайте больше о бизнесах, оставляйте отзывы и находите лучшее для себя!
                </Typography>

                {/* Возможности платформы */}
                <Typography
                    variant="h5"
                    sx={{
                        textAlign: "center",
                        fontWeight: "bold",
                        fontSize: "1.6rem",
                        color: "#FFD700",
                        marginBottom: "2rem",
                    }}
                >
                    Что вы можете сделать:
                </Typography>

                <List
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1.5rem",
                        maxWidth: "800px",
                        margin: "0 auto",
                        color: "#E5E7EB",
                    }}
                >
                    <ListItem>
                        <ListItemText
                            primary="🔍 Поиск компаний"
                            secondary="Ищите компании по названию или рейтингу. Узнайте всё, что нужно, всего за несколько кликов."
                            primaryTypographyProps={{variant: "h6", fontWeight: "bold", textAlign: "center"}}
                            secondaryTypographyProps={{
                                variant: "body1",
                                textAlign: "center",
                                color: "#E5E7EB",
                            }}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="⭐ Оставляйте отзывы"
                            secondary="Делитесь своим мнением, помогая другим пользователям находить качественные услуги."
                            primaryTypographyProps={{variant: "h6", fontWeight: "bold", textAlign: "center"}}
                            secondaryTypographyProps={{
                                variant: "body1",
                                textAlign: "center",
                                color: "#E5E7EB",
                            }}
                        />
                    </ListItem>
                    <ListItem>
                        <ListItemText
                            primary="🧑‍💻 Управляйте профилем"
                            secondary="Редактируйте свои данные, добавляйте фото и следите за вашей активностью на платформе."
                            primaryTypographyProps={{variant: "h6", fontWeight: "bold", textAlign: "center"}}
                            secondaryTypographyProps={{
                                variant: "body1",
                                textAlign: "center",
                                color: "#E5E7EB",
                            }}
                        />
                    </ListItem>
                </List>
            </CardContent>
        </Card></div>
    );
};
