import React from 'react'

import download from '../../assets/DocumentsBar/DownloadFile.svg' 

import printer from '../../assets/DocumentsBar/Printer.svg'

import share from '../../assets/DocumentsBar/Share.svg'

import { 
    Container,
    Text,
    IconDiv,
    Img
 } from'./styles'

export default function DocumentsBar(){
    return(
        <Container>
            <Text>Saldo Bancário</Text>

            <IconDiv>
                <Img img={download} width={24} height={24}/>
            </IconDiv>

            <IconDiv>
                <Img img={printer} width={24} height={24}/>
            </IconDiv>

            <IconDiv>
                <Img img={share} width={24} height={24}/>
            </IconDiv>
        </Container>
    )
}