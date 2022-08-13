import React, { useState } from 'react';
import { Container, Main } from './pageContainerStyles';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';

import { DarkContext } from '../../context/darkContext';

import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../utils/Theme";


const PageContainer = ({ children }) => {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <DarkContext.Provider value={{darkMode, setDarkMode}}>
<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <Container>
        <Sidebar />
        <Main>
            <Navbar />
            {children}
        </Main>
    </Container>
    </ThemeProvider>
    </DarkContext.Provider>
  )
}

export default PageContainer