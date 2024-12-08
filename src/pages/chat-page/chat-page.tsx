// import { useParams } from "react-router-dom";
// import {
//     Box,
//     Typography,
//     TextField,
//     Button,
//     Paper,
//     Avatar,
// } from "@mui/material";
// import { useState, useEffect } from "react";
//
// export const ChatPage = () => {
//     const { id, serviceName } = useParams();
//     const [currentUser, setCurrentUser] = useState<any>(
//         JSON.parse(localStorage.getItem("myProject_currentUser") || "{}")
//     );
//     const [messages, setMessages] = useState<any[]>([]);
//     const [newMessage, setNewMessage] = useState("");
//
//     // Загрузка сообщений из localStorage
//     useEffect(() => {
//         const chatHistory = JSON.parse(localStorage.getItem(`chat_${id}`) || "[]");
//
//         if (chatHistory.length === 0 && serviceName) {
//             const initialMessage = {
//                 sender: "Вы",
//                 content: `Интересует услуга "${serviceName}"`,
//                 timestamp: new Date().toLocaleString(),
//             };
//             chatHistory.push(initialMessage);
//             localStorage.setItem(`chat_${id}`, JSON.stringify(chatHistory));
//         }
//         setMessages(chatHistory);
//     }, [id, serviceName]);
//
//     // Отправка нового сообщения
//     const handleSendMessage = () => {
//         if (!newMessage.trim()) return;
//
//         const newChatMessage = {
//             sender: "Вы",
//             content: newMessage,
//             timestamp: new Date().toLocaleString(),
//         };
//
//         const updatedMessages = [...messages, newChatMessage];
//         localStorage.setItem(`chat_${id}`, JSON.stringify(updatedMessages));
//         setMessages(updatedMessages);
//         setNewMessage("");
//     };
//
//     return (
//         <Box
//             sx={{
//                 padding: "2rem",
//                 maxWidth: "800px",
//                 margin: "auto",
//                 display: "flex",
//                 flexDirection: "column",
//                 gap: "1rem",
//             }}
//         >
//             <Typography variant="h4">Чат с компанией</Typography>
//             <Paper
//                 sx={{
//                     flex: 1,
//                     maxHeight: "60vh",
//                     overflowY: "auto",
//                     padding: "1rem",
//                     borderRadius: "8px",
//                 }}
//             >
//                 {messages.map((msg, index) => (
//                     <Box
//                         key={index}
//                         sx={{
//                             display: "flex",
//                             gap: "1rem",
//                             marginBottom: "1rem",
//                             alignItems: "center",
//                         }}
//                     >
//                         <Avatar src={currentUser.photo}>
//                             {!currentUser.photo && currentUser.firstName?.[0]}
//                         </Avatar>
//                         <Box>
//                             <Typography sx={{ fontWeight: "bold" }}>
//                                 {msg.sender}
//                             </Typography>
//                             <Typography>{msg.content}</Typography>
//                             <Typography
//                                 sx={{
//                                     fontSize: "0.75rem",
//                                     color: "gray",
//                                 }}
//                             >
//                                 {msg.timestamp}
//                             </Typography>
//                         </Box>
//                     </Box>
//                 ))}
//             </Paper>
//             <Box sx={{ display: "flex", gap: "1rem" }}>
//                 <TextField
//                     fullWidth
//                     variant="outlined"
//                     placeholder="Введите сообщение..."
//                     value={newMessage}
//                     onChange={(e) => setNewMessage(e.target.value)}
//                 />
//                 <Button
//                     variant="contained"
//                     onClick={handleSendMessage}
//                     disabled={!newMessage.trim()}
//                 >
//                     Отправить
//                 </Button>
//             </Box>
//         </Box>
//     );
// };
