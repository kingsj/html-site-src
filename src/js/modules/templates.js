var Handlebars = require("./helpers");
 exports["release"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<div>\n"
    + container.escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"title","hash":{},"data":data}) : helper)))
    + "\n</div>";
},"useData":true});
exports["releases"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "    <div class=\"box\">\n	<h2 class=\"artist-title\"><a href=\"/#!/releases/"
    + alias3((helpers.kebabCase || (depth0 && depth0.kebabCase) || alias2).call(alias1,(depth0 != null ? depth0.title : depth0),{"name":"kebabCase","hash":{},"data":data}))
    + "\" class=\"artist-title-style\">"
    + alias3(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</a></h2>\n	<div class=\"artist_cart\">Artist: <a href=\"/#!/artists/"
    + alias3(((helper = (helper = helpers.artist || (depth0 != null ? depth0.artist : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"artist","hash":{},"data":data}) : helper)))
    + "\" class=\"artist-display-style\">"
    + alias3(((helper = (helper = helpers.artist_display || (depth0 != null ? depth0.artist_display : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"artist_display","hash":{},"data":data}) : helper)))
    + "</a></div>\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.available : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "\n    </div>\n";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.price : depth0),{"name":"if","hash":{},"fn":container.program(3, data, 0),"inverse":container.program(5, data, 0),"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return "		<div class=\"add_to_cart\"><a href=\"javascript:;\">Add to Cart</a> £"
    + container.escapeExpression(((helper = (helper = helpers.price || (depth0 != null ? depth0.price : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"price","hash":{},"data":data}) : helper)))
    + "</div>\n";
},"5":function(container,depth0,helpers,partials,data) {
    return "		<div class=\"sold_out\"><strong>SOLD OUT</strong></div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return "	    <div class=\"sold_out\"><strong>SOLD OUT</strong></div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});