import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css?family=Montserrat:300,500,700");

    *, *::before, *::after {
            box-sizing: border-box;
    }
    #root {
        display: grid;
        grid-template-columns: 1fr 2fr 2fr 2fr;
        grid-template-rows: 1fr;
        gap: 0px 0px;
        grid-template-areas:
            "header . . ."
            "header . . ."
            "header . . .";
        height: 100vh;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: "Montserrat", sans-serif;
        overflow: hidden;
    }
`;

export default GlobalStyle;