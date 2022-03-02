import { createGlobalStyle } from "styled-components";
import theme from "./theme";

// eslint-disable-next-line import/prefer-default-export
export const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    color: white;
}

button {
    border: 0 none;
}

body {
    background-color: ${theme.colors.body};
}
`;
