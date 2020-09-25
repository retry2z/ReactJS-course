import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

const useStyle = makeStyles(theme => ({
    footer: {
        top: 'auto',
        bottom: 0,
        height:78,
    },
}));

const Footer = ({ categories = [] }) => {
    const classes = useStyle();

    return (
        <AppBar className={classes.footer} color='inherit' position='fixed'>
            <Tabs
                value={0}
                indicatorColor='primary'
                textColor='primary'
                centered
            >
                <Tab label='All' />

                {categories.map(muscles => (
                    <Tab key={muscles} label={muscles} />
                ))}

            </Tabs>
        </AppBar>
    );
}

export default Footer;
