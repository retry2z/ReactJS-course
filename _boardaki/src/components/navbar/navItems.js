import React from 'react';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

import MailIcon from '@material-ui/icons/Mail';

export const NavItems = {
    category1: ['Inbox', 'Starred', 'Send email', 'Drafts'],
    category2: ['All mail', 'Trash', 'Spam']
}

const NavLinks = () => {

    return (
        <>
            <Divider/>

            <List>
                {
                    NavItems.category1.map(text => (
                        <ListItem button key={text}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))
                }
            </List>

            <Divider />

            <List>
                {
                    NavItems.category2.map(text => (
                        <ListItem button key={text}>
                            <ListItemIcon><MailIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))
                }
            </List>
        </>
    );
}

export default NavLinks

