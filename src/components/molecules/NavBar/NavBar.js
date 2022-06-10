import React from 'react';
import { Wrapper, StyledLink, Logo } from './NavBar.styles';

const NavBar = () => {
    return (
        <Wrapper>
            <Logo>🍔</Logo>
            <StyledLink to="/make-your-burger/">Discover</StyledLink>
            <StyledLink to="/make-your-burger/creator">Make Your Burger</StyledLink>
        </Wrapper>
    );
};

export default NavBar;
