import React from 'react';

import { exercises, muscles } from '../data/store';

import { Header, Footer } from './Layouts';
import Exercises from './Exercises';
import CssBaseline from '@material-ui/core/CssBaseline';


const App = () => {
  const data = Object.entries(exercises.reduce((acc, exercise) => {
    const { muscles } = exercise;

    acc[muscles] = !!acc[muscles] ?
      [...acc[muscles], exercise] : [exercise]

    return acc
  }, {}));

  return (
    <>
      <CssBaseline />

      <Header />

      <Exercises data={data} />

      <Footer categories={muscles} />
    </>
  );
}

export default App;
