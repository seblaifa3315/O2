import React from "react";
import { Container, Wrapper, User, Avatar, Name } from "./navbarStyles";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <User>
                    <Avatar src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXqaxgJmJGX8ZB89Vqjk_GibMZt47BMVGcRa2sqXXOT8rZEy8-9Ncw4DbVuYcgmlVCnw&usqp=CAU" />
                    <Name>
                    Hello Sebastien
                    </Name>
                    <ArrowDropDownIcon />
                </User>
            </Wrapper>
        </Container>
    );
};

export default Navbar;
