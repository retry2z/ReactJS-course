import React from 'react';
import { UserContext } from '../../Context';

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

const Footer = ({ setCategory, category }) => {
    const context = React.useContext(UserContext || []);
    const classes = useStyle();

    const index =
        context.category ?
            context.muscles.findIndex(x => x === context.category) + 1
            : 0;

    return (
        <AppBar className={classes.footer} color='inherit' position='fixed'>
            <Tabs
                value={index}
                onChange={(ev, index) => context.setCategory(!!index ? context.muscles[index - 1] : null)}
                indicatorColor='secondary'
                textColor='primary'
                centered
            >
                <Tab label='All' />

                {
                    context.muscles.map(muscle => (
                        <Tab key={muscle} label={muscle} />
                    ))
                }

            </Tabs>
        </AppBar>
    );
}

export default Footer;
