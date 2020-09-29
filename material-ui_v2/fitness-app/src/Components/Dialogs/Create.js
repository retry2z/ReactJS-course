import React from 'react';

import { UserContext } from '../../Context';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Add from '@material-ui/icons/Add';
import Form from './Form';

const Create = () => {
    const [open, setOpen] = React.useState(false);
    const context = React.useContext(UserContext);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmitForm = (data) => {
        context.createExercise(data);
        handleClose();
    };

    return (
        <>
            <Button
                variant="contained"
                color="secondary"
                startIcon={<Add />}
                onClick={handleClickOpen}
                aria-label="add an exercise"
            >
                Create
            </Button>

            <Dialog
                open={open}
                onClose={handleClose}
            >

                <DialogTitle>
                    Create new exercise
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Let's try something new
                    </DialogContentText>

                    <Form onSubmit={handleSubmitForm} />


                </DialogContent>

                <DialogActions>

                </DialogActions>
            </Dialog>
        </>
    )
};

export default Create