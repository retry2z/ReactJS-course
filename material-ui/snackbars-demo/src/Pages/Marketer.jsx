import React from "react";
import { Button } from "@material-ui/core";

import { useSelector, useDispatch } from 'react-redux';
import {setSnackbar} from '../redux/actions/snackbar';


const Marketer = () => {
  const dispatch = useDispatch();
  const snackbarOpen = useSelector(state => state.snackbar.snackbarOpen);
  const snackbarType = useSelector(state => state.snackbar.snackbarType);
  const snackbarMessage = useSelector(state => state.snackbar.snackbarMessage);  

  return (
    <>
    <div>
      Become a marketer for our company!
      
    </div>
      <Button 
        variant="contained"
        color="secondary"
        onClick={()=> dispatch(setSnackbar({open:true,message:'Successfully applied'}))}
      >
        Apply
      </Button>

      <div>
        {snackbarMessage + ' message '}{snackbarType}{ ' ' + snackbarOpen + ''}
      </div>
      </>
  )
};

export default Marketer;
