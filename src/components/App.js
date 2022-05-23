import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import styled from 'styled-components';

import GlobalStyle from '../styles/Reset';
import NavBar from './NavBar';
import SelectionSections from './SelectionSections';
import Movies from './Movies';
import MovieSessions from './MovieSessions';
import MovieTicket from './MovieTicket';
import SessionsSeats from './SessionsSeats';

export default function App(){

    const [section, setSection] = React.useState('Selecione o filme');

    return(

        <BrowserRouter>
        <GlobalStyle/>
        <NavBar />
        <SelectionSections section={section}/>
            <Container>
            <Routes>
                <Route path="/" element={<Movies/>} />
                <Route path="/sessoes/:idMovie" element={<MovieSessions/>} />
                <Route path="/assentos/:idSession" element={<SessionsSeats/>} />
                <Route path="/sucesso" element={<MovieTicket/>} />
            </Routes>
            </Container>
        </BrowserRouter>

    );
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20vh;
`;