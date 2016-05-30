const PATTERN = '[folder]__[local]-[hash:base64:5]';

require('handlebars');
require('css-modules-require-hook')({ generateScopedName: PATTERN });

const express = require('express');
const compression = require('compression');
const path = require('path');
const catbee = require('catbee');
const components = require('catbee-web-components');
const routes = require('./routes');
const logger = require('catbee-logger');

const app = express();
const cat = catbee.create();

components.register(cat.locator, require('./src/document'));
routes.register(cat);
logger.register(cat.locator);

app.use(compression());
app.use('/static', express.static(path.join(__dirname, './static')));
app.use('/public', express.static(path.join(__dirname, './build')));
app.use(cat.getMiddleware());

app.listen(process.env.PORT);
