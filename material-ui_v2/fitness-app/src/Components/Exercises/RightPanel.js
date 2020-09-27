import React from 'react';
import { UserContext } from '../../Context';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    item: {
        padding: 34,
        margin: 18,
        height: 550,
        overflowY: 'auto'
    },
})

const RightPanel = () => {
    const context = React.useContext(UserContext);
    const classes = useStyles();
    const {
        // id,
        title = 'Welcome',
        description = 'Please select an exercise from the list',
    } = context.currentExercise;


    return (
        <Paper className={classes.item}>
            <Typography variant='h3' color='primary'>
                {title}
            </Typography>
            <Typography variant='subtitle1' color='secondary'>
                {description}
            </Typography>
        </Paper>
    );
}

export default RightPanel;
