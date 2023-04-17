'use strict';

/**
 * retreat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::retreat.retreat');
