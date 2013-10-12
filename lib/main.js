'use strict';

// External libs.
var path = require('path');
var ejs = require("ejs");

(function(exports) {

    function html_dirlisting (){
        this.template_path = null;
        this.resouces_path = null;
    };
    html_dirlisting.prototype.set_template_path = function(template_path){
        this.template_path = template_path;
    }
    html_dirlisting.prototype.set_resouces_path = function(resouces_path){
        this.resouces_path = resouces_path;
    }
    html_dirlisting.prototype.generate_directory_listing = function(items, done){
        ejs.renderFile(this.template_path, {items:items}, function(err, html){
            done(err, html);
        });
    }

    var t = new html_dirlisting();
    t.set_template_path(path.resolve(__dirname+"/../template/")+"/directory.ejs");
    t.set_resouces_path(path.resolve(__dirname+"/../shared/")+"/");

    exports.html_dirlisting = t;

}(typeof exports === 'object' && exports || this));