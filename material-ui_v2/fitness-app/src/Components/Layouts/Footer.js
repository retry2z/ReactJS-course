import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyle = makeStyles(theme => ({    
    Paper: {
        backgroundColor: theme.palette.background.paper
    },
}));

const Footer = () => {
    const classes = useStyle();

    return (
        <div className={classes.Paper}>
            <Tabs
                value={0}
                indicatorColor='primary'
                textColor='primary'
                centered
            >

                <Tab label='Item one' />
                <Tab label='Item two' />
                <Tab label='Item three' />

            </Tabs>
        </div>
    );
}

export default Footer;
