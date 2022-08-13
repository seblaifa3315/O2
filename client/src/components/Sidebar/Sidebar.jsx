import React, { useContext } from "react";
import { Container, Wrapper, Logo, Img, Item, Title, MyLink } from "./sidebarStyles";
import logoAlan from "../../images/logoAlan.png";
import { Link, NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import TimelineIcon from "@mui/icons-material/Timeline";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";

import { DarkContext } from "../../context/darkContext";

const Sidebar = () => {
    const { darkMode, setDarkMode } = useContext(DarkContext);

    return (
        <Container>
            <Wrapper>
                <Link to="/divers" style={{ textDecoration: "none", color: "inherit" }}>
                    <Logo>
                        <Img src={logoAlan} />
                        <Title>

                        Aquatics
                        </Title>
                    </Logo>
                </Link>

                <NavLink to="/divers" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <HomeIcon />
                        <Title>

                        Home
                        </Title>
                    </Item>
                </NavLink>

                <NavLink to="/analytics" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <TimelineIcon />
                        <Title>

                        Analytics
                        </Title>
                    </Item>
                </NavLink>
                <NavLink to="/register" style={{ textDecoration: "none", color: "inherit" }}>
                    <Item>
                        <PersonAddIcon />
                        <Title>

                        Add Diver
                        </Title>
                    </Item>
                </NavLink>
                <Item onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? (
                        <>
                            <LightModeIcon />
                            <Title>

                        Light Mode
                        </Title>
                        </>
                    ) : (
                        <>
                            <DarkModeIcon />
                            <Title>

                        Dark Mode
                        </Title>
                        </>
                    )}
                </Item>
            </Wrapper>
        </Container>
    );
};

export default Sidebar;
