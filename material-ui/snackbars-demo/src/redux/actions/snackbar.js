import { SET_SNACKBAR } from '../constants/snackbar.js';

export const setSnackbar = ({ open = true, type = 'success', message = null, }) => (
    {
        type: SET_SNACKBAR,
        snackbarMessage: message,
        snackbarOpen: open,
        snackbarType: type,
    }
);

