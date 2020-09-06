import React from 'react';

const ThemeContext = React.createContext({
    isLight: true,
    theme: 'light',
});

ThemeContext.displayName = 'MyDisplayName';


export default ThemeContext;