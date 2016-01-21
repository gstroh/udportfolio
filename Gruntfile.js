module.exports = function(grunt) {

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 720,
            suffix: '_2x',
            quality: 50
          },{
            width: 360,
            suffix: '_1x',
            quality: 30
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: 'images_src/',
          dest: 'images/'
        }]
      }
    },

    imagemin: {                          // Task
      dynamic: {                         // Another target
        files: [{
         expand: true,                  // Enable dynamic expansion
         cwd: 'images/',                   // Src matches are relative to this path
         src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
         dest: 'images_min/'                  // Destination path prefix
        }]
      }
    }

  });

  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['responsive_images','imagemin']);

};
