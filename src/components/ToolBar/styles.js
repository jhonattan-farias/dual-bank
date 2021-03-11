import styled from "styled-components";

export const Container = styled.div`
grid-area:'TB';
grid-row-start:2;
grid-row-end:-1;

display:flex;
flex-direction:column;
align-items:center;

position:relative;

background-color:var(--side-background);

box-shadow:2px 2px 14px -10px;
`;

export const Img = styled.div`

background:url(${p => p.img});
background-repeat:no-repeat;

width:24px;
height:24px;

margin-bottom:${p => p.ml}px;

cursor:pointer;

`

export const DivImg = styled.div`
display:flex;

justify-content:center;
align-items:center;

width:46px;
height:48px;

`;

export const ImgMain = styled.div`
background:url(${p => p.img});

display:flex;
justify-content:center;
align-items:center;

width:46px;
height:46px;
`;

export const DivSecTop = styled.div`
display:flex;
justify-content:center;
align-items:center;

width:46px;
height:48px;

border-radius:0 0 5px 0;
`;

export const DivSecDown = styled.div`
display:flex;
justify-content:center;
align-items:center;

width:46px;
height:50px;
&:hover{
background-color:black;
}
border-radius:0 5px 0 0;
`

export const DivPurple = styled.div`
background-color:var(--primary);
position: absolute;

display:flex;
justify-content:center;
align-items:center;

top:75vh;
left:2vw;

width:40px;
height:40px;

border-radius:50%;
`

