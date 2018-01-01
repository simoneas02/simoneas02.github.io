# Simoneas02

> My personal website.

[![devDependencies Status](https://david-dm.org/simoneas02/simoneas02.github.io/dev-status.svg)](https://david-dm.org/simoneas02/simoneas02.github.io?type=dev)
[![Travis CI Status](https://travis-ci.org/simoneas02/simoneas02.github.io.svg?branch=dev)](https://travis-ci.org/simoneas02/simoneas02.github.io)

## Run the project local

**0 -** install the basic dependencies

- [NodeJS](https://nodejs.org/en/)
- [GulpJS](http://gulpjs.com/)
- [Bower](https://bower.io/)

**1 -** Clone the project and install the dependencies:

```sh
$ git clone https://github.com/simoneas02/simoneas02.github.io.git
$ cd simoneas02.github.io/
$ npm install
$ bower install
```
**2 -** Run the local server:

```sh
$ gulp build
$ gulp server
```

Go to: [localhost:8080](http://localhost:8080)

## Stack

- Task Runner: [Gulp](http://gulpjs.com/)
- HTML Template Engine: [Pug](https://pugjs.org/api/getting-started.html)
- CSS Preprocessor: [Stylus](http://stylus-lang.com/)
- JS Transpiler: [Babel](http://babeljs.io/)
- Package Manager: [Bower](https://bower.io/)
- Webcomponents: [Polymer](https://www.polymer-project.org/1.0/)
- Bundler: [Vulcanize](https://www.npmjs.com/package/gulp-vulcanize)

## Folders Structure

	.
	├── out/
	├── src/
	|   ├── assets/
	|   |   ├── img/
	|   |   ├── scripts/
	|   |   └── styles/
	|   ├── includes/
	|   |   ├──	custom-style.html
	|   |   └── head-metas.pug
	|   ├── layouts/
	|   |   └── gothic.pug
	|   └── index.pug
	├── .babelrc
	├──  bower.json
	├── .editorconfig
	├── .gitignore
	├── .travis.yml
	├── gulpfile.js
	├── package.json
	├── CONTRIBUTING.md
	├── LICENSE.md
	└── README.md

## Automatic Tasks

- `$ gulp build`: Compile, concat and minify all files.
- `$ gulp serve`: Watch the files to build and start a static server.
- `$ gulp stylint`: Validate Stylus.
- `$ gulp vulcanize`: Concatenate a set of Web Components into one file.
- `$ gulp deploy`: Deploy.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/simoneas02/simoneas02.github.io/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://github.com/simoneas02/simoneas02.github.io/blob/dev/CONTRIBUTING.md).

## License

[MIT License](https://github.com/simoneas02/simoneas02.github.io/blob/dev/LICENSE.md) © [Simone Amorim](https://simoneas02.github.io)
