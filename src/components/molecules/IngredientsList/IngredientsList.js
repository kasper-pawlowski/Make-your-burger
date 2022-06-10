import React from 'react';
import IngredientListItem from 'components/atoms/Ingredient/IngredientListItem';
import { Wrapper } from './IngredientsList.styles';
import { ingredients } from 'data/ingredientsData';

const IngredientsList = () => {
    return (
        <Wrapper>
            {ingredients.map((e) => {
                return <IngredientListItem key={e.name} name={e.name} image={e.imageS} />;
            })}
        </Wrapper>
    );
};

export default IngredientsList;
