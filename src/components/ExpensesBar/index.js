import React from 'react'

import card from '../../assets/ExpensesBar/card.svg'
import plus from '../../assets/ExpensesBar/plus.svg'
import eye from '../../assets/ExpensesBar/eye.svg'

import {
    Container,
    DivImg,
    Img,
    Transactions,
    Transaction,
    DivLetra,
    Description,
    Value,
    Name,

} from './styles'

export default function ExpensesBar(){
    return(
        <Container>
            <DivImg>
                <Img img={card} width={24} height={24}/>
            </DivImg>

            <DivImg>
                 <Img img={plus} width={24} height={24}/>
            </DivImg>

            <Transactions>
                <Transaction>
                    <DivLetra color={'#778899'}>
                        P
                    </DivLetra>

                    <Description>
                        <Name>
                        Ghost of Tsushima
                        <Img img={eye} width={16} height={16} ml={10}/>
                        </Name>

                        <Value>
                        R$10.000,00
                        </Value>
                    </Description>
                </Transaction>

                <Transaction>
                    <DivLetra color={'#622EE5'}>
                        P
                    </DivLetra>

                    <Description>
                        <Name>
                        Playstation Five
                        <Img img={eye} width={16} height={16} ml={10}/>
                        </Name>

                        <Value>
                        R$500.000,00
                        </Value>
                    </Description>
                </Transaction>
            </Transactions>
        </Container>
    )
}