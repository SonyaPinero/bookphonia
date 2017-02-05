'use strict';

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

const server = express();

server.use(express.static('./build/public'));

server.get('*', (req, res) => {
  match({location: req.url }, (err, redirect, props) => {
      res.send(renderPage())
  })
})

function renderPage() {
  return `<!DOCTYPE html public="storage">
    <html>
        <head>
            <meta charset=utf-8/>
            <title>Test</title>
        </head>
        <body>
            <div id=app>This is a test</div>
            <script src="/app.js"></script>
        </body>
    </html>
   `
}

server.listen(8080, () => console.log('Listening on port 8080'));