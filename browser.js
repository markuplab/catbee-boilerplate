const catbee = require('catbee');
const components = require('catbee-web-components');
const logger = require('catbee-logger');
const routes = require('./routes');

const cat = catbee.create();

components.register(cat.locator, require('./src/document'));
routes.register(cat);
logger.register(cat.locator);

cat.startWhenReady();
