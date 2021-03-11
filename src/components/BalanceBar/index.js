import React from 'react'

import logoImg from '../../assets/BalanceBar/Logos.svg'
import caretDown from '../../assets/BalanceBar/CaretDown.svg'
import eyeImg from '../../assets/BalanceBar/eye.svg'
import copy from '../../assets/BalanceBar/CopySimple.svg'
import lupe from '../../assets/BalanceBar/MagnifyingGlass.svg'
import chat from '../../assets/BalanceBar/ChatText.svg'
import rightMenu from '../../assets/BalanceBar/right-menu.svg'
import bell from '../../assets/BalanceBar/Bell.svg'
import calendar from '../../assets/BalanceBar/Calendar.png'

import {
    Container,
    BalanceArea,
    Separator,
    Img,
    Account,
    Text,
    TextInput,
    NumberAccount,
    NumberOne,
    NumberTwo,
    Balance,
    Saldo,
    InputArea,
    Input,
} from './styles'


export default function BalanceBar(){
   return(
    <>   
    <Container >
        <BalanceArea>
        <Img img={logoImg} width={130} height={21} mr={5}/>
        
        <Separator/>
        
        <Account>
            <Text size={16}>
                Conta Corrente
                <Img img={caretDown} width={16} height={16}/>
            </Text>

            <NumberAccount>
                <NumberOne>Ag. 00007-1</NumberOne>  
                
                <NumberTwo>C.C. 00000000000000000020-1</NumberTwo>

                <Img img={copy} width={16} height={16}/>
            </NumberAccount>
        </Account>

        <Balance>
            <Text size={12}>Saldo <Img img={eyeImg} width={16} ml={5} height={16}/></Text>

            <Saldo>R$40.000.00</Saldo>
        </Balance>
        </BalanceArea>

        <InputArea>
            <Input color={'--primary'} size={14} > <TextInput size={14}>Pesquisar</TextInput> <Img img={lupe} width={16} height={16}/></Input>
            <Img img={chat} width={24} height={24} mr={15}/>
            <Img img={bell} width={24} height={24} mr={15}/>
            <Img img={calendar} width={24} height={24} mr={15}/>
            <Img img={rightMenu} width={52} height={52} mr={5}/>
        </InputArea>
    
    </Container>


   </>
   )
}