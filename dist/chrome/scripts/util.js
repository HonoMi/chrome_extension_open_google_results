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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 334);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.STORAGE_KEY = "extension_OpenGoogleResults";
exports.OPEN_TYPE_KEY = exports.STORAGE_KEY + "__options_openType";
exports.NUM_LINKS_AT_ONCE_KEY = exports.STORAGE_KEY + "__options_numLinksAtOnce";
exports.OPEN_INTERVAL_TIME_SCALE_KEY = exports.STORAGE_KEY + "__options_numIntervalTimeScale";
exports.SPELL_KEY = exports.STORAGE_KEY + "__options_spell";
exports.RESET_KEYBOARD_KEY = exports.STORAGE_KEY + "__options_resetKeyboard";
exports.SHAKE_WINDOW_KEY = exports.STORAGE_KEY + "__options_shakeWindow";
exports.OPTION_KEYS = [exports.OPEN_TYPE_KEY, exports.NUM_LINKS_AT_ONCE_KEY, exports.OPEN_INTERVAL_TIME_SCALE_KEY, exports.SPELL_KEY, exports.RESET_KEYBOARD_KEY, exports.SHAKE_WINDOW_KEY];
exports.OPTION_DEFAULT_VALUES = ["stop_and_go", 4, 2000, "", "F4", false];

function hashCode(str) {
    var hash = 0;
    if (str.length == 0) return hash;
    for (var i = 0; i < str.length; i++) {
        var charCode = str.charCodeAt(i);
        hash = (hash << 5) - hash + charCode;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash.toString();
}

function url2hash(url) {
    var urlHash = hashCode(url);
    return urlHash;
}

exports.keyUrlSpecific = function (url) {
    return exports.STORAGE_KEY + "__urlhash_" + url2hash(url);
};

exports.createObject = function (key, value) {
    var obj = {};
    obj[key] = value;
    return obj;
};

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGY2MzZmODUxNTBhNDZmNjIzZTEiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvdXRpbC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiU1RPUkFHRV9LRVkiLCJPUEVOX1RZUEVfS0VZIiwiTlVNX0xJTktTX0FUX09OQ0VfS0VZIiwiT1BFTl9JTlRFUlZBTF9USU1FX1NDQUxFX0tFWSIsIlNQRUxMX0tFWSIsIlJFU0VUX0tFWUJPQVJEX0tFWSIsIlNIQUtFX1dJTkRPV19LRVkiLCJPUFRJT05fS0VZUyIsIk9QVElPTl9ERUZBVUxUX1ZBTFVFUyIsImhhc2hDb2RlIiwic3RyIiwiaGFzaCIsImxlbmd0aCIsImkiLCJjaGFyQ29kZSIsImNoYXJDb2RlQXQiLCJ0b1N0cmluZyIsInVybDJoYXNoIiwidXJsIiwidXJsSGFzaCIsImtleVVybFNwZWNpZmljIiwiY3JlYXRlT2JqZWN0Iiwia2V5IiwidmFsdWUiLCJvYmoiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7QUM3REFBLFFBQVFDLFdBQVIsR0FBc0IsNkJBQXRCO0FBQ0FELFFBQVFFLGFBQVIsR0FBd0JGLFFBQVFDLFdBQVIsR0FBc0Isb0JBQTlDO0FBQ0FELFFBQVFHLHFCQUFSLEdBQWdDSCxRQUFRQyxXQUFSLEdBQXNCLDBCQUF0RDtBQUNBRCxRQUFRSSw0QkFBUixHQUF1Q0osUUFBUUMsV0FBUixHQUFzQixnQ0FBN0Q7QUFDQUQsUUFBUUssU0FBUixHQUFvQkwsUUFBUUMsV0FBUixHQUFzQixpQkFBMUM7QUFDQUQsUUFBUU0sa0JBQVIsR0FBNkJOLFFBQVFDLFdBQVIsR0FBc0IseUJBQW5EO0FBQ0FELFFBQVFPLGdCQUFSLEdBQTJCUCxRQUFRQyxXQUFSLEdBQXNCLHVCQUFqRDtBQUNBRCxRQUFRUSxXQUFSLEdBQXNCLENBQUNSLFFBQVFFLGFBQVQsRUFBd0JGLFFBQVFHLHFCQUFoQyxFQUF1REgsUUFBUUksNEJBQS9ELEVBQTZGSixRQUFRSyxTQUFyRyxFQUFnSEwsUUFBUU0sa0JBQXhILEVBQTRJTixRQUFRTyxnQkFBcEosQ0FBdEI7QUFDQVAsUUFBUVMscUJBQVIsR0FBZ0MsQ0FBQyxhQUFELEVBQWdCLENBQWhCLEVBQW1CLElBQW5CLEVBQXlCLEVBQXpCLEVBQTZCLElBQTdCLEVBQW1DLEtBQW5DLENBQWhDOztBQUVBLFNBQVNDLFFBQVQsQ0FBa0JDLEdBQWxCLEVBQXNCO0FBQ2xCLFFBQUlDLE9BQU8sQ0FBWDtBQUNBLFFBQUlELElBQUlFLE1BQUosSUFBYyxDQUFsQixFQUFxQixPQUFPRCxJQUFQO0FBQ3JCLFNBQUksSUFBSUUsSUFBSSxDQUFaLEVBQWVBLElBQUlILElBQUlFLE1BQXZCLEVBQStCQyxHQUEvQixFQUFvQztBQUNoQyxZQUFNQyxXQUFXSixJQUFJSyxVQUFKLENBQWVGLENBQWYsQ0FBakI7QUFDQUYsZUFBUSxDQUFDQSxRQUFNLENBQVAsSUFBVUEsSUFBWCxHQUFtQkcsUUFBMUI7QUFDQUgsZUFBT0EsT0FBT0EsSUFBZCxDQUhnQyxDQUdaO0FBQ3ZCO0FBQ0QsV0FBT0EsS0FBS0ssUUFBTCxFQUFQO0FBQ0g7O0FBRUQsU0FBU0MsUUFBVCxDQUFrQkMsR0FBbEIsRUFBc0I7QUFDbEIsUUFBTUMsVUFBVVYsU0FBU1MsR0FBVCxDQUFoQjtBQUNBLFdBQU9DLE9BQVA7QUFDSDs7QUFFRHBCLFFBQVFxQixjQUFSLEdBQXlCLFVBQVNGLEdBQVQsRUFBYTtBQUNsQyxXQUFPbkIsUUFBUUMsV0FBUixHQUFzQixZQUF0QixHQUFxQ2lCLFNBQVNDLEdBQVQsQ0FBNUM7QUFDSCxDQUZEOztBQUtBbkIsUUFBUXNCLFlBQVIsR0FBdUIsVUFBU0MsR0FBVCxFQUFjQyxLQUFkLEVBQW9CO0FBQ3ZDLFFBQU1DLE1BQU0sRUFBWjtBQUNBQSxRQUFJRixHQUFKLElBQVdDLEtBQVg7QUFDQSxXQUFPQyxHQUFQO0FBQ0gsQ0FKRCxDIiwiZmlsZSI6InV0aWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAzMzQpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBmNjM2Zjg1MTUwYTQ2ZjYyM2UxIiwiZXhwb3J0cy5TVE9SQUdFX0tFWSA9IFwiZXh0ZW5zaW9uX09wZW5Hb29nbGVSZXN1bHRzXCI7XG5leHBvcnRzLk9QRU5fVFlQRV9LRVkgPSBleHBvcnRzLlNUT1JBR0VfS0VZICsgXCJfX29wdGlvbnNfb3BlblR5cGVcIjtcbmV4cG9ydHMuTlVNX0xJTktTX0FUX09OQ0VfS0VZID0gZXhwb3J0cy5TVE9SQUdFX0tFWSArIFwiX19vcHRpb25zX251bUxpbmtzQXRPbmNlXCI7XG5leHBvcnRzLk9QRU5fSU5URVJWQUxfVElNRV9TQ0FMRV9LRVkgPSBleHBvcnRzLlNUT1JBR0VfS0VZICsgXCJfX29wdGlvbnNfbnVtSW50ZXJ2YWxUaW1lU2NhbGVcIjtcbmV4cG9ydHMuU1BFTExfS0VZID0gZXhwb3J0cy5TVE9SQUdFX0tFWSArIFwiX19vcHRpb25zX3NwZWxsXCI7XG5leHBvcnRzLlJFU0VUX0tFWUJPQVJEX0tFWSA9IGV4cG9ydHMuU1RPUkFHRV9LRVkgKyBcIl9fb3B0aW9uc19yZXNldEtleWJvYXJkXCJcbmV4cG9ydHMuU0hBS0VfV0lORE9XX0tFWSA9IGV4cG9ydHMuU1RPUkFHRV9LRVkgKyBcIl9fb3B0aW9uc19zaGFrZVdpbmRvd1wiXG5leHBvcnRzLk9QVElPTl9LRVlTID0gW2V4cG9ydHMuT1BFTl9UWVBFX0tFWSwgZXhwb3J0cy5OVU1fTElOS1NfQVRfT05DRV9LRVksIGV4cG9ydHMuT1BFTl9JTlRFUlZBTF9USU1FX1NDQUxFX0tFWSwgZXhwb3J0cy5TUEVMTF9LRVksIGV4cG9ydHMuUkVTRVRfS0VZQk9BUkRfS0VZLCBleHBvcnRzLlNIQUtFX1dJTkRPV19LRVldO1xuZXhwb3J0cy5PUFRJT05fREVGQVVMVF9WQUxVRVMgPSBbXCJzdG9wX2FuZF9nb1wiLCA0LCAyMDAwLCBcIlwiLCBcIkY0XCIsIGZhbHNlXTtcblxuZnVuY3Rpb24gaGFzaENvZGUoc3RyKXtcbiAgICBsZXQgaGFzaCA9IDA7XG4gICAgaWYgKHN0ci5sZW5ndGggPT0gMCkgcmV0dXJuIGhhc2g7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBjaGFyQ29kZSA9IHN0ci5jaGFyQ29kZUF0KGkpO1xuICAgICAgICBoYXNoID0gKChoYXNoPDw1KS1oYXNoKSArIGNoYXJDb2RlO1xuICAgICAgICBoYXNoID0gaGFzaCAmIGhhc2g7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuICAgIH1cbiAgICByZXR1cm4gaGFzaC50b1N0cmluZygpO1xufVxuXG5mdW5jdGlvbiB1cmwyaGFzaCh1cmwpe1xuICAgIGNvbnN0IHVybEhhc2ggPSBoYXNoQ29kZSh1cmwpO1xuICAgIHJldHVybiB1cmxIYXNoO1xufVxuXG5leHBvcnRzLmtleVVybFNwZWNpZmljID0gZnVuY3Rpb24odXJsKXtcbiAgICByZXR1cm4gZXhwb3J0cy5TVE9SQUdFX0tFWSArIFwiX191cmxoYXNoX1wiICsgdXJsMmhhc2godXJsKTtcbn1cblxuXG5leHBvcnRzLmNyZWF0ZU9iamVjdCA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgIGNvbnN0IG9iaiA9IHt9O1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gICAgcmV0dXJuIG9iajtcbn1cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy91dGlsLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==