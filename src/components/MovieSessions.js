import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

export default function MovieSessions(setSection, movie){

    const {idMovie} = useParams();
    const [session, setSession] = useState([]);

    useEffect(() => {
        const promisse = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movie.id}/showtimes`);
        promisse.then( (response) => {
            setSession(response.data);
        })
    }, []);

    return(
        console.log("TO AQUI")
        (session)
            ?   <Schedule>
                    <p>{session}</p>
                    <p>ESPERA</p>
                </Schedule>
            :
            <p>Espere um pouco</p>
        
    );
}

const Schedule = styled.div`
    height: 45px;
    width: 80px;

    background-color: #E8833A;

`;