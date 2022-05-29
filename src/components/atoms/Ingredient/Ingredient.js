import React from 'react';
import { Wrapper, Img, Name, Qty, Button, Count } from './Ingredient.styles';

const Ingredient = ({ name, image }) => {
    return (
        <Wrapper>
            <Img src={image} alt="" />
            <Name>{name}</Name>
            <Qty>
                <Button>-</Button>
                <Count>1</Count>
                <Button>+</Button>
            </Qty>
        </Wrapper>
    );
};

export default Ingredient;
