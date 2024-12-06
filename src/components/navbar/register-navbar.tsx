import { Box, Typography } from "@mui/material";
import { FaFeather } from "react-icons/fa";
import s from "./navbar.module.scss";

export const RegisterNavbar = () => {
    return (
        <Box component="nav" className={s.navbar}>
            <Box className={s.navList} sx={{ justifyContent: "space-between", width: "100%" }}>
                <Box className={s.navItem} sx={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Typography
                        component="span"
                        sx={{
                            fontSize: "1rem",
                            fontWeight: "bold",
                            color: "#E5E7EB",
                        }}
                    >Smart-Service
                    </Typography>
                    <FaFeather size={24} color="#3B82F6" />
                </Box>
            </Box>
        </Box>
    );
};
