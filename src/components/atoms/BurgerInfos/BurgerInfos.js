import React, { useEffect, useState } from 'react';
import { Item, Wrapper, ClockIcon, WeightIcon, FireIcon } from './BurgerInfos.styles';
import { useCtx } from 'context/Context';

const BurgerInfos = ({ mobile }) => {
    const { array } = useCtx();
    const [totalKcal, setTotalKcal] = useState(0);
    const [totalGrams, setTotalGrams] = useState(0);
    const bunsKcal = 300;
    const bunsGrams = 20;

    useEffect(() => {
        setTotalKcal(array?.reduce((accumulator, current) => accumulator + current.kcal, 0) + bunsKcal);
        setTotalGrams(array?.reduce((accumulator, current) => accumulator + current.g, 0) + bunsGrams);
    }, [array]);

    return (
        <Wrapper mobile={mobile}>
            <Item>
                <ClockIcon />
                <p>7 min</p>
            </Item>
            <Item>
                <WeightIcon />
                <p>{totalGrams} g</p>
            </Item>
            <Item>
                <FireIcon />
                <p>{totalKcal}kcal</p>
            </Item>
        </Wrapper>
    );
};

export default BurgerInfos;
