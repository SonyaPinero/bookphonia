'use strict';

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import routes from './components/routes';
import services     from './svc';

const server = express();

server.use('/svc', services);

server.use(express.static('./build/public'));

server.get('*', (req, res) => {
  match({ routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      const appHtml = renderToString(<RouterContext {...props}/>)
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `<!DOCTYPE html public="storage">
    <html>
    <head>
    <meta charset=utf-8/>
    <title>Test</title>
    </head>
    <body>
    <div id=app>${appHtml}</div>
    <script src="/app.js"></script>
    </body>
    </html>
   `
}

server.listen(8080, () => console.log('Listening on port 8080'));