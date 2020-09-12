import React from "react";
import { Button } from "@material-ui/core";

import { useDispatch } from 'react-redux';
import { setSnackbar } from '../redux/actions/snackbar';

const Engineer = () => {
  const dispatch = useDispatch();

  const notification = { message: 'Nothing to do with this' };

  return (
    <>
      <div>Become a marketer for our company!</div>

      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(setSnackbar(notification))}
      >
        Apply
      </Button>
    </>
  )
};

export default Engineer;
