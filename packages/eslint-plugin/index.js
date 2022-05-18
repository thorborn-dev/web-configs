module.exports = {
  configs: {
    // Core configs - When extending, one of these should go first
    core: require('./lib/config/core'),

    // Augmenting configs - When extending, these go after the core config
    browser: require('./lib/config/browser'),
    node: require('./lib/config/node'),

    // Prettier config - When extending, this should always go last
    prettier: require('./lib/config/prettier'),
  },
};
