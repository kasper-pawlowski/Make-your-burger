import React, { useState, useEffect } from 'react';
import Ingredient from 'components/atoms/Ingredient/Ingredient';
import { Wrapper } from './Ingredients.styles';
import { ingredients } from 'data/ingredientsData';

const Ingredients = () => {
    const [burger, setBurger] = useState(['tomato', 'cucumber', 'onion']);

    useEffect(() => {
        burger.forEach((burgerIngredient) => {
            ingredients.filter((ingredient) => ingredient.name === burgerIngredient && console.log(ingredient));
        });
    }, [burger]);

    return (
        <Wrapper>
            {ingredients.map((e) => {
                return <Ingredient key={e.name} name={e.name} image={e.image} />;
            })}
        </Wrapper>
    );
};

export default Ingredients;
