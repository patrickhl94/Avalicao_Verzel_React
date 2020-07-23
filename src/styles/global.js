import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@400;500;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #eee;
    -webkit-font-smoothing: antialiased;
    color: #2d2d2d;
  }

  body, input, button {
    font: 14px Ubuntu, sans-serif;
  }

  #root {
    
    margin: 0 auto;
  }

  button {
    cursor: pointer
  }
`;
