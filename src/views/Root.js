import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Wrapper } from 'views/Root.styles';
import { CtxProvider } from 'context/Context';
import NavBar from 'components/molecules/NavBar/NavBar';
import Creator from './Creator/Creator';
import Discover from './Discover/Discover';

const Root = () => {
    return (
        <CtxProvider>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <Wrapper>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<Discover />} />
                            <Route path="/make-your-burger" element={<Creator />} />
                            <Route path="*" element={<p>404</p>} />
                        </Routes>
                    </Wrapper>
                </ThemeProvider>
            </BrowserRouter>
        </CtxProvider>
    );
};

export default Root;
