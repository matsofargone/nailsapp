/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/contact.js":
/*!***********************************!*\
  !*** ./src/components/contact.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// contact me page

const loadContactPage = () => {
    const div = document.getElementById('content');
    const h1 = document.createElement('h1');
    h1.innerHTML = 'Contact Me'; 

    div.appendChild(h1);
}




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContactPage);

/***/ }),

/***/ "./src/components/loadPage.js":
/*!************************************!*\
  !*** ./src/components/loadPage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const initialLoad = () => {
    const div = document.getElementById('content');
    const h1 = document.createElement('h1');
    const img = new Image(400, 400);
    const p = document.createElement('p');
 
    img.src = './assets/nails.jpg';

    h1.innerHTML = 'Nails by Jenn';
    p.innerHTML = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam itaque distinctio consectetur vel molestias molestiae, mollitia impedit voluptatibus cum? Et magnam sunt reprehenderit. At magni perferendis voluptatibus esse veniam consequatur!';

    div.appendChild(h1);
    div.appendChild(img);
    div.appendChild(p);
    

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);

/***/ }),

/***/ "./src/components/services.js":
/*!************************************!*\
  !*** ./src/components/services.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// list services 


const loadServices = () => {
    const h1 = document.createElement('h1');

    h1.innerHTML = 'Services';

    const div = document.getElementById('content');

    div.appendChild(h1);
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadServices);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_loadPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/loadPage */ "./src/components/loadPage.js");
/* harmony import */ var _components_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/contact */ "./src/components/contact.js");
/* harmony import */ var _components_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/services */ "./src/components/services.js");




//select menu items
const homeTab = document.getElementById('Home');
const servicesTab = document.getElementById('services');
const contactTab = document.getElementById('contact');
const div = document.getElementById('content');

servicesTab.addEventListener('click', function(e){
    div.innerHTML = '';
    (0,_components_services__WEBPACK_IMPORTED_MODULE_2__["default"])();
});

homeTab.addEventListener('click', function(e){
    div.innerHTML = '';
    (0,_components_loadPage__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

contactTab.addEventListener('click', function(e){
    div.innerHTML = '';
    (0,_components_contact__WEBPACK_IMPORTED_MODULE_1__["default"])();
});


//add eventlisteners to buttons


(0,_components_loadPage__WEBPACK_IMPORTED_MODULE_0__["default"])();




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZTs7Ozs7Ozs7Ozs7Ozs7QUNiOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsV0FBVzs7Ozs7Ozs7Ozs7Ozs7QUNsQjFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxZQUFZOzs7Ozs7VUNkM0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmdEO0FBQ0c7QUFDRjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFZO0FBQ2hCLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxJQUFJLGdFQUFXO0FBQ2YsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLElBQUksK0RBQWU7QUFDbkIsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBVztBQUNYO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25haWxfYXBwLy4vc3JjL2NvbXBvbmVudHMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9uYWlsX2FwcC8uL3NyYy9jb21wb25lbnRzL2xvYWRQYWdlLmpzIiwid2VicGFjazovL25haWxfYXBwLy4vc3JjL2NvbXBvbmVudHMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vbmFpbF9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbmFpbF9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL25haWxfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbmFpbF9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9uYWlsX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb250YWN0IG1lIHBhZ2VcclxuXHJcbmNvbnN0IGxvYWRDb250YWN0UGFnZSA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBoMS5pbm5lckhUTUwgPSAnQ29udGFjdCBNZSc7IFxyXG5cclxuICAgIGRpdi5hcHBlbmRDaGlsZChoMSk7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGxvYWRDb250YWN0UGFnZTsiLCJjb25zdCBpbml0aWFsTG9hZCA9ICgpID0+IHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoNDAwLCA0MDApO1xyXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuIFxyXG4gICAgaW1nLnNyYyA9ICcuL2Fzc2V0cy9uYWlscy5qcGcnO1xyXG5cclxuICAgIGgxLmlubmVySFRNTCA9ICdOYWlscyBieSBKZW5uJztcclxuICAgIHAuaW5uZXJIVE1MID0gJ0xvcmVtIGlwc3VtIGRvbG9yLCBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBOdW1xdWFtIGl0YXF1ZSBkaXN0aW5jdGlvIGNvbnNlY3RldHVyIHZlbCBtb2xlc3RpYXMgbW9sZXN0aWFlLCBtb2xsaXRpYSBpbXBlZGl0IHZvbHVwdGF0aWJ1cyBjdW0/IEV0IG1hZ25hbSBzdW50IHJlcHJlaGVuZGVyaXQuIEF0IG1hZ25pIHBlcmZlcmVuZGlzIHZvbHVwdGF0aWJ1cyBlc3NlIHZlbmlhbSBjb25zZXF1YXR1ciEnO1xyXG5cclxuICAgIGRpdi5hcHBlbmRDaGlsZChoMSk7XHJcbiAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgIGRpdi5hcHBlbmRDaGlsZChwKTtcclxuICAgIFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdGlhbExvYWQ7IiwiLy8gbGlzdCBzZXJ2aWNlcyBcclxuXHJcblxyXG5jb25zdCBsb2FkU2VydmljZXMgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XHJcblxyXG4gICAgaDEuaW5uZXJIVE1MID0gJ1NlcnZpY2VzJztcclxuXHJcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuICAgIGRpdi5hcHBlbmRDaGlsZChoMSk7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBsb2FkU2VydmljZXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgaW5pdGlhbExvYWQgZnJvbSBcIi4vY29tcG9uZW50cy9sb2FkUGFnZVwiO1xyXG5pbXBvcnQgbG9hZENvbnRhY3RQYWdlIGZyb20gXCIuL2NvbXBvbmVudHMvY29udGFjdFwiO1xyXG5pbXBvcnQgbG9hZFNlcnZpY2VzIGZyb20gXCIuL2NvbXBvbmVudHMvc2VydmljZXNcIjtcclxuXHJcbi8vc2VsZWN0IG1lbnUgaXRlbXNcclxuY29uc3QgaG9tZVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdIb21lJyk7XHJcbmNvbnN0IHNlcnZpY2VzVGFiID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlcnZpY2VzJyk7XHJcbmNvbnN0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGFjdCcpO1xyXG5jb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xyXG5cclxuc2VydmljZXNUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGRpdi5pbm5lckhUTUwgPSAnJztcclxuICAgIGxvYWRTZXJ2aWNlcygpO1xyXG59KTtcclxuXHJcbmhvbWVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuICAgIGRpdi5pbm5lckhUTUwgPSAnJztcclxuICAgIGluaXRpYWxMb2FkKCk7XHJcbn0pO1xyXG5cclxuY29udGFjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG4gICAgZGl2LmlubmVySFRNTCA9ICcnO1xyXG4gICAgbG9hZENvbnRhY3RQYWdlKCk7XHJcbn0pO1xyXG5cclxuXHJcbi8vYWRkIGV2ZW50bGlzdGVuZXJzIHRvIGJ1dHRvbnNcclxuXHJcblxyXG5pbml0aWFsTG9hZCgpO1xyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=