import React from 'react';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Add from '@material-ui/icons/Add';

const Create = () => {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
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

            <Dialog open={open} onClose={handleClose} aria-labelledby="create-form-exercise">

                <DialogTitle id="create-form-exercise">
                    Create new exercise
                </DialogTitle>

                <DialogContent>
                    <DialogContentText>
                        Let's try something new
                    </DialogContentText>

                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Title"
                        type="text"
                        fullWidth
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={handleClose} variant="contained" color="secondary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )

};

export default Create