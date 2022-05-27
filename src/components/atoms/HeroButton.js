import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeroButton = styled(Link)`
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    width: 160px;
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    position: absolute;
    bottom: 25%;
    left: -80px;
    border-radius: 50%;
    transition-duration: 0.15s;
    text-align: center;

    &:hover {
        background-color: ${({ theme }) => theme.colors.indigo600};
    }
`;
