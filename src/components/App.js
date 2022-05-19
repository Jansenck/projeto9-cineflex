import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from 'styled-components';

import GlobalStyle from '../styles/Reset';
import SelectionSections from './SelectionSections';
import NavBar from './NavBar';
import Movies from './Movies';

export default function App(){
    return(

        <BrowserRouter>
        <GlobalStyle/>
        <NavBar />
        <SelectionSections />
            <Container>
                <Movies />
                <Routes>
                </Routes>
            </Container>
        </BrowserRouter>

    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;