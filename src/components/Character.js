// Write your Character component here
import styled from 'styled-components';
import React from 'react';
const StyledCards = styled.div`
    
`

const Character = props => {
const {characters} = props

    return(
        <StyledCards>
            <div className='card-container'>
                <h1>{characters.name} </h1>
                <h2>Height: {characters.height} cm </h2>
                <h2>Weight: {characters.mass} kg </h2>
                <h2>Gender: {characters.gender}</h2>
                <h2>Hair Color: {characters.hair_color}</h2>
            </div>        
        </StyledCards>
    );
};

export default Character;
