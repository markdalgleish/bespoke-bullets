[![Build Status](https://secure.travis-ci.org/markdalgleish/bespoke-bullets.png?branch=master)](https://travis-ci.org/markdalgleish/bespoke-bullets) [![Coverage Status](https://coveralls.io/repos/markdalgleish/bespoke-bullets/badge.png)](https://coveralls.io/r/markdalgleish/bespoke-bullets)

# bespoke-bullets

Bullet Lists for [Bespoke.js](https://github.com/markdalgleish/bespoke.js)

Style and animate bullet lists and their transitions with some simple CSS rules.

## Download

Download the [production version][min] or the [development version][max], or use a [package manager](#package-managers).

[min]: https://raw.github.com/markdalgleish/bespoke-bullets/master/dist/bespoke-bullets.min.js
[max]: https://raw.github.com/markdalgleish/bespoke-bullets/master/dist/bespoke-bullets.js

## Usage

This plugin is shipped in a [UMD format](https://github.com/umdjs/umd), meaning that it is available as a CommonJS/AMD module or browser global.

For example, when using CommonJS modules:

```js
var bespoke = require('bespoke'),
  bullets = require('bespoke-bullets');

bespoke.from('article', [
  bullets('li, .bullet')
]);
```

When using browser globals:

```js
bespoke.from('article', [
  bespoke.plugins.bullets('li, .bullet')
]);
```

As you may have noticed, you can provide a custom bullet selector. This allows you to easily configure which elements are treated as bullets.

### CSS

The following classes are available on your bullet elements, which allow you to style and animate them.

<table>
   <tr>
    <td><b>bespoke-bullet</b></td>
    <td>Every bullet element</td>
   </tr>
   <tr>
    <td><b>bespoke-bullet-active</b></td>
    <td>All active bullets</td>
   </tr>
   <tr>
    <td><b>bespoke-bullet-inactive</b></td>
    <td>All inactive bullets</td>
   </tr>
   <tr>
    <td><b>bespoke-bullet-current</b></td>
    <td>The current bullet</td>
   </tr>
</table>

### Data Atrributes

When no selector is provided, the default behaviour is to look for elements with `data-bespoke-bullet` attributes, for example:

```js
bespoke.from('article', [
  bullets()
]);
```

```html
<article>
  <section>
    <h1 data-bespoke-bullet>Slide Title</h1>
    <ul>
      <li data-bespoke-bullet>Bullet 1</li>
      <li data-bespoke-bullet>Bullet 2</li>
      <li data-bespoke-bullet>Bullet 3</li>
    </ul>
  </section>
</article>
```

### Events

The functionality provided by the plugin can be deactivated and reactivated using bespoke.js events, for example:

```js
deck.fire('bullets.disable');
```

That makes navigating on the presentation work as if the plugin had not been loaded. To activate it again:

```js
deck.fire('bullets.enable');
```


## Package managers

### npm

```bash
$ npm install bespoke-bullets
```

### Bower

```bash
$ bower install bespoke-bullets
```

## Credits

This plugin was built with [generator-bespokeplugin](https://github.com/markdalgleish/generator-bespokeplugin).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
