const routes = [
  {
    expression: '/',
    args: {
      signal: require('./src/signals/pages/main')
    }
  }
];

module.exports = {
  /**
   * @param {Catbee} cat
   */
  register (cat) {
    routes.forEach((route) => cat.registerRoute(route));
  }
};
