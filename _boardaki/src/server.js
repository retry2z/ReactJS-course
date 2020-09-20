import App from './App';
import React from 'react';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import render from '../server/render';
import { determineUserLang } from "./common/i18n";

const server = express();

server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR));


server.get('/*', (req, res) => {
  const context = {};
  const lang = determineUserLang(req.acceptsLanguages(), req.path);

  if (req.path.trim() === "/") {
    res.redirect(`/${lang}`);
  }

  const markup = renderToString(
    <StaticRouter context={context} location={req.url} basename={`/${lang}`}>
      <App lang={lang} />
    </StaticRouter>
  );

  if (context.url) {
    res.redirect(context.url);
  } else {
    const html = render(markup);
    res.status(200).send(html);
  }
});

export default server;
