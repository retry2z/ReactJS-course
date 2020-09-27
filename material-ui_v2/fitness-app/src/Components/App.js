import React from 'react';
import { Header, Main, Footer } from './Layouts';
import Exercises from './Exercises';

import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => {

  return (
    <>
      <CssBaseline />

      <Header />
      <Main>
        <Exercises />
      </Main>
      <Footer />
    </>
  );
}

export default App;
