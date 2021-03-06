import styled from "styled-components";

export const Container = styled.div`
grid-area:"BB";
grid-column-start:1;
grid-column-end:-1;

display:flex;
flex-direction:row;
align-items:center;

justify-content:space-between;

padding:0 20px;
`;

export const BalanceArea = styled.div`
display:flex;
flex-direction:row;
align-items:center;
`


export const Img = styled.div`

background:url(${p => p.img});
background-repeat:no-repeat;
color:white;

width:${p => p.width}px;
height:${p => p.height}px;

margin-left:${p => p.ml}px;
margin-right:${p => p.mr}px;

cursor:pointer;
`;


export const Separator = styled.div`
width:1px;
height:25px;

border:solid 1px #E5E4E2;
border-radius:10px;

`;


export const Account = styled.div`
width:18rem;
display:flex;
flex-direction:column;

margin-left:20px;
`;


export const Text = styled.div`
display:flex;
justify-self:flex-start;
align-items:center;

margin-bottom:5px;

color:var(--text-color);
font-size:${p => p.size}px;

`;

export 

const NumberAccount = styled.div`
display:flex;
justify-content:space-between;

color:var(--primary);
font-size:12px;
`;


export const NumberOne = styled.div`
`;

export const NumberTwo = styled.div`
`;

export const Balance = styled.div`
 display:flex;
 flex-direction:column;

 margin-left:25px;
`;

export const Saldo = styled.text`
color:var(--secondary);
`;


export const InputArea = styled.div`
display:flex;

justify-content:space-between;
align-items:center;

`;


export const Input = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

padding:10px;


border:1px solid var(--greyish);
border-radius:8px;

opacity:1;

width:160px;
height:30px;

margin-right:15px;
`;

export const TextInput = styled.text`
color:var(--greyish);
font-size:${p => p.size};
`
