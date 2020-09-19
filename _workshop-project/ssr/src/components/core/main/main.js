import React from 'react';
import style from './main.module.css'

const Main = (props) => {
    return (
        <main className={style.main}>
            {props.children}
        </main>
    )
}

export default Main