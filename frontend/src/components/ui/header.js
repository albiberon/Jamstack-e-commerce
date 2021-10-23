import React, {useState} from 'react'
import { AppBar, Toolbar, Typography, Button, Tabs, Tab, IconButton } from '@material-ui/core'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { Link, navigate } from 'gatsby'

import search from '../../images/search.svg'
import cart from '../../images/cart.svg'
import account from '../../images/account.svg'
import headerStyles from './headerStyles'
import menu from '../../images/menu.svg'



const Header = ({ categories }) => {

  const classes = headerStyles()
  const matchesMD = useMediaQuery((theme) => theme.breakpoints.down('md'))
  const [drawerOpen, setDrawerOpen ] = useState(false)

  const iOS = typeof navigator !== 'undefined' && /iPad|iPhone|iPod/.test(navigator.userAgent)

  const routes = [
    ...categories,
    { node: { name: 'Contact Us', strapiId: 'contact' } }
  ]

  const tabs = (
    <Tabs value={0}
      classes={{ indicator: classes.coloredIndicator, root: classes.tabs }}>
      {
        routes.map(route => (
          <Tab label={route.node.name} key={route.node.strapiId} />
        ))
      }
    </Tabs>
  )

  const drawer = (
    <SwipeableDrawer 
    open={drawerOpen} 
    onOpen={() => setDrawerOpen(true)}
    onClose = {() => setDrawerOpen(false)} 
    disableBackdropTransition={!iOS} 
    disableDiscovery={iOS} >
      <List disablePadding>
          {routes.map( route =>(
            <ListItem divider button key={route.node.strapiId}>
              <ListItemText primary={route.node.name}/>
            </ListItem>
          ))}
      </List>
    </SwipeableDrawer>
  )
  return (
    <AppBar color="transparent" elevation={0}>
      <Toolbar>
        <Button>
          <Typography variant="h1">
            <span className={classes.logoText}>Coda</span>man
          </Typography>
        </Button>
        {matchesMD ? drawer : tabs}
        <IconButton>
          <img className={classes.icon} src={search} alt="search" />
        </IconButton>
        <IconButton>
          <img className={classes.icon} src={cart} alt="cart" />
        </IconButton>
          <IconButton onClick={() => matchesMD ? setDrawerOpen(true) : navigate('/account') }>
            <img className={classes.icon} width="25" src={matchesMD ? menu : account} alt={matchesMD ? 'menu' : 'account'} />
          </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default Header
