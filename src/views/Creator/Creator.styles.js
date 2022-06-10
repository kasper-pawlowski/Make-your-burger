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
    height: auto;
    @media (max-width: 1150px) {
        flex-direction: column;
        justify-content: start;
        gap: 30px;
    }
`;

export const H1 = styled.h1`
    flex: 1;
    display: flex;
    align-items: center;
    font-size: clamp(40px, 10vw, 62px);
    line-height: clamp(50px, 10vw, 70px);
    padding-right: 60px;
    @media (max-width: 1500px) {
        display: none;
    }
`;

export const BurgerWrapper = styled.div`
    flex: 1.7;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition-duration: 0.15s;
    transform: ${({ burger_length }) => burger_length > 10 && 'scale(0.7)'};
    @media (max-width: 1366px) {
        transform: ${({ burger_length }) => (burger_length > 10 ? 'scale(0.5)' : 'scale(0.6)')};
    }
    @media (max-width: 1150px) {
        transform: ${({ burger_length }) => (burger_length > 10 ? 'scale(0.4)' : 'scale(0.6)')};
    }
`;

export const Blob = styled(Vector)`
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const Burger = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
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

function getIndexes(burger_length) {
    let str;
    for (let i = 0, r = burger_length + 2; i <= burger_length, r >= 0; i++, r--) {
        str += template(i, r);
    }
    return str;
}

export const BurgerItem = styled(motion.div)`
    height: ${({ ingredient }) =>
        ingredient === 'onion'
            ? '5px'
            : ingredient === 'salad'
            ? '20px'
            : ingredient === 'tomato'
            ? '30px'
            : ingredient === 'cucumber'
            ? '20px'
            : ingredient === 'mayo'
            ? '20px'
            : ingredient === 'cheese'
            ? '10px'
            : ingredient === 'cutlet'
            ? '45px'
            : ingredient === 'bun_bottom'
            ? '50px'
            : ingredient === 'bun'
            ? '40px'
            : ingredient === 'bun_top'
            ? '110px'
            : null};
    ${({ burger_length }) => getIndexes(burger_length)}
`;

export const Img = styled.img`
    @media (max-width: 1150px) {
        /* flex: auto; */
        /* transform: scale(0.6); */
        width: 100%;
    }
`;
