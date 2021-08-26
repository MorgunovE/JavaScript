// 9
const {src, dest, series, watch} = require('gulp') //24 and 28-1
const sass = require('gulp-sass')(require('sass'))
const csso = require('gulp-csso')
const include = require('gulp-file-include')
const del = require('del')
const htmlmin = require('gulp-htmlmin')
// 17
const concat = require('gulp-concat')
const autoprefixer = require('gulp-autoprefixer')
const sync = require("browser-sync").create() //28-2

function html() {
  return src('src/**.html')
    .pipe(include({
      prefix: '@@'
    }))
    .pipe(htmlmin({
      collapseWhitespace: true
    }))//26
    .pipe(dest('dist')) //13
}

// 15
function scss() {
  return src('src/scss/**.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions']
    }))
    .pipe(csso())
    .pipe(concat('index.css'))
    .pipe(dest('dist'))
}

// 22
function clear() {
  return del('dist')
}

// 28
function serve() {
  sync.init({
    server: './dist'
  })
  watch('src/**.html', series(html)).on('change', sync.reload)
  watch('src/scss/**.scss', series(scss)).on('change', sync.reload)
}

// 13-1
// exports.html = html
// 15-1
// exports.scss = scss
// 24-1
exports.build = series(clear, scss, html)
// 28-3
exports.serve = series(clear, scss, html, serve)
// 22-1
// exports.clear = clear