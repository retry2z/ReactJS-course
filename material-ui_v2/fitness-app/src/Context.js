import React from 'react';

import { exercises as dataExercises, muscles as categories } from './data/store';

export const UserContext = React.createContext({
    data: [],
    exercises: [],
    categories: [],

    editMode: false,
    enableEditMode: () => { },
    disableEditMode: () => { },

    currentCategory: '',
    selectCategory: () => { },

    currentExercise: {},
    selectExercise: () => { },

    createExercise: () => { },
    removeExercise: () => { },
    editExercise: () => { },
});

const ContextContainer = (props) => {
    const [currentExercise, setCurrentExercise] = React.useState({});
    const [currentCategory, setCurrentCategory] = React.useState(null);
    const [editMode, setEditMode] = React.useState(false);
    const [exercises, setExercises] = React.useState(dataExercises);

    const initialCategories = categories.reduce((acc, category) => {
        acc[category] = []
        return acc
    }, {});

    const data = Object.entries(exercises.reduce((acc, exercise) => {
        const { muscles } = exercise;
        acc[muscles] = [...acc[muscles], exercise];
        return acc
    }, initialCategories));

    const enableEditMode = (id) => {
        setCurrentExercise(exercises.find(x => x.id === id));
        setEditMode(true);
    }

    const disableEditMode = () => {
        setEditMode(false);
    }

    const selectCategory = (value) => {
        setCurrentCategory(value);
    };

    const selectExercise = (id) => {
        setCurrentExercise(exercises.find(x => x.id === id));
    };

    const createExercise = (exercise) => {
        setExercises([
            ...exercises,
            exercise
        ])
    };

    const editExercise = (exercise) => {
        setExercises(
            [
                ...exercises.filter(x => x.id !== exercise.id),
                exercise
            ]
        )

    }

    const removeExercise = (id) => {
        setExercises(exercises.filter(x => x.id !== id));
    };

    return (
        <UserContext.Provider
            value={{
                data,
                exercises,
                categories,

                editMode,
                enableEditMode,
                disableEditMode,

                currentCategory,
                selectCategory,

                currentExercise,
                selectExercise,

                createExercise,
                editExercise,
                removeExercise,
            }}>

            { props.children}

        </UserContext.Provider >
    )

}

export default ContextContainer

