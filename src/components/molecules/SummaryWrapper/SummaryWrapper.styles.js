import styled from 'styled-components';
import { ReactComponent as Clock } from 'assets/images/clock.svg';
import { ReactComponent as Weight } from 'assets/images/weight.svg';
import { ReactComponent as Fire } from 'assets/images/fire.svg';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 60px;
    gap: 32px;
`;

export const H3 = styled.h3`
    width: 100%;
    font-size: 36px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.titanWhite};
    padding-bottom: 24px;
    font-weight: 500;
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const Price = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
`;

export const Main = styled.div`
    display: flex;
    background-color: ${({ theme }) => theme.colors.titanWhite};
    border-radius: 100em;
    align-items: center;
    width: 100%;
    padding: 16px;
`;

export const MainItem = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
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
