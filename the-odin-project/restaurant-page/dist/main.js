/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderAbout; });\n// Render an about page\n// The export style here is a default export, but of a single function\nvar DEFAULT_NAME = 'Lorem ipsum';\nvar DEFAULT_MESSAGE = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et netus et malesuada fames ac turpis egestas. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Morbi enim nunc faucibus a pellentesque sit. Non curabitur gravida arcu ac tortor dignissim convallis aenean. Feugiat vivamus at augue eget arcu dictum varius duis. Enim facilisis gravida neque convallis a cras semper auctor. Tortor at auctor urna nunc id cursus. Lorem ipsum dolor sit amet consectetur adipiscing elit. Sit amet cursus sit amet. Sagittis orci a scelerisque purus semper eget. Sed arcu non odio euismod lacinia at quis. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Et leo duis ut diam quam nulla.';\nfunction renderAbout(container, name, message) {\n  var aboutDiv = document.createElement('div');\n  aboutDiv.classList.add('about-div');\n  var nameDiv = document.createElement('div');\n  nameDiv.classList.add('name-div');\n  nameDiv.textContent = \"About \".concat(name !== null && name !== void 0 ? name : DEFAULT_NAME, \":\");\n  aboutDiv.appendChild(nameDiv);\n  var messageParagraph = document.createElement('p');\n  messageParagraph.classList.add('message');\n  messageParagraph.textContent = \"\".concat(message !== null && message !== void 0 ? message : DEFAULT_MESSAGE);\n  aboutDiv.appendChild(messageParagraph);\n  container.appendChild(aboutDiv);\n}\n\n//# sourceURL=webpack:///./src/about.js?");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return renderContact; });\n// Render a contact page\n// Same style as about\nfunction renderContact(container) {\n  var contactInfo = document.createElement('div');\n  contactInfo.classList.add('contact-info');\n  contactInfo.textContent = 'Sorry buddy, we closed last week :c';\n  container.appendChild(contactInfo);\n}\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Rendering for a header\n// I'm trying some different styles of exports for the modules\n// This one does one default export of an object containing various methods\n// It's nice to import, forces you to import the whole package (aka no lonely functions)\n// But this is also far less explicit and double namespaces things, which isn't ideal\n/* harmony default export */ __webpack_exports__[\"default\"] = ((function Header() {\n  var content = document.getElementById('content');\n  var header = document.createElement('header');\n  var company = document.createElement('div');\n  company.id = 'company';\n  var companyLogo = document.createElement('img');\n  companyLogo.classList.add('company-logo');\n  var companyName = document.createElement('span');\n  companyName.classList.add('company-name');\n  companyName.textContent = 'Impressive Wraps';\n  company.appendChild(companyLogo);\n  company.appendChild(companyName);\n  header.appendChild(company);\n  content.appendChild(header);\n  var nav = document.createElement('nav');\n  header.appendChild(nav);\n\n  var addToNav = function addToNav(name, callback) {\n    if (nav.children.length > 4 || name.length > 12) {\n      console.warning('too many items in nav, new entry was ignored');\n    } else {\n      var newEntry = document.createElement('div');\n      newEntry.textContent = name;\n      newEntry.addEventListener('click', callback);\n      newEntry.classList.add('nav-item');\n      nav.appendChild(newEntry);\n    }\n  };\n\n  var hide = function hide() {\n    header.style.display = 'none';\n  };\n\n  var show = function show() {\n    header.style.display = 'initial';\n  };\n\n  var getCompanyLogo = function getCompanyLogo() {\n    return companyLogo;\n  };\n\n  return {\n    hide: hide,\n    addToNav: addToNav,\n    show: show,\n    getCompanyLogo: getCompanyLogo\n  };\n})());\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n// Generate all of a restaurant page dynamically using javascript\n// This is also used to practice modules, imports and exports with different styles\n// so don't get confused about the inconsistent import style\n\n\n\n\nvar content = document.getElementById('content');\nvar tabContent = document.createElement('div');\ntabContent.classList.add('tab-content');\ncontent.appendChild(tabContent);\n\nfunction reRender(renderCallBack) {\n  tabContent.innerHTML = '';\n\n  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n    args[_key - 1] = arguments[_key];\n  }\n\n  renderCallBack.apply(void 0, args);\n}\n\n_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addToNav('Menu', function () {\n  return reRender(_menu__WEBPACK_IMPORTED_MODULE_1__[\"renderMenu\"], tabContent);\n});\n_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addToNav('About', function () {\n  return reRender(_about__WEBPACK_IMPORTED_MODULE_2__[\"default\"], tabContent, 'Impressive Wraps');\n});\n_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addToNav('Contact', function () {\n  return reRender(_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"], tabContent);\n});\n_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getCompanyLogo().addEventListener('click', function () {\n  return reRender(function () {});\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: renderMenu, setMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderMenu\", function() { return renderMenu; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setMenu\", function() { return setMenu; });\n// Render a restaurant menu\n// The style for this is exporting named functions\nvar menu = {\n  Breakfast: ['Chicken Teriyaki Wraps', 'Mexico Wraps', 'Fish Wraps', 'Coffee in a Wrap', 'Veggie Wraps'],\n  Lunch: ['Ham Wrap', 'Beef Wrap', 'Wine Wrap', 'Beer Wrap', 'Grilled Wrap', 'Wrap without Bread'],\n  Dinner: ['The Best Wrap', 'A Slightly Mouldy Wrap', \"You Definitely Shouldn't Eat This One\"]\n};\nfunction renderMenu(container) {\n  var main = document.createElement('div');\n  container.appendChild(main);\n  main.classList.add('menu-main');\n  Object.keys(menu).forEach(function (category) {\n    var categoryDiv = document.createElement('div');\n    categoryDiv.classList.add('category');\n    var categoryTitle = document.createElement('h3');\n    categoryTitle.classList.add('category-title');\n    categoryTitle.textContent = category;\n    categoryDiv.appendChild(categoryTitle);\n    menu[category].forEach(function (menuItem) {\n      var menuItemDiv = document.createElement('div');\n      menuItemDiv.classList.add('menu-item');\n      menuItemDiv.textContent = menuItem;\n      categoryDiv.appendChild(menuItemDiv);\n    });\n    main.appendChild(categoryDiv);\n  });\n}\nfunction setMenu(newMenu) {\n  menu = newMenu !== null && newMenu !== void 0 ? newMenu : menu;\n}\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });