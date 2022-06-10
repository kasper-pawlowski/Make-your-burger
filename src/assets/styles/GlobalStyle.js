import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  *, *::after, *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.colors.black};
    height: 100%;
  }
  
  a, button, input, textarea {
    color: inherit;
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
  }

  button {
    cursor: pointer;
  }
  
  ::-webkit-scrollbar {
      width: 5px;         
      height: 5px;             
  }

  ::-webkit-scrollbar-track {
      background: ${({ theme }) => theme.colors.titanWhite};      
  }
  
  ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.primary}; 
      border-radius: 10px;      
  }
`;
