import { Text } from 'components/Text/style'
import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { StyledHeader, Tab } from './style'


function Header() {
    const location = useLocation()
    const activate = (pathName) => {
        const atualPage = location.pathname
        if (pathName === atualPage) {
            return {active: true}
        }
    }

  return (
    <>
    <StyledHeader>
            <Tab {...activate('/cart')} ><Text>Sacola</Text></Tab>
            <Tab {...activate('/payment')}><Text>Pagamento</Text></Tab>
            <Tab {...activate('/success')}><Text>Confirmação</Text></Tab>
    </StyledHeader>

    {<Outlet/>}
    </>
  )
}

export default Header