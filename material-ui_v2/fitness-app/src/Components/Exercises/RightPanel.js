import React from 'react';
import { UserContext } from '../../Context';

import Typography from '@material-ui/core/Typography';
import Form from '../Core/Form';

const RightPanel = () => {
    const context = React.useContext(UserContext);
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
        <>
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
        </>
    );
}

export default RightPanel;
