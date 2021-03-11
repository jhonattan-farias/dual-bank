import React from 'react'
import logoImg from '../../assets/BalanceBar/Logos.svg'
import caretDown from '../../assets/BalanceBar/CaretDown.svg'
import eyeImg from '../../assets/BalanceBar/eye.svg'
import copy from '../../assets/BalanceBar/CopySimple.svg'
import {
    Container,
    BalanceArea,
    Separator,
    Img,
    Account,
    NameAccount,
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
        <Img img={logoImg} width={130} height={21}/>
        
        <Separator/>
        
        <Account>
            <NameAccount size={16}>
                Conta Corrente
                <Img img={caretDown} width={16} height={16}/>
            </NameAccount>

            <NumberAccount>
                <NumberOne>Ag. 00007-1</NumberOne>  
                
                <NumberTwo>C.C. 00000000000000000020-1</NumberTwo>

                <Img img={copy} width={16} height={16}/>
            </NumberAccount>
        </Account>

        <Balance>
            <NameAccount size={12}>Saldo <Img img={eyeImg} width={16} height={16}/></NameAccount>

            <Saldo>R$40.000.00</Saldo>
        </Balance>
        </BalanceArea>

        <InputArea>
            <Input></Input>
        </InputArea>
    
    </Container>


   </>
   )
}