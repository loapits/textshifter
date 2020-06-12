import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<any>`
  *,
  *::after,
  *::before{
    box-sizing: border-box;
  }
  body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  .button button{
    border: none;
    background: ${({ theme }) => theme.button};
    color: ${({ theme }) => theme.buttonTxt};
  }
  .button button:hover{
    background: ${({ theme }) => theme.buttonHover};
  }
  .button button:focus{
    background: ${({ theme }) => theme.buttonHover};
  }
  textarea{
    border: none;
    background: ${({ theme }) => theme.textArea};
    color: ${({ theme }) => theme.text};
  }
  textarea::placeholder{
    color: ${({ theme }) => theme.text};
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }
  .theme{
    border: none;
    background: url(${({ theme }) => theme.themeBtn});
  }
  .clipboard{
    background: url(${({ theme }) => theme.clipboard}) no-repeat center top/cover;
  }
  .download{
    background: url(${({ theme }) => theme.downloadBtn}) no-repeat center top/cover;
  }
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000000;
    color: white;
    padding: 8px;
    z-index: 100;
  }
  
  .skip-link:focus {
    top: 0;
  }
`;
