const gulp = require('gulp')
const ejs = require("gulp-ejs")
const rename = require("gulp-rename")
const connect = require("gulp-connect")

function html(done) {
    gulp.src("./src/html/templates/*.ejs")
    .pipe(ejs())
    .pipe(rename(function(path) {
        path.extname = ".html"
    }))
    .pipe(gulp.dest("./dist"))
    .pipe(connect.reload())
    done()
}

function watchHtml(params) {
    gulp.watch("./src/html/**/*.ejs", { ignoreInitial: false}, html)
}
//////////////////////////
function csstask(done) {

    const postcss = require('gulp-postcss')
  
    gulp.src('src/tailwind/*.css')
      // ...
      .pipe(postcss([
        // ...
        require('tailwindcss'),
        require('autoprefixer'),
        // ...
      ]))
      // ...
      .pipe(gulp.dest('./dist'))
      .pipe(connect.reload())
      done()
  }
/////////////////////////
function watchCss() {
    gulp.watch("./src/tailwind/**/*.css", { ignoreInitial: false}, csstask)
}


gulp.task("dev", function(done){
    watchHtml();
    watchCss();
    connect.server({
        livereload: true,
        root: "dist"
    })
    done();
})