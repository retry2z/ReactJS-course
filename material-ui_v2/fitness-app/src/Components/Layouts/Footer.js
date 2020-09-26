import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';

const useStyle = makeStyles(theme => ({
    footer: {
        top: 'auto',
        bottom: 0,
        height: 78,
    },
}));

const Footer = ({ muscles = [], setCategory, category }) => {
    const classes = useStyle();

    const index = category ?
        muscles.findIndex(muscle => muscle === category) + 1
        : 0;

    return (
        <AppBar className={classes.footer} color='inherit' position='fixed'>
            <Tabs
                value={index}
                onChange={(ev, index) => setCategory(!!index ? muscles[index - 1] : null)}
                indicatorColor='secondary'
                textColor='primary'
                centered
            >
                <Tab label='All' />

                {muscles.map(muscle => (
                    <Tab key={muscle} label={muscle} />
                ))}

            </Tabs>
        </AppBar>
    );
}

export default Footer;
