const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

//Logs Message
gulp.task('message', async function(){
  return console.log('Gulp is running....');
});

// Optimize Images
gulp.task('imageMin', () =>
	gulp.src('src/images/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/images'))
);