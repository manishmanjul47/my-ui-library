'use strict';

const fractal = (module.exports = require('@frctl/fractal').create());
const mandelbrot = require('@frctl/mandelbrot');

const hbs = require('@frctl/handlebars')({
  helpers: {
    eq: (a, b) => a === b
  }
});

fractal.components.engine(hbs); 
fractal.docs.engine(hbs);       


fractal.set('project.title', 'UI Component Library');
fractal.components.set('path', __dirname + '/components');
fractal.components.set('default.preview', '@preview');
fractal.docs.set('path', __dirname + '/docs');

fractal.web.set('server.port', 9002);
fractal.web.set('static.path', __dirname + '/public');


fractal.web.theme(
  mandelbrot({
    skin: {
      name: 'fuchsia',
      accent: '#C23582',
      complement: '#FFFFFF',
      links: '#C23582'
    },
    information: [
      {
        label: 'Version',
        value: require('./package.json').version
      },
      {
        label: 'Built on',
        value: new Date(),
        type: 'time',
        format: value => value.toLocaleDateString('en')
      }
    ]
  })
);
