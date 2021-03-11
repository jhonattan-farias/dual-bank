import React from 'react'
import {Grid} from './styles'
import BalanceBar from '../BalanceBar'
import ToolBar from '../ToolBar'
import ExpensesBar from '../ExpensesBar'
import DocumentsBar from '../DocumentsBar'
import BalanceDate from '../BalanceDate'

export default function Layout(){
    return(
        <>
        <Grid>
            <BalanceBar/>
            <ToolBar/>
            <ExpensesBar/>
            <DocumentsBar/>
            <BalanceDate/>

        </Grid>
        </>
    )
}