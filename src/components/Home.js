import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

export default function Home(){

    const [movies, setMovies] = useState([]);

    useEffect( ()=> {
        const promise = axios.get("https://mock-api.driven.com.br/api/v7/cineflex/movies");
        promise.then((response)=>{
            setMovies(response.data);
        });
        promise.catch(err => console.log(err.response));
    },[])

    return(
        <>
            <Section>
                <p>Selecione o filme</p>
            </Section>
            <Container>
                <Movies>
                    {
                    movies.map(movie => {

                        const {id, title, posterURL} = movie;
                        
                        return(
                            <Link to={`/movie/${id}`} key={id}>
                                <Background>
                                    <img src={posterURL} alt={title} ></img>
                                </Background>
                            </Link>
                        );
                    })
                    }
                </Movies>
            </Container>
            
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

const Background = styled.div`
    width: 145px;
    height: 209px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 3vh;
    img{
        width: 129px;
        height: 193px;
    }
`;

const Movies = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-bottom: 15vh;
`;