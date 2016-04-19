var releases = require('../data/releases.json'),
    templates = require('./modules/templates'),
    _ = require('lodash');


var el = document.getElementById('main');


var routes = (function() {
    return {
	index: function() {
	    
	    var html = templates.releases(releases);
	    el.innerHTML = html;
	},

	artists: function(artist) {
	    el.innerHTML = artist;
	},
	releases: function(release) {
	    release = _.find(releases, function(e) {
		return _.kebabCase(e.title) === release;
	    })
	    el.innerHTML = templates.release(release);
	},
	_404: function() {
	    el.innerHTML = "404";
	}
    };
}());



var matchRoute = function() {
    var hash = document.location.hash;
    if(hash === "") {
	routes.index();
	return;
    }
    
    match = hash.match(/#!\/([^\/]+)\/([^\/]+)/i);
    
    if(!match) {
	routes._404();
	return;
    }
    match.shift(); //Drop first element;
    var route = match.shift();
    
    if(!routes.hasOwnProperty(route)) {
	routes._404();
	return;
    }
    routes[route].apply(null, match);
    return;
    
};

window.onhashchange = matchRoute;

(function _init_() {
    matchRoute();
    
}());

