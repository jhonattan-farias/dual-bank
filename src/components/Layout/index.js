import React from 'react'
import {Grid} from './styles'
import BalanceBar from '../BalanceBar'
import ToolBar from '../ToolBar'

export default function Layout(){
    return(
        <>
        <Grid>
            <BalanceBar/>
            <ToolBar/>
        </Grid>
        </>
    )
}