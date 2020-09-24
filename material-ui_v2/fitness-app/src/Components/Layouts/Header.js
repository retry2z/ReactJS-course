import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const Header = () => {
    return (
        <AppBar>
            <Toolbar>
                <Typography variant='h4'>
                    Fitness
                </Typography>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
