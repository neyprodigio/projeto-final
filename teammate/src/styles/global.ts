import { createGlobalStyle } from "styled-components";
//import bg from '../assets/campo.jpg'; NAO SEI PQ  NÃO FUNCIONA
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }
    ul, ol, li{
        list-style: none;
    }
    img{
        max-width: 100%;
    }
    input, select{
        background: transparent;
        border: none;
    } 
    fieldset{
      border: none;
    }
    a{
      color: unset;
      text-decoration: none;
    }
    :root{
        --green1: #BDE038;
        --green2: #A3AB78;
        --green3: #818274;
        --green4: #506266;
        --green5: #10454F;
        --white: #ffffff;
    }
    body{
     background: var(--green4);
    }
    h1, h2, h3, h4, h5, h6, p, span, li, a{
      font-family: 'Roboto', sans-serif;
      color: var(--green2);
    }
    .frango {
      width: 100px;
      height: 100px;
    }
`;
