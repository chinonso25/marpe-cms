'use strict';

/**
 * events-feed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::events-feed.events-feed');
