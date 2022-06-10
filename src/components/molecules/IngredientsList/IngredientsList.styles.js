import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 32px;
    overflow: auto;
    @media (max-width: 1150px) {
        justify-content: start;
    }
`;
