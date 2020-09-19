import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import UserContext from './user-context';
import NavigationRouter from './navigation/navigation';

ReactDOM.render(
  <React.StrictMode>
    <UserContext>

      <BrowserRouter>
        <NavigationRouter />
      </BrowserRouter>
      
    </UserContext>
  </React.StrictMode>,
  document.getElementById('root')
);


