import styled from 'styled-components';

const fontColors = {
    primary: ({ theme }) => theme.colors.titanWhite,
    secondary: ({ theme }) => theme.colors.primary,
};

const backgroundColors = {
    primary: ({ theme }) => theme.colors.primary,
    secondary: ({ theme }) => theme.colors.titanWhite,
};

const paddingSizes = {
    m: '16px',
    s: '6px 12px',
    xs: '4px 8px',
    extra: '16px 60px',
};

const fontSizes = {
    m: ({ theme }) => theme.fontSizes.m,
    s: ({ theme }) => theme.fontSizes.m,
    xs: ({ theme }) => theme.fontSizes.s,
    extra: ({ theme }) => theme.fontSizes.m,
};

export const Button = styled.button`
    border: none;
    border-radius: 100em;
    padding: ${({ size }) => paddingSizes[size]};
    font-size: ${({ size }) => fontSizes[size]};
    color: ${({ type }) => fontColors[type]};
    background-color: ${({ type }) => backgroundColors[type]};
`;
