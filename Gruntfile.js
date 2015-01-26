
'use strict';

module.exports = function (grunt) {
    // Project configuration
    grunt.initConfig({
	    pkg: grunt.file.readJSON('package.json'),
		
	    watch: {
            jsx: {
                files: ['react/**/*.jsx'],
                tasks: ['react', 'jshint:react', 'browserify']
            }
        },
		browserify: { 

            options: { 
                transform: [ require('grunt-react').browserify ] 
            }, 
            client: { 
                src: ['react/**/*.jsx'], 
                dest: 'scripts/app.built.js' 
            } 
        }, 
        // Task configuration
        jshint: {
            options: {
                jshintrc: true,
            },
            react: {
                src: ['react/**/*.js']
            }
        },
        react: {
            files: {
                expand: true,
                cwd: 'react/',
                src: ['**/*.jsx'],
                dest: 'react/',
                ext: '.js'
            }
        }
      
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-react');
	grunt.loadNpmTasks('grunt-browserify');
	
	grunt.registerTask('default', ['react', 'browserify']);	
	//grunt.registerTask('default', ['browserify']);	

};