import styled from "styled-components";

export const Container = styled.div`
grid-area:"DB";
grid-column-start:2;
grid-column-end:-1;

display:flex;
flex-direction:row;
align-items:center;

padding:35px 0 0 10px;
`;

export const Text = styled.div`
color:var(--text-color);
font-weight:700;
`;

export const IconDiv = styled.div`
display:flex;
justify-content:center;
align-items:center;

width:80px;
height:40px;

border:solid var(--primary) 1.8px;
border-radius:5px;

margin-left:15px;

cursor:pointer;

transition:.5s;
`;

export const Img = styled.div`
background:url(${p => p.img});

width:${p => p.width}px;
height:${p => p.height}px;
`
