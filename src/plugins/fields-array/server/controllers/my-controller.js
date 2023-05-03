'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('fields-array')
      .service('myService')
      .getWelcomeMessage();
  },
});
