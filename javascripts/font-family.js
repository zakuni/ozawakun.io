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
/* unknown exports provided */
/* all exports used */
/*!************************************************!*\
  !*** ./source/javascripts/font-family.js.cjsx ***!
  \************************************************/
/***/ (function(module, exports) {

eval("var Letter, Period, ScrambleMixin, ScrambleTitle, Space, fonts, getRandomFont, getRandomInt;\n\nfonts = [\"Dotum\", \"arial black\", \"Century Gothic\", \"Gulim\", \"Impact\", \"Tahoma\", \"fantasy\", \"cursive\", \"Comic Sans MS\"];\n\ngetRandomFont = function() {\n  return fonts[Math.floor(Math.random() * fonts.length)];\n};\n\ngetRandomInt = function(min, max) {\n  return Math.floor(Math.random() * (max - min)) + min;\n};\n\nScrambleMixin = {\n  getInitialState: function() {\n    return {\n      fontFamily: \"\"\n    };\n  },\n  toDefaultFont: function() {\n    return this.setState({\n      style: {}\n    });\n  },\n  toRandomFont: function() {\n    var randomStyle;\n    randomStyle = {\n      fontFamily: getRandomFont(),\n      display: 'inline-block',\n      transform: 'rotateY(180deg)',\n      WebkitTransform: 'rotateY(180deg)',\n      msTransform: 'rotateY(180deg)',\n      MozTransform: 'rotateY(180deg)',\n      OTransform: 'rotateY(180deg)'\n    };\n    return this.setState({\n      style: randomStyle\n    });\n  },\n  scramble: function() {\n    var finalTimeOut, firstTimeOut, secondTimeOut;\n    firstTimeOut = getRandomInt(0, 300);\n    secondTimeOut = getRandomInt(firstTimeOut, firstTimeOut + 300);\n    finalTimeOut = getRandomInt(secondTimeOut, secondTimeOut + 15000);\n    this.toRandomFont();\n    setTimeout(this.toRandomFont, firstTimeOut);\n    setTimeout(this.toDefaultFont, secondTimeOut);\n    return setTimeout(this.scramble, finalTimeOut);\n  },\n  componentDidMount: function() {\n    return this.scramble();\n  }\n};\n\nLetter = React.createClass({\n  mixins: [ScrambleMixin],\n  render: function() {\n    return React.createElement(\"span\", {\"style\": (this.state.style)},\n      (this.props.character)\n    );\n  }\n});\n\nSpace = React.createClass({\n  mixins: [ScrambleMixin],\n  render: function() {\n    return React.createElement(\"span\", {\"className\": \"space\", \"style\": (this.state.style)}, \" \");\n  }\n});\n\nPeriod = React.createClass({\n  mixins: [ScrambleMixin],\n  render: function() {\n    return React.createElement(\"span\", {\"className\": \"period\", \"style\": (this.state.style)}, \".\");\n  }\n});\n\nScrambleTitle = React.createClass({\n  render: function() {\n    return React.createElement(\"h1\", {\"className\": \"scrambleTitle uk-container-center uk-heading-large\"},\n      React.createElement(Letter, {\"character\": \"o\"}),\n      React.createElement(Letter, {\"character\": \"z\"}),\n      React.createElement(Letter, {\"character\": \"a\"}),\n      React.createElement(Letter, {\"character\": \"w\"}),\n      React.createElement(Letter, {\"character\": \"a\"}),\n      React.createElement(Space, null),\n      React.createElement(Letter, {\"character\": \"k\"}),\n      React.createElement(Letter, {\"character\": \"u\"}),\n      React.createElement(Letter, {\"character\": \"n\"}),\n      React.createElement(Period, null),\n      React.createElement(Letter, {\"character\": \"i\"}),\n      React.createElement(Letter, {\"character\": \"o\"})\n    );\n  }\n});\n\n$(function() {\n  return React.render(React.createElement(ScrambleTitle, null), document.getElementById('title'));\n});\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NvdXJjZS9qYXZhc2NyaXB0cy9mb250LWZhbWlseS5qcy5janN4PzYwZGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIExldHRlciwgUGVyaW9kLCBTY3JhbWJsZU1peGluLCBTY3JhbWJsZVRpdGxlLCBTcGFjZSwgZm9udHMsIGdldFJhbmRvbUZvbnQsIGdldFJhbmRvbUludDtcblxuZm9udHMgPSBbXCJEb3R1bVwiLCBcImFyaWFsIGJsYWNrXCIsIFwiQ2VudHVyeSBHb3RoaWNcIiwgXCJHdWxpbVwiLCBcIkltcGFjdFwiLCBcIlRhaG9tYVwiLCBcImZhbnRhc3lcIiwgXCJjdXJzaXZlXCIsIFwiQ29taWMgU2FucyBNU1wiXTtcblxuZ2V0UmFuZG9tRm9udCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gZm9udHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZm9udHMubGVuZ3RoKV07XG59O1xuXG5nZXRSYW5kb21JbnQgPSBmdW5jdGlvbihtaW4sIG1heCkge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xufTtcblxuU2NyYW1ibGVNaXhpbiA9IHtcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZm9udEZhbWlseTogXCJcIlxuICAgIH07XG4gIH0sXG4gIHRvRGVmYXVsdEZvbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0eWxlOiB7fVxuICAgIH0pO1xuICB9LFxuICB0b1JhbmRvbUZvbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByYW5kb21TdHlsZTtcbiAgICByYW5kb21TdHlsZSA9IHtcbiAgICAgIGZvbnRGYW1pbHk6IGdldFJhbmRvbUZvbnQoKSxcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlWSgxODBkZWcpJyxcbiAgICAgIFdlYmtpdFRyYW5zZm9ybTogJ3JvdGF0ZVkoMTgwZGVnKScsXG4gICAgICBtc1RyYW5zZm9ybTogJ3JvdGF0ZVkoMTgwZGVnKScsXG4gICAgICBNb3pUcmFuc2Zvcm06ICdyb3RhdGVZKDE4MGRlZyknLFxuICAgICAgT1RyYW5zZm9ybTogJ3JvdGF0ZVkoMTgwZGVnKSdcbiAgICB9O1xuICAgIHJldHVybiB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0eWxlOiByYW5kb21TdHlsZVxuICAgIH0pO1xuICB9LFxuICBzY3JhbWJsZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZpbmFsVGltZU91dCwgZmlyc3RUaW1lT3V0LCBzZWNvbmRUaW1lT3V0O1xuICAgIGZpcnN0VGltZU91dCA9IGdldFJhbmRvbUludCgwLCAzMDApO1xuICAgIHNlY29uZFRpbWVPdXQgPSBnZXRSYW5kb21JbnQoZmlyc3RUaW1lT3V0LCBmaXJzdFRpbWVPdXQgKyAzMDApO1xuICAgIGZpbmFsVGltZU91dCA9IGdldFJhbmRvbUludChzZWNvbmRUaW1lT3V0LCBzZWNvbmRUaW1lT3V0ICsgMTUwMDApO1xuICAgIHRoaXMudG9SYW5kb21Gb250KCk7XG4gICAgc2V0VGltZW91dCh0aGlzLnRvUmFuZG9tRm9udCwgZmlyc3RUaW1lT3V0KTtcbiAgICBzZXRUaW1lb3V0KHRoaXMudG9EZWZhdWx0Rm9udCwgc2Vjb25kVGltZU91dCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQodGhpcy5zY3JhbWJsZSwgZmluYWxUaW1lT3V0KTtcbiAgfSxcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNjcmFtYmxlKCk7XG4gIH1cbn07XG5cbkxldHRlciA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgbWl4aW5zOiBbU2NyYW1ibGVNaXhpbl0sXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcInN0eWxlXCI6ICh0aGlzLnN0YXRlLnN0eWxlKX0sXG4gICAgICAodGhpcy5wcm9wcy5jaGFyYWN0ZXIpXG4gICAgKTtcbiAgfVxufSk7XG5cblNwYWNlID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFtTY3JhbWJsZU1peGluXSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1wiY2xhc3NOYW1lXCI6IFwic3BhY2VcIiwgXCJzdHlsZVwiOiAodGhpcy5zdGF0ZS5zdHlsZSl9LCBcIsKgXCIpO1xuICB9XG59KTtcblxuUGVyaW9kID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICBtaXhpbnM6IFtTY3JhbWJsZU1peGluXSxcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1wiY2xhc3NOYW1lXCI6IFwicGVyaW9kXCIsIFwic3R5bGVcIjogKHRoaXMuc3RhdGUuc3R5bGUpfSwgXCIuXCIpO1xuICB9XG59KTtcblxuU2NyYW1ibGVUaXRsZSA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcbiAgcmVuZGVyOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIHtcImNsYXNzTmFtZVwiOiBcInNjcmFtYmxlVGl0bGUgdWstY29udGFpbmVyLWNlbnRlciB1ay1oZWFkaW5nLWxhcmdlXCJ9LFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMZXR0ZXIsIHtcImNoYXJhY3RlclwiOiBcIm9cIn0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMZXR0ZXIsIHtcImNoYXJhY3RlclwiOiBcInpcIn0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMZXR0ZXIsIHtcImNoYXJhY3RlclwiOiBcImFcIn0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMZXR0ZXIsIHtcImNoYXJhY3RlclwiOiBcIndcIn0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChMZXR0ZXIsIHtcImNoYXJhY3RlclwiOiBcImFcIn0pLFxuICAgICAgUmVhY3QuY3JlYXRlRWxlbWVudChTcGFjZSwgbnVsbCksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExldHRlciwge1wiY2hhcmFjdGVyXCI6IFwia1wifSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExldHRlciwge1wiY2hhcmFjdGVyXCI6IFwidVwifSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExldHRlciwge1wiY2hhcmFjdGVyXCI6IFwiblwifSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KFBlcmlvZCwgbnVsbCksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExldHRlciwge1wiY2hhcmFjdGVyXCI6IFwiaVwifSksXG4gICAgICBSZWFjdC5jcmVhdGVFbGVtZW50KExldHRlciwge1wiY2hhcmFjdGVyXCI6IFwib1wifSlcbiAgICApO1xuICB9XG59KTtcblxuJChmdW5jdGlvbigpIHtcbiAgcmV0dXJuIFJlYWN0LnJlbmRlcihSZWFjdC5jcmVhdGVFbGVtZW50KFNjcmFtYmxlVGl0bGUsIG51bGwpLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGl0bGUnKSk7XG59KTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc291cmNlL2phdmFzY3JpcHRzL2ZvbnQtZmFtaWx5LmpzLmNqc3hcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);