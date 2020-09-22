import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Person, Language } from '@material-ui/icons'
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

import LangSwitcher from "../langSwitcher";

function Navbar() {
    const [isActive, setActive] = useState(false);

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid
                    container
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Hidden smUp >
                        <Grid item xs={1}>
                            <IconButton edge="start" color="inherit" aria-label="menu">
                                <MenuIcon />
                            </IconButton>
                        </Grid>
                    </Hidden>

                    <Typography variant="h4">Boardaki</Typography>

                    <div>
                        <Button
                            color="inherit"
                            startIcon={<Person />}
                        >
                            <Hidden xsDown>
                                Login
                            </Hidden>
                        </Button>

                        <Hidden smUp>
                            <LangSwitcher short />
                        </Hidden>
                        <Hidden xsDown>
                            <LangSwitcher />
                        </Hidden>
                    </div>
                </Grid>

            </Toolbar>
        </AppBar>

    );
}

export default Navbar;