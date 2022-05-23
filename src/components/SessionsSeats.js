import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

import Footer from "./Footer";

const seatColor = "#C3CFD9";

export default function SessionsSeats(props){

    const {idSession} = useParams();
    const [seats, setSeats] = useState([]);



    useEffect(() => {

        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);

        promisse.then((response) => {

            setSeats(response.data.seats);

        }).catch('Carregando...')
        
    }, [idSession]);

    function renderSeats(){
        return(
            seats.map((seat, index) => (

                <Seat key={index} isAvailable={seat.isAvailable}>
                    <p>{seat.name}</p>
                </Seat>
            ))
        );
    }

    return(
        <>
            <Seats>
                {renderSeats()}
            </Seats>
            <Footer date={seats.idSession} time={seats}/>
        </>
    );
    
}

const Seats = styled.section`
    height: 40vh;
    width: 85vw;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content:space-around;
`;

const Seat = styled.div`
    height: 26px;
    width: 26px;
    border-radius: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    
    background-color: ${props => props.isAvailable? '#C3CFD9' : '#FBE192'};
    p{
        font-size:10px;
    }
`;