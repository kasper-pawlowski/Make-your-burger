import styled from 'styled-components';
import Div100vh from 'react-div-100vh';

export const Wrapper = styled(Div100vh)`
    padding: 30px 7% 30px 7%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    @media (max-width: 1150px) {
        padding: 30px 5% 30px 5%;
    }
`;
