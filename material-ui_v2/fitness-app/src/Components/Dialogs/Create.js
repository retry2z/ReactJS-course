import React from 'react';

import { UserContext } from '../../Context';

import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Add from '@material-ui/icons/Add';

const useStyle = makeStyles({
    root: {
        width: 420,
    },
    input: {
        paddingBottom: 20,
        display: 'block',
    },
    select: {
        width: '50%',
        paddingBottom: 20,
        textTransform: 'capitalize',
    },
    options: {
        textTransform: 'capitalize',
    }
});

const Create = () => {
    const [open, setOpen] = React.useState(false);
    const [form, setForm] = React.useState({});
    const context = React.useContext(UserContext);
    const classes = useStyle();

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (ev, name) => {
        setForm({
            ...form,
            [name]: ev.target.value
        })
    };

    const handleSubmitForm = () => {
        setForm({
            ...form,
            id: form.title.toLowerCase().replace(/ /g, '-')
        });

        context.createNewExercise(form);

        setForm({
            title: '',
            description: '',
            muscle: ''
        });
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

                    <form className={classes.root}>

                        <FormControl className={classes.input}>
                            <TextField
                                label="Title"
                                onChange={(e) => handleChange(e, 'title')}
                                fullWidth
                            />
                        </FormControl>

                        <FormControl className={classes.select}>
                            <InputLabel>
                                Muscle
                            </InputLabel>
                            <Select
                                value={form.muscles || ''}
                                onChange={(e) => handleChange(e, 'muscles')}
                            >
                                {context.categories.map((option) => (
                                    <MenuItem
                                        className={classes.options}
                                        key={option}
                                        value={option}>
                                        {option}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>

                        <FormControl className={classes.input}>
                            <TextField
                                label="Description"
                                onChange={(e) => handleChange(e, 'description')}
                                multiline
                                rows="4"
                                fullWidth
                            />
                        </FormControl>
                    </form>

                </DialogContent>

                <DialogActions>
                    <Button onClick={handleSubmitForm} variant="contained" color="secondary">
                        Create
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )

};

export default Create