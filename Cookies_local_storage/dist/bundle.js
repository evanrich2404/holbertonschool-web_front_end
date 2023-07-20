/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const firstNameInput = document.getElementById('firstname');\nconst emailInput = document.getElementById('email');\n\nfunction setCookies() {\n  const firstName = firstNameInput.value;\n  const email = emailInput.value;\n\n  document.cookie = `firstname=${firstName}`;\n  document.cookie = `email=${email}`;\n}\n\nfunction showCookies() {\n  const cookies = document.cookie.split(';');\n\n  for (let i = 0; i < cookies.length; i++) {\n    const cookie = cookies[i].trim();\n    const [name, value] = cookie.split('=');\n\n    if (name === 'firstname' || name === 'email') {\n      const paragraph = document.createElement('p');\n      paragraph.textContent = `Cookies: ${name}=${value}`;\n      document.body.appendChild(paragraph);\n    }\n  }\n}\n\nconst loginBtn = document.getElementById('loginBtn');\nloginBtn.addEventListener('click', setCookies);\n\nconst showBtn = document.getElementById('showBtn');\nshowBtn.addEventListener('click', showCookies);\n\n\n//# sourceURL=webpack://Cookies_local_storage/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;