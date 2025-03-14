'use strict';

/**
 * video-feed service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::video-feed.video-feed');
