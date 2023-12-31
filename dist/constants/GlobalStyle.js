import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
export const GlobalStyle = createGlobalStyle `
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* :root {
  --bg-color: rgba(233, 236, 240, 0.78);
  --bd-color: rgba(224, 227, 230, 0.78);
  --font-color: rgb(126, 124, 124);
  --green-color: rgb(169, 251, 46);
  --red-color: rgb(241, 14, 14);
} */

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
ul,
ol {
  margin: 0;
  padding: 0;
}
img {
  display: block;
  max-width: 100%;
  height: auto;
}
li {
  list-style: none;
}
`;
//# sourceMappingURL=GlobalStyle.js.map