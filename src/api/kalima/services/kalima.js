'use strict';

/**
 * kalima service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::kalima.kalima');
