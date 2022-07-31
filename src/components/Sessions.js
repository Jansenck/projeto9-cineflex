import {useState, useEffect} from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router";

import axios from "axios";
import styled from "styled-components";

import Footer from "./Footer";

export default function Sessions({ticket, setTicket}){

    const navigate = useNavigate();

    const {sessionId} = useParams();
    const [dataMovies, setDataMovies] = useState([]);
    const [dataSeats, setDataSeats] = useState([]);
    const [seatsSelected, setSeatsSelected] = useState([]);
    const [dataClient, setDataClient] = useState({seats:[], name:"", cpf:""});

    const availableSeats = {border: "1px solid  #7B8B99", backgroundColor: "#C3CFD9", borderRadius: "17px"};
    const unAvailableSeats = {border: "1px solid #F7C52B", backgroundColor: "#FBE192", borderRadius: "17px"};
    const selectedSeats = {border: "1px solid #1AAE9E", backgroundColor: "#8DD7CF", borderRadius: "17px"}; 


    useEffect(()=>{
        const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`);
        promise.then((response)=>{
            const {data} = response;
            setDataSeats(data.seats);
            setDataMovies(data);
        });

        promise.catch(err => console.log(err.status));

    },[sessionId]);

    function sendSeats(id, name, isAvailable){

        const verification = seatsSelected.includes(id);
        const alreadySelected = seatsSelected.filter(seat =>{return !(seat === id)})
        setSeatsSelected(alreadySelected);

        const idAlreadySelected = dataClient.seats.filter(seat =>{return !(seat === name)})
        setDataClient({...dataClient, seats: idAlreadySelected});
        
        if(!verification){
            setSeatsSelected([...seatsSelected, parseInt(id)]);
            setDataClient({...dataClient, seats: [...dataClient.seats, name]});  
        }

        if(!isAvailable){
            window.alert("Esse assento não está disponível")
        }
    }

    function sendInfosTicket(event){

        event.preventDefault();

        const {name, cpf, seats} = dataClient;

        const body = {
            ids: seatsSelected,
            name: name,
            cpf: cpf
        };

        const request = axios.post("https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many", body);   

        request.then(()=> {

            const promise = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sessionId}/seats`);

            setTicket({...ticket, name: name, cpf: cpf, seats: seats});

            navigate("/ticket");

            promise.catch(err => console.log(err.status));

        });
        
        request.catch(err => console.log(err.status));
    }

    function RenderSeats(props){
        
        const {id, name, isAvailable} = props.seat;

        const thereAreSeats = seatsSelected.length > 0;
        const selected = seatsSelected.includes(id);

        return(
            isAvailable?
                <Seat 
                key={name} 
                style={(thereAreSeats && selected)? selectedSeats : availableSeats}
                onClick={()=> sendSeats(id, name, isAvailable)}
                >
                    <p>{name}</p>
                </Seat>
            :
                <Seat 
                    key={name} 
                    style={unAvailableSeats}
                    onClick={()=> sendSeats(id, name, isAvailable)}
                >
                    <p>{name}</p>
                </Seat>
            );
}

    return(
        <>
            <Section>
                <p>Selecione o(s) assento(os)</p>
            </Section>
            <Container>
                <Seats>
                    {
                        dataSeats.map((seat, index) => {                    
                            return(
                                <RenderSeats seat={seat} key={index}/>
                            );
                        })
                    }
                </Seats>

                <Instructions>
                    <div>
                      <Seat style={selectedSeats}/>  
                      <p>Selecionado</p>
                    </div>
                    <div>
                      <Seat style={availableSeats}/>  
                      <p>Disponível</p>
                    </div>
                    <div>
                      <Seat style={unAvailableSeats}/>  
                      <p>Indisponível</p>
                    </div>
                </Instructions>

                <DataClient>
                    <form onSubmit={sendInfosTicket}>
                        <p>Nome do comprador:</p>
                        <input 
                            type={"text"}  
                            value={DataClient.name} 
                            placeholder={"Digite seu nome..."} 
                            onChange={(e) =>{setDataClient({...dataClient, name: e.target.value})}}></input>

                        <p>CPF do comprador:</p>
                        <input 
                            type={"number"} 
                            value={dataClient.cpf} 
                            placeholder={"Digite seu CPF..."} 
                            onChange={(e) =>{setDataClient({...dataClient, cpf: e.target.value})}}></input>
                        <Button>                   
                            <button type="submit">Reservar assento(s)</button>
                        </Button>
                    </form>
                </DataClient>
            </Container>
            
            {
                (dataMovies.movie)?
                    <Footer 
                        title={dataMovies.movie.title}
                        posterURL={dataMovies.movie.posterURL}
                        weekday={dataMovies.day.weekday}
                        date={dataMovies.day.date}
                    />
                :
                    <Footer/>
            }
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
    height: 70vh;
    width: 100%;
    padding-left: 8vw;
    padding-right: 8vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 27vh;
`;

const Seats = styled.div`
    height: 50%;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5vh;
`;

const Seat = styled.div`
    box-sizing: border-box;
    width: 26px;
    height: 26px;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    p{
        font-size: 11px;
    }
`;

const Instructions = styled.div`
    height: 15%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 5vh;
    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

const DataClient = styled.div`
    height: 40%;
    width: 100%;
    font-size: 18px;
    display: flex;
    flex-direction: column;
        input{
            height: 20%;
            font-size: 18px;
            font-style: italic;
            color: #333333;
            margin: 15px 0px;
            border: 1px solid #D5D5D5;
            border-radius: 3px;
        }
`;

const Button = styled.div`
    height: 25%;
    display: flex;
    justify-content: center;
    margin-top: 5%;
    button{
        height: 100%;
        width: 70%;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        font-size: 18px;
        color: #ffffff;
        cursor: pointer;
    }
`;