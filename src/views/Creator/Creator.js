import React, { useState, useEffect } from 'react';
import IngredientsList from 'components/molecules/IngredientsList/IngredientsList';
import SummaryWrapper from 'components/molecules/SummaryWrapper/SummaryWrapper';
import { Blob, Burger, CreatorWrapper, H1, Wrapper, BurgerWrapper, Img, BurgerItem } from './Creator.styles';
import { motion, AnimatePresence } from 'framer-motion';
import { ingredients } from 'data/ingredientsData';
import { useCtx } from 'context/Context';
import { uid } from 'uid';

import BunTop from 'assets/images/ingredientsLarge/bun_top.png';
import BunMiddle from 'assets/images/ingredientsLarge/bun_middle.png';
import BunBottom from 'assets/images/ingredientsLarge/bun_bottom.png';
import Cutlet from 'assets/images/ingredientsLarge/cutlet.png';
import Tomato from 'assets/images/ingredientsLarge/tomato.png';
import Cheese from 'assets/images/ingredientsLarge/cheese.png';
import Cucumber from 'assets/images/ingredientsLarge/cucumber.png';
import Mayo from 'assets/images/ingredientsLarge/mayo.png';
import Onion from 'assets/images/ingredientsLarge/onion.png';
import Salad from 'assets/images/ingredientsLarge/salad.png';

const Creator = () => {
    const [array, setArray] = useState([]);
    const { burger } = useCtx();

    useEffect(() => {
        burger.forEach((burgerIngredient) => {
            ingredients.filter((ingredient) => ingredient.name === burgerIngredient && setArray((oldArray) => [...oldArray, ingredient]));
        });
    }, [burger]);

    return (
        <Wrapper>
            <CreatorWrapper>
                <H1>
                    Make <br /> Your <br /> Burger
                </H1>
                <BurgerWrapper>
                    <Blob />
                    <AnimatePresence>
                        <Burger
                            as={motion.div}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}>
                            <BurgerItem ingredient="bun_top" layout burger={burger.length}>
                                <Img src={BunTop} alt="" />
                            </BurgerItem>
                            {array.map((e) => (
                                <BurgerItem key={uid()} ingredient={e.name} layout burger={burger.length}>
                                    <Img src={e.imageL} alt="" />
                                </BurgerItem>
                            ))}
                            <BurgerItem ingredient="bun_bottom" layout burger={burger.length}>
                                <Img src={BunBottom} alt="" />
                            </BurgerItem>
                        </Burger>
                    </AnimatePresence>
                </BurgerWrapper>
                <SummaryWrapper />
            </CreatorWrapper>
            <IngredientsList />
        </Wrapper>
    );
};

export default Creator;
