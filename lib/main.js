'use strict';

// External libs.
var path = require('path');
var ejs = require("ejs");

(function(exports) {

    var html_dirlisting = function(){

        this.directory_template_path = null;
        this.set_template_path = function(directory_template_path){
            this.directory_template_path = directory_template_path;
        }
        this.generate_directory_listing = function(items, done){
            ejs.renderFile(websupport.directory_template_path, {items:items}, function(err, html){
                done(err, html);
            });
        }
    };

    var t = new html_dirlisting();

    t.set_template_path(path.resolve(__dirname+"/../template/")+"/directory.ejs");

    return t;

}(typeof exports === 'object' && exports || this));