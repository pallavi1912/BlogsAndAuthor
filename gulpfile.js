'use strict';
/*require plugin*/
var gulp=require('gulp'),
    gulpbrowserify=require('gulp-browserify'),
    concat=require('gulp-concat'),
    gulpIf=require('gulp-if'),
    minify=require('gulp-minify-css'),
    ngAnnotate=require('gulp-ng-annotate'),
    rename=require('gulp-rename'),
    sass=require('gulp-sass'),
    shell=require('gulp-shell'),
    uglify=require('gulp-uglify'),
    stringify=require('stringify'),
    notify=require('gulp-notify'),
    /**************** Paths for files ******************/
    paths=require('./gulp.config.js');
    /***************** Gulp Error Handling **************/
    var onError = function(err){
        notify.onError({
            title: "Gulp",
            subtitle: "Failure!",
            message: "Error: <%=error.message %>"
        })(err);
        this.emit('end');
    };
    /********************* Task for compiling app sass *****************/
   gulp.task('sass',function(){
    var config ={};
    return gulp.src(paths.sass.src)
          .pipe(sass(config))
          .pipe(minify())
          .pipe(rename({
            suffix:'.min'
          }))
          .pipe(gulp.dest(paths.outputClientDir + paths.sass.dest))
          .pipe(notify({
             message:'Sass Task completed'
          }));
   });
   /***************** Task for compiling library css *********/
   gulp.task('vendorCss', function(){
    return gulp.src(paths.vendorCss.src)
    .pipe(minify())
    .pipe(concat(paths.vendorCss.output))
    .pipe(gulp.dest(paths.outputClientDir + paths.vendorCss.dest));
   });
   /***************** Task for compiling js ***************/
   gulp.task('js',function(){
    return gulp.src(paths.js.src,{
      read: false
    })
    .pipe(ngAnnotate())
     .pipe(gulpbrowserify({
            transform: stringify({
                extensions: ['.html', '.tpl'],
                minify: true
            })
        }))
        .pipe(gulpIf(paths.env !== 'development', uglify()))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(paths.outputClientDir + paths.js.dest))
        .pipe(notify({
            message: 'JS Task Completed'
        }));
   })
   /***************** Task for copy Index.html ************/
   gulp.task('copyIndex' ,function(){
    return gulp.src(paths.indexHtml.src)
       .pipe(gulp.dest(paths.outputClientDir))
   });
   /******************* Task for vendorJS ***********/
   gulp.task('vendorJS',function(){
    return gulp.src(paths.vendorJs.src)
          .pipe(uglify())
          .pipe(concat(paths.vendorJs.output))
          .pipe(gulp.dest(paths.outputClientDir + paths.vendorJs.dest));

   })
   /*********** Task for watching ***********/
   gulp.task('watch',function(){
    gulp.watch(paths.sass.watch, ['sass']);
    gulp.watch(paths.indexHtml.watch, ['copyIndex']);
    gulp.watch([paths.js.watch, paths.template.watch], ['js']);  
   });
   /********************** Task for develpoment *******************/
   gulp.task('build',['vendorJS','vendorCss','js','copyIndex','sass']);
   gulp.task('default',['build','watch']);

   