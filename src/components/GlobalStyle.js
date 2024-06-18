import { createGlobalStyle } from "styled-components";
import "modern-normalize";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'Iglets';
    src: url('../fonts/Iglets-Regular.woff2') format('woff2'),
        url('../fonts/Iglets-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@font-face {
    font-family: 'Italiana';
    src: url('../fonts/Italiana-Regular.woff2') format('woff2'),
        url('../fonts/Italiana-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

body {
  margin-top: 20px;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
font-family: "Teachers", sans-serif;
  font-optical-sizing: auto;
  font-weight: 200;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

p {
    margin: 0;
}

ul,ol {
    margin: 0;
    padding: 0;
    list-style: none;
}
`;
