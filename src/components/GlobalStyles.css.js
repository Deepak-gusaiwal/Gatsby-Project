import { createGlobalStyle } from "styled-components";

 
export const GlobalStyles = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  transition: 100ms;
  font-family: 'Roboto', sans-serif;
    text-transform: capitalize;
}
body{
    background: ${({ theme }) => theme.color.background};
    color: ${({ theme }) => theme.color.text};
}
a{
    color: inherit;
    text-decoration: none;
}
ul{
    list-style-type: none;
    margin: 0;
}
`;