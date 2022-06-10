import React from 'react';
import { Wrapper, StyledLink, Logo } from './NavBar.styles';

const NavBar = () => {
    return (
        <Wrapper>
            <Logo>🍔</Logo>
            <StyledLink to="/">Discover</StyledLink>
            <StyledLink to="/make-your-burger">Make Your Burger</StyledLink>
        </Wrapper>
    );
};

export default NavBar;
