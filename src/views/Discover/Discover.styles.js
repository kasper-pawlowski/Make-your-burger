import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Vector as ReactComponent } from 'assets/images/Vector.svg';
import { ReactComponent as Burger } from 'assets/images/burger.svg';

export const Wrapper = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    @media (max-width: 600px) {
        flex-direction: column;
    }
`;

export const H1 = styled.h1`
    font-size: clamp(40px, 10vw, 62px);
    line-height: clamp(50px, 10vw, 70px);
    flex: 1;
`;

export const BurgerWrapper = styled.div`
    display: flex;
    flex: 1;
    height: 100%;
    align-items: center;
    justify-content: center;
    position: relative;

    img {
        max-width: 100%;
        height: auto;
    }
`;
