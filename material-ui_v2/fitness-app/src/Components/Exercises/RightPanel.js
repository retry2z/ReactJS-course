import React from 'react';
import { UserContext } from '../../Context';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Form from '../Dialogs/Form';

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
        title = 'Welcome',
        description = 'Please select an exercise from the list',
        id
    } = context.currentExercise;

    const handleSubmitForm = (data) => {
        context.editExercise(data);
        context.disableEditMode();
    };

    return (
        <Paper className={classes.item}>
            <Typography variant='h3' color='primary'>
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
