var handlebars = require('handlebars/runtime'),
    _ = require('lodash');

handlebars.registerHelper('kebabCase', function(str) {
    return _.kebabCase(str);
});


module.exports = handlebars;
