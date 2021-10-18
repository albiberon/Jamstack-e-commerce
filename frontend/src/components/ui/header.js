import React from 'react'
import { AppBar, Toolbar, Typography, Button, Tabs, Tab, IconButton} from '@material-ui/core'


import search from '../../images/search.svg'
import cart from '../../images/cart.svg'
import account from '../../images/account.svg'

const Header = () => {
  return (
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          <Button>
            <Typography variant="h1">
                Codaman
            </Typography>
            <Tabs>
              <Tab label="Hats"/>
              <Tab label="Shirts"/>
              <Tab label="Hoodies"/>
              <Tab label="Contact us"/>
            </Tabs>
            <IconButton>
              <img width="25" src={search} alt="search"/>
            </IconButton>
            <IconButton>
              <img width="25" src={cart} alt="cart"/>
            </IconButton>
            <IconButton>
              <img width="25" src={account} alt="account"/>
            </IconButton>
          </Button>
        </Toolbar>
      </AppBar>
  )
}

export default Header
