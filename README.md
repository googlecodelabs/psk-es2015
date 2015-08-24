![](https://cloud.githubusercontent.com/assets/110953/7877439/6a69d03e-0590-11e5-9fac-c614246606de.png)
# Build a Google Drive Client using Polymer Starter Kit and ES2015

> A step by step codelab showing how to build a Google Drive client using Polymer Starter Kit (PSK) and ES2015.

This codelab is based on [Polymer Starter Kit v1.0.3](https://github.com/PolymerElements/polymer-starter-kit/releases/tag/v1.0.3).

## Download and setup Polymer Starter Kit

Polymer Starter Kit (PSK) offers a starting point for building your Polymer 1.0
applications. It gives you an already setup empty web applications with a build
pipeline that includes useful common dependencies and best practices.

- Download [Polymer Starter Kit v1.0.3](https://github.com/PolymerElements/polymer-starter-kit/releases/tag/v1.0.3).
  Get the full version, not the 'light' version.
- Run `npm install -g gulp bower && npm install && bower install` to install all dependencies.

## Add ES2015 support to PSK

During this codelab we'll use ES2015 syntax such as classes and arrow functions.
For ES2015 code to work in older browser we need to transpile it to ES5 code
using [Babel](https://babeljs.io/). Since PSK 1.0.3 does not come with an ES2015
to ES5 transpile step in its build pipeline so we'll need to add this.

- Install the gulp Babel, Sourcemap and Crisper plugins: `npm install --save-dev gulp-babel gulp-sourcemaps gulp-crisper`
- Add the following gulp task in the `gulpfile.js` file:

```javascript
// Transpile all ES2015 JS files to ES5.
gulp.task('es2015toEs5', function () {
  return gulp.src(['app/{elements,scripts}/**/*.{js,html}'])
    .pipe($.sourcemaps.init())
    .pipe($.if('*.html', $.crisper())) // Extract JS from .html files
    .pipe($.if('*.js', $.babel()))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('.tmp/'))
    .pipe(gulp.dest('dist/'))
});
```

This task will transpile all JS files and inline JS content and also generate sourcemaps.

- Make sure this task is triggered by common build tasks:
In the gulp `serve` task, make sure `es2015toEs5` is triggered on HTML and JS files changes:
```javascript
gulp.task('serve', ['styles', 'elements', 'images'], function () {

  ...

  gulp.watch(['app/**/*.html'], ['es2015toEs5', reload]);
  gulp.watch(['app/styles/**/*.css'], ['styles', reload]);
  gulp.watch(['app/elements/**/*.css'], ['elements', reload]);
  gulp.watch(['app/{scripts,elements}/**/*.js'], ['jshint', 'es2015toEs5']);
  gulp.watch(['app/images/**/*'], reload);
```
In the `default` task make sure `es2015toEs5` is triggered in parallel to `jshint`:
```javascript
gulp.task('default', ['clean'], function (cb) {
  ...

    ['jshint', 'es2015toEs5', 'images', 'fonts', 'html'],

  ...

});
```

- Enable ES6 support in JSHint. Create a `.jshintrc` file with the following content:

```json
{
  "esnext": true
}
```
