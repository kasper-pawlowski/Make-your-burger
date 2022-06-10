import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 80px;
    @media (max-width: 1150px) {
        gap: 30px;
    }
`;

export const Logo = styled.div`
    border-radius: 50%;
    width: 80px;
    height: 80px;
    background-color: ${({ theme }) => theme.colors.titanWhite};
    color: ${({ theme }) => theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${({ theme }) => theme.fontSizes.xl};
    font-weight: 600;
    @media (max-width: 1150px) {
        width: 60px;
        height: 60px;
    }
`;

export const StyledLink = styled(NavLink)`
    color: ${({ theme }) => theme.colors.black};
    font-size: ${({ theme }) => theme.fontSizes.m};
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
    padding: 10px 0;
    &.active {
        border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
    }
    @media (max-width: 1150px) {
        &:first-of-type {
            margin-left: auto;
        }
    }
`;
