import React from 'react'

import caret from '../../assets/BalanceDate/CaretDown.png'
import refresh from '../../assets/BalanceDate/Refresh.svg'
import shield from '../../assets/BalanceDate/Shield.svg'
import eye from '../../assets/BalanceDate/eye.svg'

import {
    Container,
    MainDiv,
    DateDiv,
    Date,
    Text,
    Text2,
    Text3,
    Img,
    RefreshedAtDiv,
    AvailableBalanceDiv,
    Avaible,
    Value,
    Eye,

} from './styles'

export default function BalanceDate(){
   return(
        <Container>
            <MainDiv>
                <DateDiv>
                    <Date>
                        <Text>Data do Saldo</Text>
                        20/03/2021
                    </Date>
                    <Img img={caret} width={24} height={24}/>
                </DateDiv>

                <RefreshedAtDiv>
                    <Text2>Saldo atualizado ás 18:30</Text2>
                    <Img img={refresh} width={24} height={24}/>
                </RefreshedAtDiv>

                <AvailableBalanceDiv>
                    <Img img={shield} width={24} height={24}/>
                    <Avaible>
                        <Text3>
                            Saldo Disponivel
                        </Text3>

                        <Value>
                            R$35.000,00
                        </Value>
                    </Avaible>
                    <Eye img={eye} width={24} height={24}/>
                </AvailableBalanceDiv>
            </MainDiv>
    </Container>
   )
}