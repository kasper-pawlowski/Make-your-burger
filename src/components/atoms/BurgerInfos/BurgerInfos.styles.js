import styled from 'styled-components';
import { ReactComponent as Clock } from 'assets/images/clock.svg';
import { ReactComponent as Weight } from 'assets/images/weight.svg';
import { ReactComponent as Fire } from 'assets/images/fire.svg';

export const Wrapper = styled.div`
    display: flex;
    background-color: ${({ theme, mobile }) => (mobile ? null : theme.colors.titanWhite)};
    border-radius: 100em;
    align-items: center;
    width: 100%;
    padding: 16px;
    @media (max-width: 1150px) {
        margin-top: 30px;
    }
`;

export const Item = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7px;

    p {
        color: ${({ theme }) => theme.colors.black};
        font-size: ${({ theme }) => theme.fontSizes.s};
        font-weight: 500;
    }
`;

export const ClockIcon = styled(Clock)`
    width: 32px;
    height: 32px;
`;

export const WeightIcon = styled(Weight)`
    width: 32px;
    height: 32px;
`;

export const FireIcon = styled(Fire)`
    width: 32px;
    height: 32px;
`;
