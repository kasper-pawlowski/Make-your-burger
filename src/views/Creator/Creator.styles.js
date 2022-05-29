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

function getIndexes(burger) {
    console.log(burger);
    let str;
    for (let i = 0, r = burger + 2; i <= burger, r >= 0; i++, r--) {
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
            ? '25px'
            : ingredient === 'mayo'
            ? '20px'
            : ingredient === 'cheese'
            ? '10px'
            : ingredient === 'cutlet'
            ? '45px'
            : ingredient === 'bun_bottom'
            ? '50px'
            : ingredient === 'bun_middle'
            ? '40px'
            : ingredient === 'bun_top'
            ? '120px'
            : null};
    /* ${getIndexes()} */
    ${({ burger }) => getIndexes(burger)}
`;

export const Img = styled.img``;
