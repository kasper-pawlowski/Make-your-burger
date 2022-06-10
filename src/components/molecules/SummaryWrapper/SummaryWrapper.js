import React, { useEffect, useState } from 'react';
import { H3, Price, Wrapper, Total } from './SummaryWrapper.styles';
import { Button } from 'components/atoms/Button';
import BurgerInfos from 'components/atoms/BurgerInfos/BurgerInfos';
import { useMediaQuery } from 'react-responsive';
import { useCtx } from 'context/Context';

const SummaryWrapper = () => {
    const { array } = useCtx();
    const isMobile = useMediaQuery({ query: '(max-width: 1150px)' });
    const [totalPrice, setTotalPrice] = useState();
    const bunsPrice = 3.1;

    useEffect(() => {
        setTotalPrice(array?.reduce((accumulator, current) => accumulator + current.price, 0) + bunsPrice);
    }, [array]);

    return (
        <Wrapper>
            <H3>Summary</H3>
            <Total>
                <Price>${totalPrice?.toFixed(2)}</Price>
                <Button type="primary" size="extra">
                    Checkout
                </Button>
            </Total>
            {!isMobile && <BurgerInfos />}
        </Wrapper>
    );
};

export default SummaryWrapper;
