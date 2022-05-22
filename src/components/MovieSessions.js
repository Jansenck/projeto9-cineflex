import {useEffect, useState} from 'react';
import {Link, useParams} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Footer from './Footer';

export let dataTicket = {};

export default function MovieSessions(movie){

    const {idMovie} = useParams();
    const [session, setSession] = useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        
        promisse.then( (response) => {
            setSession(response.data.days);
            dataTicket.days = response.data.days;
            dataTicket.image = response.data.posterURL;
            dataTicket.title = response.data.title;

        }).catch('Carregando...')
    }, [idMovie]);

    console.log(dataTicket);

    return(
        <>
            {session.map((horarios, index) => 
                    <Sessions key={index}>

                        <p>{horarios.weekday} - {horarios.date}</p> 
                        
                        <Times>
                            {horarios.showtimes.map((horario, index)=>
                                <Link to={`sessoes/${movie.id}`}>
                                    <Time key={index}>{horario.name}</Time>
                                </Link>
                            )}
                        </Times>
                    
                    </Sessions>
            )}
            <Footer>
                {dataTicket.title}
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
    width: 300px;

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

//REMOVER O UNDERLINE DOS HORARIOS