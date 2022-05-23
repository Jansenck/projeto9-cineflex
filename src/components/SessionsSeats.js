import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';
import styled from 'styled-components';

import Footer from "./Footer";

import { dataTicket } from "./MovieSessions";


export default function SessionsSeats(){

    const {idSession} = useParams();
    const [movie, setMovie] = useState([]);
    const [day, setDay] = useState([]);
    const [time, setTime] = useState([]);
    const [seats, setSeats] = useState([]);
    const [seatColor, setSeatColor] = useState('');


    useEffect(() => {

        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSession}/seats`);

        promisse.then((response) => {

            setMovie(response.data.movie);
            setDay(response.data.day);
            setTime(response.data.name);
            setSeats(response.data.seats);

        }).catch('Carregando...')
        
    }, [idSession]);

    function infosSelected(props){
        dataTicket.movie = movie.title;
        dataTicket.day = day.weekday;
        dataTicket.time = time;
        dataTicket.seatId = props;
        dataTicket.seatAvaliable = seats[props -1].isAvailable;

        console.log(dataTicket)
    }

    function mudaCor(){

        setSeatColor('#8DD7CF');
        if(seatColor !== ''){
            console.log(seatColor)
            return(
    
               <Seat  seatColor={seatColor}/>
            );
        } else{
            return("carregando...")
        }
    }

    function renderSeats(){
        return(
            seats.map((seat, index) => (

                seat.isAvailable ? 
                    <Seat key={index} id={seat.id} name={seat.name} seatColor={"#C3CFD9"} onClick={() => {mudaCor()}}>
                        <p>{seat.name}</p>
                    </Seat>
                    :<Seat key={index} id={seat.id} seatColor={"#FBE192"} onClick={() => infosSelected(seat.name)}>
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

            <Forms>
                <p>Nome do comprador:</p>
                <input type="text" placeholder="Digite o seu nome"/>
                <p>CPF do comprador:</p>
                <input type="text" placeholder="Digite o seu CPF"/>
            </Forms>

            <Description>
                <div>
                    <Seat style={{background:'#8DD7CF'}}/><br/><p>Selecionado</p>
                </div>
                <div>
                    <Seat style={{background:'#C3CFD9'}}/><br/><p>Disponível</p>
                </div>
                <div>
                    <Seat style={{background:'#FBE192'}}/><br/><p>Indisponível</p>
                </div>
            </Description>
            <Footer image={movie.posterURL} >
                <h1>{movie.title}<br /> {day.weekday} - {time}</h1> 
            </Footer>
        </>
    );
    
}

const Seats = styled.section`
    height: 40vh;
    width: 85vw;

    margin-bottom: 30px;

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
    background-color: ${props => props.seatColor};

    p{
        font-size:10px;
    }
`;

const Description = styled.div`
    width: 100vw;

    margin: 30px;

    display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-around;

        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
`;

const Forms = styled.form`
    height: 30vh;
    width: 90vw;

    font-size: 18px;

    display: flex;
    flex-direction: column;
    justify-content: center;

        input{
            height: 8vh;
            font-size: 18px;
            font-style: italic;
            color: #D4D4D4;
            margin: 15px 0px;
            border: 1px solid #D5D5D5;
            border-radius: 3px;
        }
`;