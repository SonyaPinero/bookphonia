'use strict';

import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';

const server = express();

server.use(express.static('./build/public'));

server.listen(8080, () => console.log('Listening on port 8080'));
