import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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

const Exercises = ({ data }) => {
    const classes = useStyles();

    return (
        <Grid container>
            <Grid item xs={0} sm={1} />

            <Grid item xs={10} sm={5}>
                <Paper className={classes.item}>
                    {data.map(([group, exercises]) => (
                        <div key={group}>
                            <Typography className={classes.group} variant='h6'>
                                {group}
                            </Typography>

                            {exercises.map(exercise => (
                                <List key={exercise.title} component='ul'>
                                    <ListItem button>
                                        <ListItemText>{exercise.title}</ListItemText>
                                    </ListItem>
                                </List>
                            ))}
                        </div>
                    ))}
                </Paper>
            </Grid>

            <Grid item xs={10} sm={5}>
                <Paper className={classes.item}>
                    <h1>Panel</h1>
                </Paper>
            </Grid>

            <Grid item xs={0} sm={1} />
        </Grid>
    );
}

export default Exercises;
