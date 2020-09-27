import React from 'react';

import { exercises as dataExercises, muscles as dataMuscles } from './data/store';


export const UserContext = React.createContext({});

const ContextContainer = (props) => {
    const [exercises, setExercises] = React.useState(dataExercises);
    const [muscles, setMuscles] = React.useState(dataMuscles);
    const [category, setCategory] = React.useState(null);

    return (
        <UserContext.Provider
            value={{
                exercises,
                setExercises,
                muscles,
                setMuscles,
                category,
                setCategory,
            }}>

            { props.children}

        </UserContext.Provider >
    )

}

export default ContextContainer

