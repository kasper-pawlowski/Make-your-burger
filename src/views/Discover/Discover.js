import React from 'react';
import { BurgerWrapper, H1, Wrapper } from './Discover.styles';
import { HeroButton } from 'components/atoms/HeroButton';
import Image from 'assets/images/main-img.png';

const Discover = () => {
    return (
        <Wrapper>
            <H1>
                Make <br /> Your <br /> Burger
            </H1>
            <BurgerWrapper>
                <img src={Image} alt="" />
                <HeroButton to="/make-your-burger/creator">
                    MAKE <br /> BURGER
                </HeroButton>
            </BurgerWrapper>
        </Wrapper>
    );
};

export default Discover;
