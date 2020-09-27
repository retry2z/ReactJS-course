import React from 'react';

import { exercises as dataExercises, muscles as dataMuscles } from './data/store';


export const UserContext = React.createContext({});

const ContextContainer = (props) => {
    const [currentExercise, setCurrentExercise] = React.useState({});
    const [selectedCategory, setCurrentCategory] = React.useState(null);

    const data = Object.entries(dataExercises.reduce((acc, exercise) => {
        const { muscles } = exercise;

        acc[muscles] = !!acc[muscles] ?
            [...acc[muscles], exercise] : [exercise]

        return acc
    }, {}));

    const selectCurrentExercise = (id) => {
        setCurrentExercise(dataExercises.find(x => x.id === id));
    }

    return (
        <UserContext.Provider
            value={{
                data,
                dataExercises,
                dataMuscles,
                selectedCategory,
                setCurrentCategory,
                currentExercise,
                selectCurrentExercise,
            }}>

            { props.children }

        </UserContext.Provider >
    )

}

export default ContextContainer

