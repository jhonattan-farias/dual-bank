import styled from "styled-components";

export const Container = styled.div`
grid-area:"EB";
grid-column-start:2;
grid-column-end:-1;

display:flex;
flex-direction:row;

align-items:center;

background-color:var(--side-background);

box-shadow:2px 2px 14px -10px;
`;

export const DivImg = styled.div`
background-image:linear-gradient(45deg,#6221E5,white);
display:flex;

justify-content:center;
align-items:center;

width:36px;
height:36px;

border-radius:50%;

margin-left:20px;
`;

export const Img = styled.div`
background:url(${p => p.img});

width:${p => p.width}px;
height:${p => p.height}px;

margin-left:${p => p.ml}px;
margin-right:${p => p.mr}px;

cursor:pointer;
`;

export const Transactions = styled.div`
display:flex;
align-items:center;

margin-left:10px;
font-weight:bold;
`;


export const Transaction = styled.div`
display:flex;
align-items:center;

margin-left:20px;
`;

export const DivLetra = styled.div`
display:flex;

justify-content:center;
align-items:center;

color:white;
background-image:linear-gradient(45deg,#FF354E,#172765); 

width:36px;
height:36px;

border-radius:50%;
`;

export const Description = styled.div`
display:flex;
justify-content:space-between;
flex-direction:column;

margin-left:10px;

`;

export const Name = styled.div`
color:${p => p.color};
font-weight:normal;

display:flex;

align-items:center;

`;

export const Value = styled.div`
color:var(--secondary);
font-weight:normal;
`;





