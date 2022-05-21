import React from 'react';
import styled from 'styled-components';

export default function SelectionSections(props){

    return(
        <SelectSection>
            <p>{props.section}</p>
        </SelectSection>
    );
}

const SelectSection = styled.div`
    height: 15vh;
    width: 100vw;

    font-size: 24px;

    display: flex;
    justify-content: center;
    align-items: center;
`;