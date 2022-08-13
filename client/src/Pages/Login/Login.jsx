import React from "react";
import { Button, Container, Input, Link, Title, Wrapper, MyInput } from "./LoginStyled";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from '@mui/icons-material/Lock';

const Login = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Login</Title>
                <MyInput>
                    <PersonIcon fontSize="small" />
                    <Input placeholder="Email Address" />
                </MyInput>
                <MyInput>
                    <LockIcon fontSize="small" />
                    <Input type="password" placeholder="Password" />
                </MyInput>
                <Button>LOGIN</Button>
                <Link>Forgot Password?</Link>
            </Wrapper>
        </Container>
    );
};

export default Login;
