import React from 'react';

import Grid from '@material-ui/core/Grid';

const Main = ({ children }) => {
    return (
        <Grid container>
            <Grid item xs={false} sm={1} />

            <Grid item sm>
                {children}
            </Grid>

            <Grid item xs={false} sm={1} />
        </Grid>
    );
}

export default Main;
