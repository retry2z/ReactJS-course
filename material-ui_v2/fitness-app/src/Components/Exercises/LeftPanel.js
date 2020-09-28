import React from 'react';
import { UserContext } from '../../Context';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles({
    root: {
        padding: 20,
    },
    item: {
        padding: 34,
        margin: 18,
        height: 550,
        overflowY: 'auto'
    },
    group: {
        textTransform: 'capitalize',
    }
});

const LeftPanel = () => {
    const context = React.useContext(UserContext);
    const classes = useStyles();

    return (
        <Paper className={classes.item}>

            {context.data.map(([muscles, exercises]) => (
                (!context.selectedCategory || (context.selectedCategory === muscles)) &&
                <div key={muscles}>
                    <Typography className={classes.group}
                        variant='h5'
                        color='primary'
                    >
                        {muscles}
                    </Typography>

                    <List component='ul'>
                        {exercises.map(exercise => (
                            <ListItem
                                key={exercise.title}
                                button
                                onClick={() => context.selectCurrentExercise(exercise.id)}
                            >
                                <ListItemText primary=
                                    {
                                        <Typography variant='subtitle2'>{exercise.title}</Typography>
                                    }
                                />

                                <ListItemSecondaryAction>
                                    <IconButton onClick={() => context.removeExercise(exercise.id)}>
                                        <Delete />
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        ))}
                    </List>
                </div>
            ))}
        </Paper>
    );
}

export default LeftPanel;
