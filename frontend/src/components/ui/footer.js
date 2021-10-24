import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/coer/styles'
import { Link } from 'gatsby'

import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'
import instagram from '../../images/instagram.svg'


const useStyles = makeStyles(theme => ({

}))

const Footer = () => {
    const classes = useStyles()

    return (
        <footer>
            <Grid container>
                <Grid item container>
                   {/* Links */}
                </Grid>
                <Grid item container direction='column'>
                    {/* Social media icons */}
                    <Grid item>
                        <img src={facebook} alt='facebook'/>
                    </Grid>
                    <Grid item>
                        <img src={twitter} alt='twitter'/>
                    </Grid>
                    <Grid item>
                        <img src={instagram} alt='instagram'/>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
