import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        font-family: ${(props) => props.theme.fonts.main};;
        line-height: 1.5;
        font-weight: 300;

        color-scheme: light;
        color: ${(props) => props.theme.colors.black};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    html {
        font-size: 62.5%; /* 10px */
    }

    body {
        font-size: 1.6rem; /* 16px */
        margin: 0;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;

export default GlobalStyles;
