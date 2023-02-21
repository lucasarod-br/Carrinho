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
            <Tab {...activate('/cart')} >Sacola</Tab>
            <Tab {...activate('/payment')}>Pagamento</Tab>
            <Tab {...activate('/success')}>Confirmação</Tab>
    </StyledHeader>

    {<Outlet/>}
    </>
  )
}

export default Header