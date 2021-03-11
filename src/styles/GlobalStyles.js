import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Lato', sans-serif;
  }
  :root{
    --primary: #622EE5;
    --secondary: #69D531;
    --text-color:#172765;
    --background:#E5E5E5;
    --linear1:#622EE5;
    --linear2:#778899;
    --linear3:#FF354E;
  }
`;
