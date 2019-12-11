module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      exec: {
        svg: {
          cmd: 'xslt video_games_svg.xsl video_games_support.xml video_games.svg'
        }
      },
      watch: {
        svg: {
          files: ['**/video_games_svg.xsl'],
          tasks: ['exec:svg'],
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