import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import { dataTicket } from './MovieSessions';

export default function Footer(movies){

    const {idMovie} = useParams();
  
    return(
        <InfosTicket>
            <ContainerImg>
                <img src={dataTicket.image}/>
            </ContainerImg>
            {dataTicket.title}
        </InfosTicket>
    );
}

const InfosTicket = styled.footer`

    width: 100vw;
    height: 117px;

    font-size: 26px;

    background: #DFE6ED;
    border: 1px solid #9EADBA;

    position: fixed;
    bottom: 0;

    display: flex;
    flex-direction: row;
    align-items: center;
    
        img{
             width: 48px;
             height: 72px;
             padding: 8px;
        };

`;

const ContainerImg = styled.div`
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-left: 10px;
    margin-right: 14px
`;