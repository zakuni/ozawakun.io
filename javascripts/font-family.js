/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var Letter, Period, ScrambleMixin, ScrambleTitle, Space, fonts, getRandomFont, getRandomInt;

fonts = ["Dotum", "arial black", "Century Gothic", "Gulim", "Impact", "Tahoma", "fantasy", "cursive", "Comic Sans MS"];

getRandomFont = function() {
  return fonts[Math.floor(Math.random() * fonts.length)];
};

getRandomInt = function(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

ScrambleMixin = {
  getInitialState: function() {
    return {
      fontFamily: ""
    };
  },
  toDefaultFont: function() {
    return this.setState({
      style: {}
    });
  },
  toRandomFont: function() {
    var randomStyle;
    randomStyle = {
      fontFamily: getRandomFont(),
      display: 'inline-block',
      transform: 'rotateY(180deg)',
      WebkitTransform: 'rotateY(180deg)',
      msTransform: 'rotateY(180deg)',
      MozTransform: 'rotateY(180deg)',
      OTransform: 'rotateY(180deg)'
    };
    return this.setState({
      style: randomStyle
    });
  },
  scramble: function() {
    var finalTimeOut, firstTimeOut, secondTimeOut;
    firstTimeOut = getRandomInt(0, 300);
    secondTimeOut = getRandomInt(firstTimeOut, firstTimeOut + 300);
    finalTimeOut = getRandomInt(secondTimeOut, secondTimeOut + 15000);
    this.toRandomFont();
    setTimeout(this.toRandomFont, firstTimeOut);
    setTimeout(this.toDefaultFont, secondTimeOut);
    return setTimeout(this.scramble, finalTimeOut);
  },
  componentDidMount: function() {
    return this.scramble();
  }
};

Letter = React.createClass({
  mixins: [ScrambleMixin],
  render: function() {
    return React.createElement("span", {"style": (this.state.style)},
      (this.props.character)
    );
  }
});

Space = React.createClass({
  mixins: [ScrambleMixin],
  render: function() {
    return React.createElement("span", {"className": "space", "style": (this.state.style)}, " ");
  }
});

Period = React.createClass({
  mixins: [ScrambleMixin],
  render: function() {
    return React.createElement("span", {"className": "period", "style": (this.state.style)}, ".");
  }
});

ScrambleTitle = React.createClass({
  render: function() {
    return React.createElement("h1", {"className": "scrambleTitle uk-container-center uk-heading-large"},
      React.createElement(Letter, {"character": "o"}),
      React.createElement(Letter, {"character": "z"}),
      React.createElement(Letter, {"character": "a"}),
      React.createElement(Letter, {"character": "w"}),
      React.createElement(Letter, {"character": "a"}),
      React.createElement(Space, null),
      React.createElement(Letter, {"character": "k"}),
      React.createElement(Letter, {"character": "u"}),
      React.createElement(Letter, {"character": "n"}),
      React.createElement(Period, null),
      React.createElement(Letter, {"character": "i"}),
      React.createElement(Letter, {"character": "o"})
    );
  }
});

$(function() {
  return React.render(React.createElement(ScrambleTitle, null), document.getElementById('title'));
});


/***/ })
/******/ ]);