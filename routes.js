const routes = [

];

module.exports = {
  /**
   * @param {Catbee} cat
   */
  register (cat) {
    routes.forEach((route) => cat.registerRoute(route));
  }
};
