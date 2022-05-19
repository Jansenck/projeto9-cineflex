import {React, useEffect, useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';


export default function Movies(){
    
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        const request = axios.get('https://mock-api.driven.com.br/api/v5/cineflex/movies');
        request.then(response => setMovies(response.data.posterURL));

    }, []);

    return(
        <Section>
            <Movie>
                <img src={'https://static.stealthelook.com.br/wp-content/uploads/2022/03/qual-a-serie-o-filme-e-o-livro-mais-lido-do-mundo-avatar-20220321164246.jpg'} alt={'movie'}/>
            </Movie>

            <Movie>
                <img src={'https://static.stealthelook.com.br/wp-content/uploads/2022/03/qual-a-serie-o-filme-e-o-livro-mais-lido-do-mundo-avatar-20220321164246.jpg'} alt={'movie'}/>
            </Movie>

            <Movie>
                <img src={'https://static.stealthelook.com.br/wp-content/uploads/2022/03/qual-a-serie-o-filme-e-o-livro-mais-lido-do-mundo-avatar-20220321164246.jpg'} alt={'movie'}/>
            </Movie>

            <Movie>
                <img src={'https://static.stealthelook.com.br/wp-content/uploads/2022/03/qual-a-serie-o-filme-e-o-livro-mais-lido-do-mundo-avatar-20220321164246.jpg'} alt={'movie'}/>
            </Movie>
        </Section>
    );
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
    box-shadow: 0px, 2px, 4px, 2px rgba(0, 0, 0, 0.1);

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
