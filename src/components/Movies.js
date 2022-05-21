import {React, useState, useEffect} from 'react';
import {Link}  from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

import MovieSessions from './MovieSessions';

export default function Movies(setSection, setSession){
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const request = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');

        request.then((response) => {
			setMovies(response.data);
		});
	}, []);

    if(movies){
        return(
            <Section >
                {movies.map((movie) =>(
                    <Link to={`sessao/${movie.id}`}>
                        <Movie key={movie.id}>
                            <img src={movie.posterURL} alt={'movie'}/>
                        </Movie>
                    </Link>
                ))}
            </Section>
        );
    } else {
        console.log(movies);
        return(<h1>Carregando...</h1>);
        
    }
}

const Section = styled.section`
    width: 90vw;

    display: flex;
    justify-content: space-between;
    flex-direction: row;
    flex-wrap: wrap;

`;

const Movie = styled.div`
    height: 210px;
    width: 145px;

    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

        img{
            height: 90%;
            width: 90%;

            position: absolute;
        }
`;
