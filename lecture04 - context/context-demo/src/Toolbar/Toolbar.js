import React from 'react';
import ThemedButton from '../Button/Button';
import './Toolbar.module.css';


const Toolbar = (props) => {
    // The Toolbar component must take an extra "theme" prop
    // and pass it to the ThemedButton. This can become painful
    // if every single button in the app needs to know the theme
    // because it would have to be passed through all components.
    return (
        // <ul>
        //     <ThemedButton theme={props.theme} name="Home" />
        //     <ThemedButton theme={props.theme} name="Products" />
        //     <ThemedButton theme={props.theme} name="About" />
        //     <ThemedButton theme={props.theme} name="Contact Us" />
        // </ul>

        <ul>
            <ThemedButton name="Home" />
            <ThemedButton name="Products" />
            <ThemedButton name="About" />
            <ThemedButton name="Contact Us" />
        </ul>
    );
}

export default Toolbar