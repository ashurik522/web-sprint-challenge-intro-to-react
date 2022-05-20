// Write your Character component here
import styled from 'styled-components';

const StyledCards = styled.div`

`

const Character = props => {
    return(
        <StyledCards>
            <div className='card-container'>
                <h1>{props.characters.name}</h1>
            </div>
        </StyledCards>
    );
};

export default Character;
