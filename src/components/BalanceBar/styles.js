import styled from "styled-components";

export const Header = styled.div`
grid-area:"BB";
grid-column-start:1;
grid-column-end:-1;

display:flex;
flex-direction:row;
align-items:center;

position:relative;

padding:25px 20px 25px 15px;
`;

export const Logo = styled.div`

background:url(${p => p.logo});

width:130px;
height:21px;

margin-right:5px;


`;


export const Separator = styled.div`
width:1px;
height:25px;

border:solid 1px #E5E4E2;

`

