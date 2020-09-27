import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

})

const LeftPanel = ({
    data,
    category,
    selectExercise,
}) => {
    const classes = useStyles();

    return (
        <Paper className={classes.item}>
            {data.map(([group, exercises]) => (
                (!category || (category === group)) &&
                <div key={group}>
                    <Typography className={classes.group}
                        variant='h5'
                        color='primary'
                    >
                        {group}
                    </Typography>

                    {exercises.map(exercise => (
                        <List key={exercise.title} component='ul'>
                            <ListItem button
                                onClick={() => selectExercise(exercise.id)}
                            >
                                <ListItemText primary=
                                    {
                                        <Typography variant='subtitle2'>{exercise.title}</Typography>
                                    }
                                />
                            </ListItem>
                        </List>
                    ))}
                </div>
            ))}
        </Paper>
    );
}

export default LeftPanel;
