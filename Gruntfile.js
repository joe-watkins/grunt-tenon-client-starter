'use strict';

module.exports = function (grunt) {

  // Load grunt tasks automatically
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    watch: {
      html : {
        files : ["**/*.html"],
        tasks : ["tenon"]
      }
  	}, // watch

    tenon: {
      options: {
        key: 'you api key here',
        filter: [31, 54],
        level: 'AA'
      },
      all: {
        options: {
          saveOutputIn: 'allHtml.json',
          snippet: true,
          asyncLim: 2
        },
        src: ['index.html']
      }
    }

  }); // initConfig

  grunt.registerTask('default', ["watch"]);

};
