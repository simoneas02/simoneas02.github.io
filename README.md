# Simoneas02

> My personal website.

## Run the project locally

**1 -** Clone the project and install the dependencies:

```sh
$ git clone https://github.com/simoneas02/simoneas02.github.io.git
$ cd simoneas02.github.io/
$ npm install
```
**2 -** Run the local server:

```sh
$ gulp server
```

Go to: [localhost:8080](http://localhost:8080/)

## Stack

- Task Runner: [Gulp](http://gulpjs.com/)
- HTML Template Engine: [Pug](https://pugjs.org/api/getting-started.html)
- CSS Preprocessor: [Stylus](http://stylus-lang.com/)
- JS Transpiler: [Babel](http://babeljs.io/)

## Folders Structure

	.
	├── out/
	├── src/
	|   ├── assets/
	|   |   ├── img/
	|   |   ├── scripts/
	|   |   └── styles/
	|   ├── includes/
	|   |   └── head-metas.pug
	|   ├── layouts/
	|   |   └── gothic.pug
	|   └── index.pug
	├── .babelrc
	├── .editorconfig
	├── .gitignore
	├── gulpfile.js
	├── gulpfile.js
	├── package.json
	├── CONTRIBUTING.md
	├── LICENSE.md
	└── README.md

## Automatic Tasks

- `$ gulp build`: Compile, concat and minify all files.
- `$ gulp serve`: Watch the files to build and start a static server.
- `$ gulp deploy`: Deploy for gh-pages.

## Versioning

To keep better organization of releases we follow the [Semantic Versioning 2.0.0](http://semver.org/) guidelines.

## Contributing

Find on our [issues](https://github.com/simoneas02/simoneas02.github.io/issues/) the next steps of the project ;)
<br>
Want to contribute? [Follow these recommendations](https://https://github.com/simoneas02/simoneas02.github.io/issues/blob/master/CONTRIBUTING.md).

## License

[MIT License](https://github.com/simoneas02/simoneas02.github.io/blob/master/license.md) © [Simone Amorim](https://simoneas02.github.io)
