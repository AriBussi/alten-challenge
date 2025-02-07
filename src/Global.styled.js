import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    :root {
        font-family: ${({ theme }) => theme.fonts.main};;
        line-height: 1.5;
        font-weight: 300;

        color-scheme: light;
        color: ${({ theme }) => theme.colors.black};

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%; /* 10px */
    }

    body {
        font-size: 1.2rem;
        margin: 0;
    }

    a, a:visited, a:hover, a:active {
        text-decoration: none;
        color: inherit;
    }

    .visually-hidden {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        white-space: nowrap;
        width: 1px;
    }
`;

export default GlobalStyles;
