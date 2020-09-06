import React from 'react';
import './App.css';
import Toolbar from './Toolbar/Toolbar';
import ThemeContext from './_Context/Context';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLight: true,
      theme: 'light',
    }
  }

  setDarkTheme = () => {
    this.setState({
      theme: this.state.isLight ? 'dark' : 'light',
      isLight: !this.state.isLight,
    })
  }

  render() {
    return (
      <div>
        {/* <Toolbar theme={this.state.theme} /> */}

        <ThemeContext.Provider value={this.state}>
          <Toolbar />
        </ThemeContext.Provider>
        <br></br>
        <button onClick={this.setDarkTheme}>Change Theme: {this.state.theme}</button>
      </div>
    )
  }
}


export default App;
