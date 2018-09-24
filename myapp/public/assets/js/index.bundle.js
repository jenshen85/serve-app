/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/assets/js/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/common/form.js":
/*!*******************************!*\
  !*** ./src/js/common/form.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),

/***/ "./src/js/common/main.js":
/*!*******************************!*\
  !*** ./src/js/common/main.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var inputImg = document.getElementById('image');
var output = document.getElementById('file-image');
var clearForm = document.getElementById('clear');

if (inputImg && output && clearForm) {
  var outChildren = output.children;

  inputImg.addEventListener('change', function () {
    var img = document.createElement('img');
    img.src = URL.createObjectURL(inputImg.files[0]);

    if (outChildren.length > 0) output.removeChild(outChildren[0]);
    output.appendChild(img);
  });

  clearForm.addEventListener('click', function () {
    for (var i = outChildren.length - 1; i >= 0; i--) {
      output.removeChild(output.children[i]);
    }
  });
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// object-fit and object-position polyfill
// =============================================================//

var _objectFitImages = __webpack_require__(/*! object-fit-images */ "./node_modules/object-fit-images/dist/ofi.common-js.js");

var _objectFitImages2 = _interopRequireDefault(_objectFitImages);

var _svg4everybody = __webpack_require__(/*! svg4everybody */ "./node_modules/svg4everybody/dist/svg4everybody.js");

var _svg4everybody2 = _interopRequireDefault(_svg4everybody);

__webpack_require__(/*! ./lib/polyfills */ "./src/js/lib/polyfills.js");

__webpack_require__(/*! ./common/main */ "./src/js/common/main.js");

__webpack_require__(/*! ./common/form */ "./src/js/common/form.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// =============================================================//

(0, _objectFitImages2.default)();
// =============================================================//


// svg-sprite polyfill
// =============================================================//

(0, _svg4everybody2.default)();

// import fontawesome from "font-awesome"
// fontawesome.dom.i2svg()

/***/ }),

/***/ "./src/js/lib/polyfills.js":
/*!*********************************!*\
  !*** ./src/js/lib/polyfills.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Array.from
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;
    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };
    var toInteger = function toInteger(value) {
      var number = Number(value);
      if (isNaN(number)) {
        return 0;
      }
      if (number === 0 || !isFinite(number)) {
        return number;
      }
      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };
    var maxSafeInteger = Math.pow(2, 53) - 1;
    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    };

    // Свойство length метода from равно 1.
    return function from(arrayLike /*, mapFn, thisArg */) {
      // 1. Положим C равным значению this.
      var C = this;

      // 2. Положим items равным ToObject(arrayLike).
      var items = Object(arrayLike);

      // 3. ReturnIfAbrupt(items).
      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      }

      // 4. Если mapfn равен undefined, положим mapping равным false.
      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;
      if (typeof mapFn !== 'undefined') {
        // 5. иначе
        // 5. a. Если вызов IsCallable(mapfn) равен false, выкидываем исключение TypeError.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        }

        // 5. b. Если thisArg присутствует, положим T равным thisArg; иначе положим T равным undefined.
        if (arguments.length > 2) {
          T = arguments[2];
        }
      }

      // 10. Положим lenValue равным Get(items, "length").
      // 11. Положим len равным ToLength(lenValue).
      var len = toLength(items.length);

      // 13. Если IsConstructor(C) равен true, то
      // 13. a. Положим A равным результату вызова внутреннего метода [[Construct]]
      //     объекта C со списком аргументов, содержащим единственный элемент len.
      // 14. a. Иначе, положим A равным ArrayCreate(len).
      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

      // 16. Положим k равным 0.
      var k = 0;
      // 17. Пока k < len, будем повторять... (шаги с a по h)
      var kValue;
      while (k < len) {
        kValue = items[k];
        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }
        k += 1;
      }
      // 18. Положим putStatus равным Put(A, "length", len, true).
      A.length = len;
      // 20. Вернём A.
      return A;
    };
  }();
}

// Array.isArray
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

// Array.of
if (!Array.of) {
  Array.of = function () {
    return Array.prototype.slice.call(arguments);
  };
}

// Array.find
if (!Array.prototype.find) {
  Array.prototype.find = function (predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbW1vbi9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvbGliL3BvbHlmaWxscy5qcyJdLCJuYW1lcyI6WyJpbnB1dEltZyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvdXRwdXQiLCJjbGVhckZvcm0iLCJvdXRDaGlsZHJlbiIsImNoaWxkcmVuIiwiYWRkRXZlbnRMaXN0ZW5lciIsImltZyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJmaWxlcyIsImxlbmd0aCIsInJlbW92ZUNoaWxkIiwiYXBwZW5kQ2hpbGQiLCJpIiwiQXJyYXkiLCJmcm9tIiwidG9TdHIiLCJPYmplY3QiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImlzQ2FsbGFibGUiLCJmbiIsImNhbGwiLCJ0b0ludGVnZXIiLCJ2YWx1ZSIsIm51bWJlciIsIk51bWJlciIsImlzTmFOIiwiaXNGaW5pdGUiLCJNYXRoIiwiZmxvb3IiLCJhYnMiLCJtYXhTYWZlSW50ZWdlciIsInBvdyIsInRvTGVuZ3RoIiwibGVuIiwibWluIiwibWF4IiwiYXJyYXlMaWtlIiwiQyIsIml0ZW1zIiwiVHlwZUVycm9yIiwibWFwRm4iLCJhcmd1bWVudHMiLCJ1bmRlZmluZWQiLCJUIiwiQSIsImsiLCJrVmFsdWUiLCJpc0FycmF5IiwiYXJnIiwib2YiLCJzbGljZSIsImZpbmQiLCJwcmVkaWNhdGUiLCJsaXN0IiwidGhpc0FyZyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFD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bnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImluZGV4XCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvYXNzZXRzL2pzL1wiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL3NyYy9qcy9pbmRleC5qc1wiLFwidmVuZG9yXCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG5jb25zdCBpbnB1dEltZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbWFnZScpO1xyXG5jb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmlsZS1pbWFnZScpO1xyXG5jb25zdCBjbGVhckZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2xlYXInKTtcclxuXHJcbmlmIChpbnB1dEltZyAmJiBvdXRwdXQgJiYgY2xlYXJGb3JtKSB7XHJcbiAgbGV0IG91dENoaWxkcmVuID0gb3V0cHV0LmNoaWxkcmVuO1xyXG5cclxuICBpbnB1dEltZy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChpbnB1dEltZy5maWxlc1swXSk7XHJcblxyXG4gICAgaWYob3V0Q2hpbGRyZW4ubGVuZ3RoID4gMCkgb3V0cHV0LnJlbW92ZUNoaWxkKG91dENoaWxkcmVuWzBdKTtcclxuICAgIG91dHB1dC5hcHBlbmRDaGlsZChpbWcpO1xyXG4gIH0pXHJcblxyXG4gIGNsZWFyRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIGZvciAobGV0IGkgPSAob3V0Q2hpbGRyZW4ubGVuZ3RoIC0gMSk7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgIG91dHB1dC5yZW1vdmVDaGlsZChvdXRwdXQuY2hpbGRyZW5baV0pO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnXHJcblxyXG4vLyBvYmplY3QtZml0IGFuZCBvYmplY3QtcG9zaXRpb24gcG9seWZpbGxcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcbmltcG9ydCBvYmplY3RGaXRJbWFnZXMgZnJvbSAnb2JqZWN0LWZpdC1pbWFnZXMnO1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ly9cclxuXHJcblxyXG4vLyBzdmctc3ByaXRlIHBvbHlmaWxsXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0vL1xyXG5pbXBvcnQgc3ZnNGV2ZXJ5Ym9keSBmcm9tICdzdmc0ZXZlcnlib2R5JztcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PS8vXHJcblxyXG5vYmplY3RGaXRJbWFnZXMoKTtcclxuc3ZnNGV2ZXJ5Ym9keSgpO1xyXG5cclxuLy8gaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gXCJmb250LWF3ZXNvbWVcIlxyXG4vLyBmb250YXdlc29tZS5kb20uaTJzdmcoKVxyXG5cclxuaW1wb3J0ICcuL2xpYi9wb2x5ZmlsbHMnXHJcbmltcG9ydCAnLi9jb21tb24vbWFpbic7XHJcbmltcG9ydCAnLi9jb21tb24vZm9ybSc7XHJcbiIsIi8vIEFycmF5LmZyb21cclxuaWYgKCFBcnJheS5mcm9tKSB7XHJcbiAgQXJyYXkuZnJvbSA9IChmdW5jdGlvbigpIHtcclxuICAgIHZhciB0b1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XHJcbiAgICB2YXIgaXNDYWxsYWJsZSA9IGZ1bmN0aW9uKGZuKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgdG9TdHIuY2FsbChmbikgPT09ICdbb2JqZWN0IEZ1bmN0aW9uXSc7XHJcbiAgICB9O1xyXG4gICAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICB2YXIgbnVtYmVyID0gTnVtYmVyKHZhbHVlKTtcclxuICAgICAgaWYgKGlzTmFOKG51bWJlcikpIHsgcmV0dXJuIDA7IH1cclxuICAgICAgaWYgKG51bWJlciA9PT0gMCB8fCAhaXNGaW5pdGUobnVtYmVyKSkgeyByZXR1cm4gbnVtYmVyOyB9XHJcbiAgICAgIHJldHVybiAobnVtYmVyID4gMCA/IDEgOiAtMSkgKiBNYXRoLmZsb29yKE1hdGguYWJzKG51bWJlcikpO1xyXG4gICAgfTtcclxuICAgIHZhciBtYXhTYWZlSW50ZWdlciA9IE1hdGgucG93KDIsIDUzKSAtIDE7XHJcbiAgICB2YXIgdG9MZW5ndGggPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgdmFyIGxlbiA9IHRvSW50ZWdlcih2YWx1ZSk7XHJcbiAgICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChsZW4sIDApLCBtYXhTYWZlSW50ZWdlcik7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vINCh0LLQvtC50YHRgtCy0L4gbGVuZ3RoINC80LXRgtC+0LTQsCBmcm9tINGA0LDQstC90L4gMS5cclxuICAgIHJldHVybiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBGbiwgdGhpc0FyZyAqLykge1xyXG4gICAgICAvLyAxLiDQn9C+0LvQvtC20LjQvCBDINGA0LDQstC90YvQvCDQt9C90LDRh9C10L3QuNGOIHRoaXMuXHJcbiAgICAgIHZhciBDID0gdGhpcztcclxuXHJcbiAgICAgIC8vIDIuINCf0L7Qu9C+0LbQuNC8IGl0ZW1zINGA0LDQstC90YvQvCBUb09iamVjdChhcnJheUxpa2UpLlxyXG4gICAgICB2YXIgaXRlbXMgPSBPYmplY3QoYXJyYXlMaWtlKTtcclxuXHJcbiAgICAgIC8vIDMuIFJldHVybklmQWJydXB0KGl0ZW1zKS5cclxuICAgICAgaWYgKGFycmF5TGlrZSA9PSBudWxsKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQXJyYXkuZnJvbSByZXF1aXJlcyBhbiBhcnJheS1saWtlIG9iamVjdCAtIG5vdCBudWxsIG9yIHVuZGVmaW5lZCcpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyA0LiDQldGB0LvQuCBtYXBmbiDRgNCw0LLQtdC9IHVuZGVmaW5lZCwg0L/QvtC70L7QttC40LwgbWFwcGluZyDRgNCw0LLQvdGL0LwgZmFsc2UuXHJcbiAgICAgIHZhciBtYXBGbiA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdm9pZCB1bmRlZmluZWQ7XHJcbiAgICAgIHZhciBUO1xyXG4gICAgICBpZiAodHlwZW9mIG1hcEZuICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIC8vIDUuINC40L3QsNGH0LVcclxuICAgICAgICAvLyA1LiBhLiDQldGB0LvQuCDQstGL0LfQvtCyIElzQ2FsbGFibGUobWFwZm4pINGA0LDQstC10L0gZmFsc2UsINCy0YvQutC40LTRi9Cy0LDQtdC8INC40YHQutC70Y7Rh9C10L3QuNC1IFR5cGVFcnJvci5cclxuICAgICAgICBpZiAoIWlzQ2FsbGFibGUobWFwRm4pKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5mcm9tOiB3aGVuIHByb3ZpZGVkLCB0aGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gNS4gYi4g0JXRgdC70LggdGhpc0FyZyDQv9GA0LjRgdGD0YLRgdGC0LLRg9C10YIsINC/0L7Qu9C+0LbQuNC8IFQg0YDQsNCy0L3Ri9C8IHRoaXNBcmc7INC40L3QsNGH0LUg0L/QvtC70L7QttC40LwgVCDRgNCw0LLQvdGL0LwgdW5kZWZpbmVkLlxyXG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgVCA9IGFyZ3VtZW50c1syXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIDEwLiDQn9C+0LvQvtC20LjQvCBsZW5WYWx1ZSDRgNCw0LLQvdGL0LwgR2V0KGl0ZW1zLCBcImxlbmd0aFwiKS5cclxuICAgICAgLy8gMTEuINCf0L7Qu9C+0LbQuNC8IGxlbiDRgNCw0LLQvdGL0LwgVG9MZW5ndGgobGVuVmFsdWUpLlxyXG4gICAgICB2YXIgbGVuID0gdG9MZW5ndGgoaXRlbXMubGVuZ3RoKTtcclxuXHJcbiAgICAgIC8vIDEzLiDQldGB0LvQuCBJc0NvbnN0cnVjdG9yKEMpINGA0LDQstC10L0gdHJ1ZSwg0YLQvlxyXG4gICAgICAvLyAxMy4gYS4g0J/QvtC70L7QttC40LwgQSDRgNCw0LLQvdGL0Lwg0YDQtdC30YPQu9GM0YLQsNGC0YMg0LLRi9C30L7QstCwINCy0L3Rg9GC0YDQtdC90L3QtdCz0L4g0LzQtdGC0L7QtNCwIFtbQ29uc3RydWN0XV1cclxuICAgICAgLy8gICAgINC+0LHRitC10LrRgtCwIEMg0YHQviDRgdC/0LjRgdC60L7QvCDQsNGA0LPRg9C80LXQvdGC0L7Qsiwg0YHQvtC00LXRgNC20LDRidC40Lwg0LXQtNC40L3RgdGC0LLQtdC90L3Ri9C5INGN0LvQtdC80LXQvdGCIGxlbi5cclxuICAgICAgLy8gMTQuIGEuINCY0L3QsNGH0LUsINC/0L7Qu9C+0LbQuNC8IEEg0YDQsNCy0L3Ri9C8IEFycmF5Q3JlYXRlKGxlbikuXHJcbiAgICAgIHZhciBBID0gaXNDYWxsYWJsZShDKSA/IE9iamVjdChuZXcgQyhsZW4pKSA6IG5ldyBBcnJheShsZW4pO1xyXG5cclxuICAgICAgLy8gMTYuINCf0L7Qu9C+0LbQuNC8IGsg0YDQsNCy0L3Ri9C8IDAuXHJcbiAgICAgIHZhciBrID0gMDtcclxuICAgICAgLy8gMTcuINCf0L7QutCwIGsgPCBsZW4sINCx0YPQtNC10Lwg0L/QvtCy0YLQvtGA0Y/RgtGMLi4uICjRiNCw0LPQuCDRgSBhINC/0L4gaClcclxuICAgICAgdmFyIGtWYWx1ZTtcclxuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcclxuICAgICAgICBrVmFsdWUgPSBpdGVtc1trXTtcclxuICAgICAgICBpZiAobWFwRm4pIHtcclxuICAgICAgICAgIEFba10gPSB0eXBlb2YgVCA9PT0gJ3VuZGVmaW5lZCcgPyBtYXBGbihrVmFsdWUsIGspIDogbWFwRm4uY2FsbChULCBrVmFsdWUsIGspO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBBW2tdID0ga1ZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBrICs9IDE7XHJcbiAgICAgIH1cclxuICAgICAgLy8gMTguINCf0L7Qu9C+0LbQuNC8IHB1dFN0YXR1cyDRgNCw0LLQvdGL0LwgUHV0KEEsIFwibGVuZ3RoXCIsIGxlbiwgdHJ1ZSkuXHJcbiAgICAgIEEubGVuZ3RoID0gbGVuO1xyXG4gICAgICAvLyAyMC4g0JLQtdGA0L3RkdC8IEEuXHJcbiAgICAgIHJldHVybiBBO1xyXG4gICAgfTtcclxuICB9KCkpO1xyXG59XHJcblxyXG4vLyBBcnJheS5pc0FycmF5XHJcbmlmICghQXJyYXkuaXNBcnJheSkge1xyXG4gIEFycmF5LmlzQXJyYXkgPSBmdW5jdGlvbihhcmcpIHtcclxuICAgIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJnKSA9PT0gJ1tvYmplY3QgQXJyYXldJztcclxuICB9O1xyXG59XHJcblxyXG4vLyBBcnJheS5vZlxyXG5pZiAoIUFycmF5Lm9mKSB7XHJcbiAgQXJyYXkub2YgPSBmdW5jdGlvbigpIHtcclxuICAgIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xyXG4gIH07XHJcbn1cclxuXHJcbi8vIEFycmF5LmZpbmRcclxuaWYgKCFBcnJheS5wcm90b3R5cGUuZmluZCkge1xyXG4gIEFycmF5LnByb3RvdHlwZS5maW5kID0gZnVuY3Rpb24ocHJlZGljYXRlKSB7XHJcbiAgICBpZiAodGhpcyA9PSBudWxsKSB7XHJcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0FycmF5LnByb3RvdHlwZS5maW5kIGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZCcpO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xyXG4gICAgfVxyXG4gICAgdmFyIGxpc3QgPSBPYmplY3QodGhpcyk7XHJcbiAgICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGggPj4+IDA7XHJcbiAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcclxuICAgIHZhciB2YWx1ZTtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHZhbHVlID0gbGlzdFtpXTtcclxuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpLCBsaXN0KSkge1xyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICB9O1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==