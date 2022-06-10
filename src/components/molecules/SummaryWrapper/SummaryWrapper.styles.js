import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-left: 60px;
    gap: 32px;
    @media (min-width: 1150px) {
        flex: 1;
    }
    @media (max-width: 1150px) {
        padding-left: 0;
        margin-top: auto;
    }
`;

export const H3 = styled.h3`
    width: 100%;
    font-size: 36px;
    border-bottom: 2px solid ${({ theme }) => theme.colors.titanWhite};
    padding-bottom: 24px;
    font-weight: 500;
    @media (max-width: 1150px) {
        display: none;
    }
`;

export const Total = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    @media (max-width: 1150px) {
        /* flex-direction: column; */
        /* align-items: center; */
        gap: 10px;
    }
`;

export const Price = styled.p`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.xxl};
`;
