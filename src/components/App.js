import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from 'styled-components';

import GlobalStyle from '../styles/Reset';
import SelectionSections from './SelectionSections';
import NavBar from './NavBar';
import Movies from './Movies';

export default function App(){

    const [section, setSection] = React.useState('Selecione o filme');

    return(

        <BrowserRouter>
        <GlobalStyle/>
        <NavBar />
        <SelectionSections section={section}/>
            <Container>
                <Movies setSection={setSection}/>
            </Container>
                <Routes>
                </Routes>
        </BrowserRouter>

    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    Movies{
        display: flex;
        flex-direction: row;
    }
`;