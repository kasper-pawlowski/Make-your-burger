import Ingredients from 'components/molecules/Ingredients/Ingredients';
import SummaryWrapper from 'components/molecules/SummaryWrapper/SummaryWrapper';
import React from 'react';
import { Blob, Burger, CreatorWrapper, H1, Wrapper, BurgerWrapper, Img, BurgerItem } from './Creator.styles';
import { motion, AnimatePresence } from 'framer-motion';

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
                            <BurgerItem bun_top top layout>
                                <Img src={BunTop} alt="" />
                            </BurgerItem>
                            <BurgerItem tomato layout>
                                <Img src={Tomato} alt="" />
                            </BurgerItem>
                            <BurgerItem cucumber layout>
                                <Img src={Cucumber} alt="" />
                            </BurgerItem>
                            <BurgerItem onion layout>
                                <Img src={Onion} alt="" />
                            </BurgerItem>
                            <BurgerItem bun_middle layout>
                                <Img src={BunMiddle} alt="" />
                            </BurgerItem>
                            <BurgerItem salad layout>
                                <Img src={Salad} alt="" />
                            </BurgerItem>
                            <BurgerItem cheese layout>
                                <Img src={Cheese} alt="" />
                            </BurgerItem>
                            <BurgerItem cutlet layout>
                                <Img src={Cutlet} alt="" />
                            </BurgerItem>
                            <BurgerItem mayo layout>
                                <Img src={Mayo} alt="" />
                            </BurgerItem>
                            <BurgerItem bun_bottom layout>
                                <Img src={BunBottom} alt="" />
                            </BurgerItem>
                        </Burger>
                    </AnimatePresence>
                </BurgerWrapper>
                <SummaryWrapper />
            </CreatorWrapper>
            <Ingredients />
        </Wrapper>
    );
};

export default Creator;
