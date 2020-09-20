import App from './App';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import { hydrate } from 'react-dom';

import { determineUserLang } from "./common/i18n";

const lang = determineUserLang(navigator.languages || [], window.location.pathname);

hydrate(
  <BrowserRouter basename={`/${lang}`}>
    <App lang={lang} />
  </BrowserRouter>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept();
}
