import { useState, useEffect } from "react";
import { useParams } from "react-router";
import{Link} from "react-router-dom";
import styled from "styled-components";

import Footer from "./Footer";
import axios from "axios";


export default function Movies({ticket, setTicket}){

    const {movieId} = useParams();
    const [dataMovie, setDataMovie] = useState([]);

    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieId}/showtimes`);
        promise.then((response)=>{
            const {data} = response;
            setDataMovie(data);
        });
        promise.catch(err => console.log(err.response));
    },[movieId]);

    const {title, posterURL, days} = dataMovie;

    function sendInfosTicket(weekday, date, name){
        
        setTicket({...ticket, title: title, weekday: weekday, date: date, showtime: name});

    }
    
    function TimesMovie(){
        return( 
            days?
                <Session>
                    {days.map((day, index) =>{

                        const {weekday, date, showtimes} = day;  

                        return(
                            <Times key={index}>

                                <p>{weekday} - {date}</p>

                                <Time>

                                    {showtimes.map(time =>{

                                    const {id, name} = time;

                                        return(
                                            <Link to={`/session/${id}` } style={{textDecoration:'none', marginRight: "5vw", width: "20%"}} key={id}>
                                                <button key={id} onClick={()=> sendInfosTicket(weekday, date, name)}>{name}</button>
                                            </Link>
                                        );                                 
                                    })}
                                </Time>
                            </Times>
                        )
                    })}
                </Session>
                :
                <></>      
        );
    }
    return(
        <>
            <Section>
                <p>Selecione o horário</p>
            </Section>
            <Container>
                <TimesMovie/>
            </Container>
            <Footer title={title} posterURL={posterURL}/>
        </>
    );
}

const Section = styled.div`
    height: 15vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 24px;
    }
`;

const Container = styled.div`
    height: 70%;
    width: 100%;
    padding-left: 8vw;
    padding-right: 8vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15vh;
`;

const Session = styled.div`
    width: 100%;
`;

const Times = styled.div`
    height: 12vh;
    width: 100%;
    font-size: 20px;
    margin-bottom: 3vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const Time = styled.div`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: row;
    button{
        height: 100%;
        width: 100%;
        margin-right: 5%;
        border: none;
        border-radius: 3px;
        background-color: #E8833A;
        font-size: 18px;
        color: #ffffff;
        cursor: pointer;
    }   
`;