'use strict';

/**
 * hosting-plan service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hosting-plan.hosting-plan');
