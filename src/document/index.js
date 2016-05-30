class Document {
  constructor () {
    this.template = require('./template.hbs');
  }
}

module.exports = {
  constructor: Document,
  children: [
    {
      name: 'head',
      component: require('../head')
    }
  ]
};
