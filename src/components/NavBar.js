import styled from 'styled-components';

export default function NavBar(){
    return(

        <TopBar>
            <p>CINEFLEX</p>
        </TopBar>

    );
}

const TopBar = styled.div`
    height: 10vh;
    width: 100vw;

    background-color:#C3CFD9;
    color: #E8833A;
    font-size: 36px;

    display: flex;
    justify-content: center;
    align-items: center;
`;