import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { dataTicket } from './MovieSessions';

export default function Footer(movies){

    const {idMovie} = useParams();
  
    return(
        <InfosTicket>
            {dataTicket.title}
        </InfosTicket>
    );
}

const InfosTicket = styled.footer`
    height: 20vh;
    width: 100%;

    position: fixed;
    bottom: 0;
    background-color: purple;

`;