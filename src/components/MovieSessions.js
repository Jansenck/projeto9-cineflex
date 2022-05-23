import {useEffect, useState} from 'react';
import {Link, useParams, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import Footer from './Footer';

export let dataTicket = {

};

export default function MovieSessions(movie){

    const {idMovie} = useParams();
    const [session, setSession] = useState([]);
    const [sessionDays, setSessionDays] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idMovie}/showtimes`);
        
        promisse.then( (response) => {
            setSession(response.data);
            setSessionDays(response.data.days);
           

        }).catch('Carregando...')

    }, [idMovie]);

    function setData(props){
        dataTicket.title = props
    }

    function renderSession(){
        return(
            sessionDays.map(horarios => (
                <Sessions>
    
                    <p>{horarios.weekday} - {horarios.date}</p> 
                    
                    <Times>
                        {horarios.showtimes.map((days, index) => (
                            <Link to={`/assentos/${days.id}`} style={{textDecoration:'none'}}>
                                <Time key={index}>{days.name}</Time>
                            </Link>
                        ))}
                    </Times>
                
                </Sessions>
            ))
        );
    }

    return(
        <>
            {renderSession()}
            <Footer image={session.posterURL} >
                {session.title}
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

