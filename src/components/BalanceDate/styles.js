import styled from "styled-components";

export const Container = styled.div`
grid-area:"MA";
grid-row-start:4;
grid-row-end:-1;

display:flex;
flex-direction:row;

align-items:flex-start;
justify-content:flex-start;

padding:2rem 0 0 1rem;
`;


export const MainDiv = styled.div`
display:flex;
flex-direction:column;

height:144px;
width:280px;
`;

export const DateDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

padding:0 1rem;

width:280px;
height:48px;

background-color:var(--side-background);

border-bottom:solid 1.8px var(--primary);

border-radius:5px 5px 0 0;

box-shadow:.5px 0px 4px -1px;
`;

export const Date = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;

font-size:16px;
`;

export const Text = styled.div`
font-size:12.5px;
color:var(--primary);
font-weight:400;
`;

export const Img = styled.div`
background:url(${p => p.img});
background-repeat:no-repeat;

width:${p => p.width}px;
height:${p => p.height}px;

cursor:pointer;

`;


export const RefreshedAtDiv = styled.div`
display:flex;
flex-direction:row;

justify-content:space-around;
align-items:center;

height:48px;
width:280px;

padding:0 5.5rem 0 1rem;
`;

export const Text2 = styled.div`
font-size:12.5px;
font-weight:500;
`;


export const AvailableBalanceDiv = styled.div`
display:flex;
justify-content:space-between;
align-items:center;

padding:0 1rem;

width:280px;
height:48px;

background-color:var(--side-background);

border-bottom:solid 1.8px black;

border-radius:5px 5px 0 0;

box-shadow:.5px 0px 4px -1px;

opacity:.5;
`;

export const Avaible = styled.div`
display:flex;
flex-direction:column;
align-self:center;
justify-self:flex-start;

padding-right:5rem;
`;

export const Text3 = styled.div`
font-size:12px;
`;

export const Value = styled.div`
color:var(--secondary);
`;

export const Eye = styled.div`
background:url(${p => p.img});
background-repeat:no-repeat;

width:${p => p.width}px;
height:${p => p.height}px;

cursor:pointer;

opacity:1;
`



