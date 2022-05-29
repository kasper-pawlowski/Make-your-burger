import React from 'react';
import IngredientListItem from 'components/atoms/Ingredient/IngredientListItem';
import { Wrapper } from './IngredientsList.styles';
import { ingredients } from 'data/ingredientsData';

const IngredientsList = () => {
    // useEffect(() => {
    //     burger.forEach((burgerIngredient) => {
    //         ingredients.filter((ingredient) => ingredient.name === burgerIngredient && console.log(ingredient));
    //     });
    // }, [burger]);

    return (
        <Wrapper>
            {ingredients.map((e) => {
                return <IngredientListItem key={e.name} name={e.name} image={e.imageS} />;
            })}
        </Wrapper>
    );
};

export default IngredientsList;
