import React, { useState, useEffect } from 'react';
import { Wrapper, Img, Name, Qty, DegreaseButton, IncreaseButton, Count } from './IngredientListItem.js.styles';
import { useCtx } from 'context/Context';
import { ingredients } from 'data/ingredientsData';

const IngredientListItem = ({ name, image }) => {
    const counts = [];
    const [ingredientNumber, setIngredientNumber] = useState(counts[name]);
    const { burger, setBurger } = useCtx();

    const addIngredient = () => {
        if (counts[name] !== 3) {
            setIngredientNumber(ingredientNumber + 1);
            setBurger((burger) => [...burger, name]);
        }
    };

    const removeIngredient = () => {
        if (counts[name] !== 0) {
            setIngredientNumber(ingredientNumber - 1);

            const index = burger.findLastIndex((item) => item === name);
            if (index !== -1) {
                setBurger([...burger.slice(0, index), ...burger.slice(index + 1)]);
            }
        }
    };

    burger.forEach((item) => {
        counts[item] = (counts[item] || 0) + 1;
    });

    return (
        <Wrapper>
            <Img src={image} alt="" />
            <Name>{name}</Name>
            <Qty>
                <DegreaseButton ingredientNumber={counts[name]} onClick={() => removeIngredient()}>
                    -
                </DegreaseButton>
                <Count>{counts[name] ? counts[name] : 0}</Count>
                <IncreaseButton ingredientNumber={counts[name]} onClick={() => addIngredient()}>
                    +
                </IncreaseButton>
            </Qty>
        </Wrapper>
    );
};

export default IngredientListItem;
