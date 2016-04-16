var elixir = require('laravel-elixir');

require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.copy('node_modules/materialize-css/font', 'public/font');
    mix.sass('app.scss');
    mix.browserify('app.js');
    mix.scripts(['libs/materialize.min.js', 'animations.js'], 'public/js/animations.js');
});
