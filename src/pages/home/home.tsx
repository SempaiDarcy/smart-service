import {Card, CardContent, List, ListItem, ListItemIcon, ListItemText, Typography} from "@mui/material";
import {Person, Search, Star} from "@mui/icons-material";

export const Home = () => {
    return (
            <Card
                sx={{
                    maxWidth: "800px",
                    margin: "5rem auto 0",
                    backgroundColor: "#1F2937",
                    color: "#E5E7EB",
                    borderRadius: "12px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
                    padding: "1rem",
                }}
            >
                <CardContent>
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: "bold",
                            color: "#3B82F6",
                            textAlign: "center",
                        }}
                    >
                        Добро пожаловать на платформу!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Наша миссия — облегчить взаимодействие между бизнесами и клиентами, предоставляя удобные
                        инструменты для поиска и оценки услуг.
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Исследуйте каталог компаний, просматривайте их профили и оставляйте отзывы.
                        Убедитесь, что все ваши данные актуальны в разделе <strong>Личный кабинет</strong>.
                    </Typography>
                    <Typography variant="h6" component="p" sx={{fontWeight: "bold", marginTop: "1rem"}}>
                        Вы можете:
                    </Typography>
                    <List sx={{color: "#E5E7EB"}}>
                        <ListItem>
                            <ListItemIcon sx={{color: "#3B82F6"}}>
                                <Search/>
                            </ListItemIcon>
                            <ListItemText
                                primary="🔍 Найти компанию в Каталоге"
                                primaryTypographyProps={{variant: "body1"}}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{color: "#3B82F6"}}>
                                <Star/>
                            </ListItemIcon>
                            <ListItemText
                                primary="⭐ Оставить отзыв и посмотреть рейтинг услуг"
                                primaryTypographyProps={{variant: "body1"}}
                            />
                        </ListItem>
                        <ListItem>
                            <ListItemIcon sx={{color: "#3B82F6"}}>
                                <Person/>
                            </ListItemIcon>
                            <ListItemText
                                primary="👤 Управлять своими данными в Личном кабинете"
                                primaryTypographyProps={{variant: "body1"}}
                            />
                        </ListItem>
                    </List>
                    <Typography variant="body1" sx={{marginTop: "1rem"}}>
                        Выберите раздел для работы через меню выше.
                    </Typography>
                </CardContent>
            </Card>
    );
};
