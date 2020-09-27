import React from 'react';
import { Header, Main, Footer } from './Layouts';
import Exercises from './Exercises';

import CssBaseline from '@material-ui/core/CssBaseline';

import { exercises, muscles } from '../data/store';

const App = () => {
  const [exercise, setExercise] = React.useState({});

  const data = Object.entries(exercises.reduce((acc, exercise) => {
    const { muscles } = exercise;

    acc[muscles] = !!acc[muscles] ?
      [...acc[muscles], exercise] : [exercise]

    return acc
  }, {}));

  const handleSelectExercise = (id) => {
    setExercise(exercises.find(x => x.id === id));
  }


  return (
    <>
      <CssBaseline />

      <Header />

      <Main>
        <Exercises
          data={data}
          exercise={exercise}
          selectExercise={handleSelectExercise}
        />
      </Main>

      <Footer />
    </>
  );
}

export default App;
