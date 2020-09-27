import React from 'react';

import { exercises, muscles } from '../data/store';

import { Header, Main, Footer } from './Layouts';
import Exercises from './Exercises';
import CssBaseline from '@material-ui/core/CssBaseline';


const App = () => {
  const [category, setCategory] = React.useState(null);
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
          category={category}
          exercise={exercise}
          selectExercise={handleSelectExercise}
        />
      </Main>

      <Footer
        category={category}
        setCategory={setCategory}
        muscles={muscles}
      />
    </>
  );
}

export default App;
