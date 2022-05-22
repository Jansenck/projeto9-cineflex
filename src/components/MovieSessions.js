import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Footer from './Footer';


export default function MovieSessions(setSection, movie){

    const {idMovie} = useParams();
    const [session, setSession] = useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        
        promisse.then( (response) => {
            setSession(response.data.days);
        }).catch('Carregando...')
    }, [idMovie]);

    return(
        <>
            {session.map((horarios, index) => 
                    <Sessions key={index}>

                        <p>{horarios.weekday} - {horarios.date}</p> 
                        
                        <Times>
                            {horarios.showtimes.map((horario, index)=> 
                                <Time key={index}>{horario.name}</Time>)}
                        </Times>
                    
                    </Sessions>
            )}
            <Footer>
                <div>{movie}</div>
            </Footer>
        </>
    )
}

const Time = styled.div`
    height: 45px;
    width: 80px;

    font-size: 18px;
    color: #ffffff;

    background-color: #E8833A;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Sessions = styled.div`
    height: 80px;
    width: 250px;

    font-size: 20px;

    margin-bottom: 35px;
    padding: 0px 25px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

`;

const Times = styled.div`
    width: 170px;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
`;