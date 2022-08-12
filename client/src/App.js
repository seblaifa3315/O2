import "./App.css";
import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/Theme";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login/Login";

const Container = styled.div``;

function App() {
  const [darkMode, setDarkMode] = useState(true);
    return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
            <Login />
        </Container>
      </ThemeProvider>
    );
}

export default App;
