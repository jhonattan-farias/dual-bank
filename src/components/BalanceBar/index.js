import React from 'react'
import logoImg from '../../assets/BalanceBar/Logos.svg'
import {
    Header,
    Separator,
    Logo,
    Account,
    
} from './styles'


export default function BalanceBar(){
   return(
    <>   
    <Header >
        <Logo logo={logoImg}/>
        <Separator/>
        <Account/>

    </Header>
   </>
   )
}