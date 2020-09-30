import React from 'react';
import { UserContext } from '../Context';

import { Header, Main, Footer } from './Layouts';
import Exercises from './Exercises';

import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { deepOrange, orange } from '@material-ui/core/colors';

const App = () => {
  const context = React.useContext(UserContext);

  const theme = createMuiTheme({
    palette: {
      type: context.isDark ? 'dark' : 'light',
      primary: deepOrange,
      secondary: orange,
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />

      <Header />
      <Main>
        <Exercises />
      </Main>
      <Footer />
    </MuiThemeProvider>
  );
}

export default App;
