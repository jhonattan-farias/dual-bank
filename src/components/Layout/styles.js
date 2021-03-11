import styled from "styled-components";

export const Grid = styled.div`
display:grid;

grid-template-columns:46px auto;
grid-template-rows: 71px 44px auto;

grid-template-areas:
"BB SB"
"TB EB"
"TB MA"
;

height:100vh;
`
