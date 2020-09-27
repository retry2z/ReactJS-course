import React from 'react';
import LeftPanel from './LeftPanel';
import RightPanel from './RightPanel';

import Grid from '@material-ui/core/Grid';

const Exercises = ({
    data,
    category,
    selectExercise,
    exercise
}) => {

    return (
        <Grid container>
            <Grid item xs={12} sm={4}>
                <LeftPanel
                    data={data}
                    selectExercise={selectExercise}
                />
            </Grid>

            <Grid item xs={12} sm={8}>
                <RightPanel
                    exercise={exercise}
                />
            </Grid>
        </Grid>
    );
}

export default Exercises;
