import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { Link } from 'gatsby'

import facebook from '../../images/facebook.svg'
import twitter from '../../images/twitter.svg'
import instagram from '../../images/instagram.svg'


const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: theme.palette.primary.main,
        position: 'fixed',
        bottom: 0,
        width: '100%',
        padding: '2rem'
    },
    "@global": {
        body: {
            margin: 0
        }
    },
    linkColumn: {
        width: '20rem'
    },
    socialMediaIcon: {
        marginBottom: '.5rem'
    },
    link: {
        color: '#fff',
        marginBottom: '.5rem'
    },
}))

const Footer = () => {
    const classes = useStyles()

    return (
        <footer className={classes.footer}>
            <Grid container justify="space-between">
                {/* Links */}
                <Grid item>
                    <Grid container>
                        <Grid item container direction="column" classes={{root:classes.linkColumn}}>
                            {/* Section1 */}
                            <Grid item>
                                <Typography variant="h5">
                                    Contact us
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" classes={{body1: classes.link}}>
                                    (555) 555-5555
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" classes={{body1: classes.link}}>
                                    ates@codeman.com
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" classes={{root:classes.linkColumn}}>
                            {/* Section2 */}
                            <Grid item>
                                <Typography variant="h5">
                                    Customer Service
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" classes={{body1: classes.link}}>
                                    Contact Us
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" classes={{body1: classes.link}}>
                                    My Account
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item container direction="column" classes={{root:classes.linkColumn}}>
                            {/* Section3 */}
                            <Grid item>
                                <Typography variant="h5">
                                    Information Section
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" classes={{body1: classes.link}}>
                                    Privacy Policy
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="body1" classes={{body1: classes.link}}>
                                    Terms & Conditions
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item classes={{root: classes.socialContainer}}>
                    <Grid container direction='column' alignItems="center">

                        {/* Social media icons */}
                        <Grid item classes={{root:classes.socialMediaIcon}}>
                            <img src={facebook} alt='facebook' />
                        </Grid>
                        <Grid item classes={{root:classes.socialMediaIcon}}>
                            <img src={twitter} alt='twitter' />
                        </Grid>
                        <Grid item classes={{root:classes.socialMediaIcon}}>
                            <img src={instagram} alt='instagram' />
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer
