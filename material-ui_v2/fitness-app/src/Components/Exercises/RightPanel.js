import React from 'react';
import { UserContext } from '../../Context';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Form from '../Core/Form';

const useStyles = makeStyles(theme => ({
    paper: {
        height: '100%',
        overflowY: 'auto',
        padding: 22,
    },
}));

const RightPanel = () => {
    const context = React.useContext(UserContext);
    const classes = useStyles();
    const {
        title = 'Welcome',
        description = 'Please select an exercise from the list',
        id
    } = context.currentExercise;

    const handleSubmitForm = (data) => {
        context.editExercise(data);
        context.disableEditMode();
    };

    return (
        <Paper className={classes.paper}>
            <Typography variant='h4' color='primary'>
                {title}
            </Typography>
            {
                context.editMode ?
                    <Form
                        key={id}
                        edit
                        onSubmit={handleSubmitForm}
                    />
                    :
                    <Typography variant='subtitle1' color='secondary'>
                        {description}
                    </Typography>
            }
        </Paper>
    );
}

export default RightPanel;
