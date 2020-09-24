import React from 'react';

import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';

import NavLinks from './navItems';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    aside: {
        width: 240,
        flexShrink: 0,
    },
    drawerPaper: {
        width: 240,
    }
}));

const AsideMenu = ({ open = false }) => {
    const [mobileOpen, setMobileOpen] = React.useState(open);
    const classes = useStyles();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <aside aria-label="aside folders">

            <Hidden smUp implementation="css">
                <Drawer
                    className={classes.aside}
                    variant="temporary"
                    anchor='left'
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <NavLinks />
                </Drawer>
            </Hidden>

            <Hidden xsDown implementation="css">
                <Drawer
                    className={classes.aside}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    <NavLinks />
                </Drawer>
            </Hidden>
        </aside>
    )
}

export default AsideMenu