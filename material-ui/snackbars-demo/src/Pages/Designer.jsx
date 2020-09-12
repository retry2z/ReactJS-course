import React from "react";
import { Button } from "@material-ui/core";

import { useDispatch } from 'react-redux';
import { setSnackbar } from '../redux/actions/snackbar';

const Designer = () => {
  const dispatch = useDispatch();

  const data = {
    open: true,
    message: 'Position is no longer open',
    type: 'error'
  };

  return (
    <>
      <div>Become a marketer for our company!</div>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => dispatch(setSnackbar(data))}
      >
        Apply
      </Button>
    </>
  )
};

export default Designer;
