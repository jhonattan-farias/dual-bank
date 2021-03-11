import styled from "styled-components";
import Logos from '../../assets/BalanceBar/Logos.svg'

export const Header = styled.div`
grid-area:'BD';

display:flex;
flex-direction:row;
background-color:pink;
`;

export const Logo = styled.img`
background:url(${Logos});
`;
