import styled from "styled-components";

export const Grid = styled.div`
display:grid;

grid-template-columns:46px auto;
grid-template-rows: 71px 44px 85px auto;

grid-template-areas:
"BB SB"
"TB EB"
"TB DB"
"TB MA"
;

height:100vh;
`
