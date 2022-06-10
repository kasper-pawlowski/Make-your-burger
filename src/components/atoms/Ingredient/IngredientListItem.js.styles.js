import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid ${({ theme }) => theme.colors.blackSqueeze};
    padding: 24px 18px;
    border-radius: 32px;
    width: 140px;
    gap: 12px;
`;

export const Img = styled.img`
    height: auto;
`;

export const Name = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.s};
    font-weight: 500;
    margin-top: auto;
`;

export const Qty = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const DegreaseButton = styled.button`
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 28px;
    color: ${({ theme, ingredientNumber }) => (ingredientNumber ? theme.colors.primary : theme.colors.muted)};
    background-color: ${({ theme }) => theme.colors.titanWhite};
    font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const IncreaseButton = styled.button`
    border: none;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 28px;
    width: 28px;
    color: ${({ theme, ingredientNumber }) => (ingredientNumber === 3 ? theme.colors.muted : theme.colors.primary)};
    background-color: ${({ theme }) => theme.colors.titanWhite};
    font-size: ${({ theme }) => theme.fontSizes.xl};
`;

export const Count = styled.p`
    font-size: ${({ theme }) => theme.fontSizes.l};
    font-weight: 600;
`;
