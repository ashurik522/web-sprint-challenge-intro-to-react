// Write your Character component here
import styled from 'styled-components';
import React from 'react';
const StyledCards = styled.div`
  
    text-shadow: 0px 0px 4px #FFE81F;
    font-family: 'Kanit', sans-serif;
    color: #000000;
    border-style: inset;
    border-color:  #FFE81F;
    padding: 5%;
    margin: 10%;

    h1{
        font-size: 35px;
    }

`

const Character = props => {
const {characters} = props

    return(
        <StyledCards>
            <div className='card-container'>
                <h1>{characters.name} </h1>
                <div className='info'>
                    <h2>Height: {characters.height} cm </h2>
                    <h2>Weight: {characters.mass} kg </h2>
                    <h2>Gender: {characters.gender}</h2>
                    <h2>Hair Color: {characters.hair_color}</h2>
                </div>
            </div>        
        </StyledCards>
    );
};

export default Character;
