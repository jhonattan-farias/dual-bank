import styled from "styled-components";

export const Container = styled.div`
grid-area:'TB';
grid-row-start:2;
grid-row-end:-1;

display:flex;
flex-direction:column;
align-items:center;

background-color:var(--side-background);

box-shadow:2px 2px 14px -10px;
`;

export const Img = styled.div`

background:url(${p => p.img});
background-repeat:no-repeat;
color:white;

width:24px;
height:24px;

margin-bottom:${p => p.ml}px;
margin-top:20px;

cursor:pointer;

`
