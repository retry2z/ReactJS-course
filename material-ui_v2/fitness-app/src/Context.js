import React from 'react';

import { exercises as dataExercises, muscles as categories } from './data/store';

export const UserContext = React.createContext({
    data: [],
    exercises: [],
    categories: [],
    selectedCategory: '',
    setCurrentCategory: () => { },
    currentExercise: {},
    selectExercise: () => { },
    createExercise: () => { },
    removeExercise: () => { },
});

const ContextContainer = (props) => {
    const [currentExercise, setCurrentExercise] = React.useState({});
    const [selectedCategory, setCurrentCategory] = React.useState(null);
    const [exercises, setExercises] = React.useState(dataExercises);

    const data = Object.entries(exercises.reduce((acc, exercise) => {
        const { muscles } = exercise;

        acc[muscles] = !!acc[muscles] ?
            [...acc[muscles], exercise] : [exercise]

        return acc
    }, {}));

    const selectExercise = (id) => {
        setCurrentExercise(exercises.find(x => x.id === id));
    };

    const createExercise = (exercise) => {
        setExercises([
            ...exercises,
            exercise
        ])
    };

    const removeExercise = (id) => {
        setExercises(exercises.filter(x => x.id !== id));
    };

    return (
        <UserContext.Provider
            value={{
                data,
                exercises,
                categories,
                selectedCategory,
                setCurrentCategory,
                currentExercise,
                selectExercise,
                createExercise,
                removeExercise,
            }}>

            { props.children}

        </UserContext.Provider >
    )

}

export default ContextContainer

