import React from 'react';
import { ClockIcon, H3, Main, MainItem, Price, Wrapper, Total, WeightIcon, FireIcon } from './SummaryWrapper.styles';
import { Button } from 'components/atoms/Button';

const SummaryWrapper = () => {
    return (
        <Wrapper>
            <H3>Summary</H3>
            <Total>
                <Price>$12.31</Price>
                <Button type="primary" size="extra">
                    Checkout
                </Button>
            </Total>
            <Main>
                <MainItem>
                    <ClockIcon />
                    <p>7 min</p>
                </MainItem>
                <MainItem>
                    <WeightIcon />
                    <p>630 g</p>
                </MainItem>
                <MainItem>
                    <FireIcon />
                    <p>429 kcal</p>
                </MainItem>
            </Main>
        </Wrapper>
    );
};

export default SummaryWrapper;
