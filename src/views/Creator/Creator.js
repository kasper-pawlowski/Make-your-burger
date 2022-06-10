import React, { useEffect } from 'react';
import IngredientsList from 'components/molecules/IngredientsList/IngredientsList';
import SummaryWrapper from 'components/molecules/SummaryWrapper/SummaryWrapper';
import { Blob, Burger, CreatorWrapper, H1, Wrapper, BurgerWrapper, Img, BurgerItem } from './Creator.styles';
import { motion, AnimatePresence } from 'framer-motion';
import { ingredients } from 'data/ingredientsData';
import { useCtx } from 'context/Context';
import { uid } from 'uid';
import { useMediaQuery } from 'react-responsive';
import BurgerInfos from 'components/atoms/BurgerInfos/BurgerInfos';

import BunTop from 'assets/images/ingredientsLarge/bun_top.png';
import BunBottom from 'assets/images/ingredientsLarge/bun_bottom.png';

const Creator = () => {
    const { burger, array, setArray } = useCtx();
    const isMobile = useMediaQuery({ query: '(max-width: 1150px)' });

    useEffect(() => {
        let res = [];
        burger.map((item) => {
            const matchedObject = ingredients.find((option) => option.name === item);
            return res.unshift(matchedObject);
        });
        setArray(res);
    }, [burger, setArray]);

    return (
        <Wrapper>
            <CreatorWrapper>
                <H1>
                    Make <br /> Your <br /> Burger
                </H1>
                <BurgerWrapper burger_length={burger.length}>
                    <Blob />
                    <AnimatePresence>
                        <Burger
                            as={motion.div}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}>
                            <BurgerItem ingredient="bun_top" layout burger_length={burger.length}>
                                <Img src={BunTop} alt="" />
                            </BurgerItem>
                            {array &&
                                array.map((e) => (
                                    <BurgerItem key={uid()} ingredient={e.name} layout burger_length={burger.length}>
                                        <Img src={e.imageL} alt="" />
                                    </BurgerItem>
                                ))}
                            <BurgerItem ingredient="bun_bottom" layout burger_length={burger.length}>
                                <Img src={BunBottom} alt="" />
                            </BurgerItem>
                        </Burger>
                    </AnimatePresence>
                </BurgerWrapper>
                {isMobile && <BurgerInfos mobile />}
                {isMobile && <IngredientsList />}
                <SummaryWrapper />
            </CreatorWrapper>
            {!isMobile && <IngredientsList />}
        </Wrapper>
    );
};

export default Creator;
