import { makeStyles } from '@material-ui/core/styles'



export default makeStyles(theme => ({
    coloredIndicator: {
      backgroundColor: '#fff',
    },
    logoText: {
      color: theme.palette.common.offBlack,
    },
    tab: {
      ...theme.typography.body1,
      fontWeight: 600   
    },
    tabs: {
      marginLeft: 'auto',
      marginRight: 'auto',
    },
    icon: {
        height: '2rem',
        width: '2rem'
    },
    logoContainer: {
        [theme.breakpoints.down('md')]: {
            marginRight: 'auto'
        }
    },
    drawer: {
        backgroundColor: theme.palette.primary.main,
        minWidth: '300px'
    },
    listItemText: {
        color: '#fff'
    }
  }))
