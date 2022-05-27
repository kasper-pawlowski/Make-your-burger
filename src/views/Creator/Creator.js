import SummaryWrapper from 'components/molecules/SummaryWrapper/SummaryWrapper';
import React from 'react';
import { Blob, Burger, CreatorWrapper, H1, Wrapper } from './Creator.styles';

const Creator = () => {
    return (
        <Wrapper>
            <H1>
                Make <br /> Your <br /> Burger
            </H1>
            <CreatorWrapper>
                <Blob />
                <Burger></Burger>
            </CreatorWrapper>
            <SummaryWrapper />
        </Wrapper>
    );
};

export default Creator;
