module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        exec: {
            pdf: {
                cmd: 'xsltfopdf video_games_pdf.xsl video_games_support.xml video_games.pdf'
            },
            svg: {
                cmd: 'xslt video_games_svg.xsl video_games_support.xml video_games.svg'
            },
            txt: {
                cmd: 'xslt video_games_txt.xsl video_games_support.xml video_games.txt'
            },
            html: {
                cmd: 'xslt video_games_html.xsl video_games_support.xml video_games.html'
            },
            support: {
                cmd: 'xslt video_games_support.xsl video_games.xml video_games_support.xml'
            }
        },
        watch: {
            pdf: {
                files: ['**/video_games_pdf.xsl'],
                tasks: ['exec:pdf'],
                options: {
                    spawn: false,
                    livereload: false
                },
            },
            svg: {
                files: ['**/video_games_svg.xsl'],
                tasks: ['exec:svg'],
                options: {
                    spawn: false,
                    livereload: false
                },
            },
            txt: {
                files: ['**/video_games_txt.xsl'],
                tasks: ['exec:txt'],
                options: {
                    spawn: false,
                    livereload: false
                },
            },
            html: {
                files: ['**/video_games_html.xsl'],
                tasks: ['exec:html'],
                options: {
                    spawn: false,
                    livereload: false
                },
            },
            support: {
                files: ['**/video_games_support.xsl'],
                tasks: ['exec:support'],
                options: {
                    spawn: false,
                    livereload: false
                },
            },
        },
    });
  
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-exec');
    // Default task(s).
    grunt.registerTask('default', ['watch']);
  
  };