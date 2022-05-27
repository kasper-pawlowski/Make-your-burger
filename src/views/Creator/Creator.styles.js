import styled from 'styled-components';
import { ReactComponent as Vector } from 'assets/images/Vector.svg';

export const Wrapper = styled.div`
    flex: 1;
    display: flex;
`;

export const H1 = styled.h1`
    flex: 1;
    display: flex;
    align-items: center;
    font-size: clamp(40px, 10vw, 62px);
    line-height: clamp(50px, 10vw, 70px);
    padding-right: 60px;
`;

export const CreatorWrapper = styled.div`
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
`;
