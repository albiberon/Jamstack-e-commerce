import React from 'react'
import { AppBar, Toolbar, Typography, Button, Tabs, Tab, IconButton} from '@material-ui/core'

import search from '../../images/search.svg'
import cart from '../../images/cart.svg'
import account from '../../images/account.svg'
import headerStyles from './headerStyles'


const Header = ({categories}) => {
  // console.log("Header", categories)
  const classes = headerStyles()
  const routes = [
    ...categories, 
    {node: {name: 'Contact Us', strapiId: 'contact'}}
  ]

  return (
      <AppBar color="transparent" elevation={0}>
        <Toolbar>
          <Button>
            <Typography variant="h1">
                <span className={classes.logoText}>Coda</span>man
            </Typography>
            <Tabs value={0} classes={{ indicator: classes.coloredIndicator, root: classes.tabs}}>
              {
                routes.map(route => (
                <Tab label={route.node.name} key={route.node.strapiId}/>
                ))
              }

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
