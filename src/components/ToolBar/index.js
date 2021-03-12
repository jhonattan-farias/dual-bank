import React from 'react'

import home from '../../assets/ToolBar/HouseLine.svg'
import chart from '../../assets/ToolBar/ChartLineUp.svg'
import hand from '../../assets/ToolBar/Handshake.svg'
import money from '../../assets/ToolBar/Money.svg'
import question from '../../assets/ToolBar/Question.svg'
import Carets from '../../assets/ToolBar/Carets.png'
import credit from '../../assets/ToolBar/CreditCard.png'
import wrent from '../../assets/ToolBar/Wrench.png'
import frame from '../../assets/ToolBar/Icon-Frame.png'
import group from '../../assets/ToolBar/Group.png'
import receipt from '../../assets/ToolBar/Receipt.png'

import {
    Container,
    Img,
    DivImg,
    ImgMain,
    DivSecTop,
    DivSecDown,
    DivPurple,

} from './styles'

export default function ToolBar(){
    return(
        <Container>
            
            <DivSecTop><Img img={home}/></DivSecTop>
            <ImgMain img={frame}/>
            <DivSecDown><Img img={chart}/></DivSecDown>
            <DivImg><Img img={money}/></DivImg>
            <DivImg><Img img={hand}/></DivImg>
            <DivImg><Img img={group}/></DivImg>
            <DivImg><Img img={credit}/></DivImg>
            <DivImg><Img img={receipt}/></DivImg>
            <DivImg><Img img={wrent}/></DivImg>
            <DivImg><Img img={question}/></DivImg>
            <DivPurple><Img img={Carets}/></DivPurple>

        </Container>
    )
}