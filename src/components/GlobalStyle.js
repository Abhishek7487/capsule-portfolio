import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
  }

  html{
    @media(max-width: 1700px) {
      font-size: 80%;
    }
  }

  button{
    font-weight: bold;
    font-size: 1.3rem;
    cursor: pointer;
    padding: 1rem 3rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    &:hover{
      background-color: #23d997;
      color: white;
    }
  }

  h2{
    font-weight: lighter;
    font-size: 4rem;
  }

  h3{
    color: white;
  }

  h4{
    font-weight: bold;
    font-size: 2rem;
  }

  p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.4rem;
    line-height: 150%;
  }

  span{
    font-weight: bold;
    color: #23d997;
  }

  a{
    font-size: 1.1rem;
    text-decoration: none;
    color: white;
  }

  svg{
    font-size: 3rem;
    color: #23d997;
  }
`;
export default GlobalStyle;
