import { useNavigate } from "react-router";
import styled from "styled-components";

export default function Ticket(props){

    const navigate = useNavigate();

    const {title, showtime, date, seats, name, cpf} = props.ticket;

    return(
        <>
            <Section>
                <p> Pedido feito<br/>com sucesso !</p>
            </Section>
            <Container>
                <MovieInfos>
                    <h2>Filme e sessão</h2>
                    <p>{title}</p>
                    <p>{date} {showtime}</p>
                </MovieInfos>

                <SeatsInfos>
                    <h2>Ingressos</h2>
                    { seats?
                        seats.map((seat, index )=>{
                            return <p key={index}>Assento {seat}</p>
                        })
                        :
                        <></>
                    }
                </SeatsInfos>

                <ClientInfos>
                    <h2>Comprador</h2>
                    <p>Nome: {name}</p>
                    <p>CPF: {cpf}</p>
                </ClientInfos>
            </Container>

            <Button>
                <button onClick={ ()=> {navigate("/")}}>Voltar pra Home</button>
            </Button>
        </>
    );
}

const Container = styled.div`
    width: 100%;
    padding-left: 8vw;
    padding-right: 8vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10vh;
`;

const Section = styled.div`
    height: 15vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    p{
        font-size: 24px;
        font-weight: 700;
        color:#247A6B
    }
`;

const MovieInfos = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 3vh;
    h2{
        font-size: 24px;
        font-weight: 700;
    }
    p{
        font-size: 22px;
    }
`;


const SeatsInfos = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 3vh;
    h2{
        font-size: 24px;
        font-weight: 700;
    }
    p{
        font-size: 22px;
    }
`;


const ClientInfos = styled.div`
    height: 30%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h2{
        font-size: 24px;
        font-weight: 700;
    }
    p{
        font-size: 22px;
    }
`;

const Button = styled.div`
    height: 6vh;
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 3vh;
    button{
        height: 100%;
        width: 50%;
        background-color: #E8833A;
        border: none;
        border-radius: 3px;
        font-size: 18px;
        color: #ffffff;
        cursor: pointer;
    }
`;