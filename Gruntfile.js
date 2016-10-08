module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options:{},
            dist: {
                files: {
                    'js/index.min.js': 'js/index.js'
                }
            }
        },
        cssmin: {
            options: {
                keepSpecialComments: 0
            },
            compress: {
                files: {
                    'css/main.css': [
                        'css/reset.css',
                        'css/index.css'       
                    ]
                }
            }
        },
        jshint: {
            files: ['js/index.js'],

            options: {
                latedef:true,
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('default', ['uglify', 'cssmin', 'jshint']);
};