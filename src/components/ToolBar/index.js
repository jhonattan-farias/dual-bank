import React from 'react'

import home from '../../assets/ToolBar/HouseLine.svg'
import chart from '../../assets/ToolBar/ChartLineUp.svg'

import {
    Container,
    Img,

} from './styles'

export default function ToolBar(){
    return(
        <Container>
            <DivImg><Img img={home}/></DivImg>
            <DivImg><Img img={chart}/></DivImg>
            <DivImg><Img img={home}/></DivImg>
            <DivImg><Img img={home}/></DivImg>
            <DivImg><Img img={home}/></DivImg>
            <DivImg><Img img={home}/></DivImg>
            <DivImg><Img img={home}/></DivImg>
            <DivImg><Img img={home}/></DivImg>
            <DivImg><Img img={home}/></DivImg>
            <DivImg><Img img={home}/></DivImg>
        </Container>
    )
}