import styled from 'styled-components';
import { ReactComponent as Vector } from 'assets/images/Vector.svg';
import { motion } from 'framer-motion';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 80px;
`;

export const CreatorWrapper = styled.div`
    width: 100%;
    display: flex;
    flex: 1;
`;

export const H1 = styled.h1`
    flex: 1;
    display: flex;
    align-items: center;
    font-size: clamp(40px, 10vw, 62px);
    line-height: clamp(50px, 10vw, 70px);
    padding-right: 60px;
`;

export const BurgerWrapper = styled.div`
    flex: 1.7;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

export const Blob = styled(Vector)`
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const Burger = styled.div`
    z-index: 1;
    flex: 1;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

function template(i, r) {
    return `
        &:nth-child(${i}) {
            z-index: ${r}
        }
    `;
}

function getIndexes() {
    let str;
    for (let i = 0, r = 10; i <= 10, r >= 1; i++, r--) {
        str += template(i, r);
    }
    return str;
}

export const BurgerItem = styled(motion.div)`
    height: ${({ onion, salad, tomato, cucumber, mayo, cutlet, cheese, bun_bottom, bun_middle, bun_top }) =>
        onion
            ? '5px'
            : salad
            ? '20px'
            : tomato
            ? '30px'
            : cucumber
            ? '25px'
            : mayo
            ? '20px'
            : cheese
            ? '10px'
            : cutlet
            ? '45px'
            : bun_bottom
            ? '50px'
            : bun_middle
            ? '40px'
            : bun_top
            ? '120px'
            : null};
    ${getIndexes()}
`;

export const Img = styled.img``;
