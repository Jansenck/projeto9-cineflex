import styled from "styled-components";

export default function Footer(props){

    return(
        <InfosMovie>
            <Background>
                <img src={props.posterURL} alt={props.posterURL}></img>
            </Background>
            <Text>
                <p>{props.title}</p>
                {(props.weekday && props.date)? <p>{props.weekday} - {props.date}</p> : ""}
            </Text>
        </InfosMovie>
    );
}

const InfosMovie = styled.div`
    height: 15vh;
    width: 100%;
    padding: 2vw;
    box-sizing: border-box;
    font-size: 22px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;
    display: flex;
    justify-content:left;
    align-items: center;
    position: fixed;
    bottom: 0;
    z-index: 1;
`;

const Background = styled.div`
    width: 64px;
    height: 89px;
    background: #FFFFFF;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    border-radius: 2px;
    margin-right: 5vw;
    display: flex;
    justify-content:center;
    align-items: center;
    img{
        width: 48px;
        height: 72px;
    }
`;

const Text = styled.div`
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;