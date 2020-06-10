webpackHotUpdate("static/development/pages/services/polishing.js",{

/***/ "./tags/header/index.jsx":
/*!*******************************!*\
  !*** ./tags/header/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes.json */ \"./routes.json\");\nvar _routes_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../routes.json */ \"./routes.json\", 1);\n/* harmony import */ var _forms_call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/call */ \"./forms/call/index.jsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./tags/header/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Maxim/git/avtolife.club/tags/header/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var onScroll = function onScroll() {\n    if (!open && window.innerWidth > 768) {\n      setOpen(true);\n    }\n  };\n\n  var onToggle = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    return setOpen(function (prev) {\n      var next = !prev;\n\n      if (window.innerWidth <= 768) {\n        return next;\n      }\n\n      if (next) {\n        document.body.setAttribute('style', 'overflow: hidden');\n      } else {\n        document.body.removeAttribute('style');\n      }\n\n      return next;\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // console.log('useEffect')\n    window.addEventListener('load', onScroll);\n    window.addEventListener('resize', onScroll); // window.addEventListener('scroll', onScroll)\n\n    return function () {\n      window.removeEventListener('load', onScroll);\n      window.removeEventListener('resize', onScroll); // window.removeEventListener('scroll', onScroll)\n    };\n  });\n  var from = {\n    opacity: 0,\n    transform: 'translate(1.5rem, 0)'\n  };\n  var trans = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useTransition\"])(open, null, {\n    from: from,\n    enter: {\n      opacity: 1,\n      transform: 'translate(0, 0)'\n    },\n    leave: from\n  }); // const style = useSpring({\n  // \t// config: config.stiff,\n  // \tfrom: {\n  // \t\topacity: 0\n  // \t},\n  // \tto: {\n  // \t\t// ...rect.from,\n  // \t\topacity: open ? 1 : 0,\n  // \t\t// transform: open ? `scale(${rect.scale})` : 'scale(0.1)'\n  // \t}\n  // })\n\n  return __jsx(\"header\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 4\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 83,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.logo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 6\n    }\n  }, __jsx(\"img\", {\n    src: \"/img/logo.svg\",\n    alt: \"avto life - styling and detailing\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 85,\n      columnNumber: 7\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.home,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 6\n    }\n  })), __jsx(\"span\", {\n    className: \"\".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.toggle, \" \").concat(open && _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.active),\n    onClick: onToggle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 93,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 94,\n      columnNumber: 6\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 6\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 6\n    }\n  })), trans.map(function (_ref) {\n    var item = _ref.item,\n        props = _ref.props,\n        key = _ref.key;\n    return !item ? null : __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n      key: key,\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.wrap,\n      style: props,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 100,\n        columnNumber: 6\n      }\n    }, __jsx(\"div\", {\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.overflow,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 101,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.nav,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 102,\n        columnNumber: 7\n      }\n    }, _routes_json__WEBPACK_IMPORTED_MODULE_3__.map(function (val, key) {\n      var el = function el(v, k) {\n        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          key: k,\n          href: v.href,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 107,\n            columnNumber: 11\n          }\n        }, __jsx(\"a\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 108,\n            columnNumber: 12\n          }\n        }, v.title));\n      };\n\n      if (val.childs) {\n        return __jsx(\"span\", {\n          key: key,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 117,\n            columnNumber: 11\n          }\n        }, __jsx(\"span\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 118,\n            columnNumber: 12\n          }\n        }, val.title), __jsx(\"ul\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 119,\n            columnNumber: 12\n          }\n        }, val.childs.map(function (v, k) {\n          return __jsx(\"li\", {\n            key: k,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 121,\n              columnNumber: 14\n            }\n          }, el(v, k));\n        })));\n      }\n\n      return el(val, key);\n    })), __jsx(_forms_call__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.call,\n      action: \"\\u0417\\u0430\\u043F\\u0438\\u0441\\u0430\\u0442\\u044C\\u0441\\u044F\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 134,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.address,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 136,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 8\n      }\n    }, \"\\u0433. \\u041E\\u043C\\u0441\\u043A, \\u0443\\u043B. \\u0425\\u0438\\u043C\\u0438\\u043A\\u043E\\u0432, 60\"), __jsx(\"a\", {\n      href: \"tel:83812492500\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 8\n      }\n    }, \"+7 (3812) 49-25-00\")));\n  })));\n}, \"ivcclCZh2SUeRL4a7l7BQOPcL9M=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useTransition\"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90YWdzL2hlYWRlci9pbmRleC5qc3g/MjJmNiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub2dnbGUiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJuZXh0IiwiZG9jdW1lbnQiLCJib2R5Iiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwidXNlRWZmZWN0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJmcm9tIiwib3BhY2l0eSIsInRyYW5zZm9ybSIsInRyYW5zIiwidXNlVHJhbnNpdGlvbiIsImVudGVyIiwibGVhdmUiLCJjc3MiLCJjb250YWluZXIiLCJpbm5lciIsImxvZ28iLCJob21lIiwidG9nZ2xlIiwiYWN0aXZlIiwibWFwIiwiaXRlbSIsInByb3BzIiwia2V5Iiwid3JhcCIsIm92ZXJmbG93IiwibmF2IiwibGlzdCIsInZhbCIsImVsIiwidiIsImsiLCJocmVmIiwidGl0bGUiLCJjaGlsZHMiLCJjYWxsIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVlLDhFQUFNO0FBQUE7O0FBQUEsa0JBRUlBLHNEQUFRLENBQUMsS0FBRCxDQUZaO0FBQUEsTUFFYkMsSUFGYTtBQUFBLE1BRVBDLE9BRk87O0FBSXBCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDdEIsUUFBSSxDQUFDRixJQUFELElBQVNHLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixHQUFqQyxFQUFzQztBQUNyQ0gsYUFBTyxDQUFDLElBQUQsQ0FBUDtBQUNBO0FBQ0QsR0FKRDs7QUFNQSxNQUFNSSxRQUFRLEdBQUdDLHlEQUFXLENBQUM7QUFBQSxXQUFNTCxPQUFPLENBQUMsVUFBQU0sSUFBSSxFQUFJO0FBQ2xELFVBQU1DLElBQUksR0FB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LENBQUQsRUFBSUMsQ0FBSjtBQUFBLGlCQUNmO0FBQUksZUFBRyxFQUFFQSxDQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFDRUYsRUFBRSxDQUFDQyxDQUFELEVBQUlDLENBQUosQ0FESixDQURlO0FBQUEsU0FBZixDQURGLENBRkQsQ0FERDtBQVlBOztBQUVELGFBQU9GLEVBQUUsQ0FBQ0QsR0FBRCxFQUFNTCxHQUFOLENBQVQ7QUFDQSxLQTVCQSxDQURGLENBRkQsRUFrQ0MsTUFBQyxtREFBRDtBQUFPLGVBQVMsRUFBRVYseURBQUcsQ0FBQ3NCLElBQXRCO0FBQTRCLFlBQU0sRUFBQyw4REFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQWxDRCxFQW9DQztBQUFLLGVBQVMsRUFBRXRCLHlEQUFHLENBQUN1QixPQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3R0FERCxFQUVDO0FBQUcsVUFBSSxFQUFDLGlCQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBRkQsQ0FwQ0QsQ0FEVTtBQUFBLEdBQVYsQ0FsQkYsQ0FERCxDQUREO0FBb0VBLENBeElEO0FBQUEsVUE4Q2UxQiwwREE5Q2Y7QUFBQSIsImZpbGUiOiIuL3RhZ3MvaGVhZGVyL2luZGV4LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VMYXlvdXRFZmZlY3QsIHVzZUNhbGxiYWNrLCB1c2VSZWYsIGZvcndhcmRSZWYgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRyYW5zaXRpb24sIHVzZVNwcmluZywgdXNlQ2hhaW4sIGFuaW1hdGVkLCBjb25maWcgfSBmcm9tICdyZWFjdC1zcHJpbmcnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5cbmltcG9ydCBsaXN0IGZyb20gJy4uLy4uL3JvdXRlcy5qc29uJ1xuXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vZm9ybXMvY2FsbCdcblxuaW1wb3J0IGNzcyBmcm9tICcuL2luZGV4Lm1vZHVsZS5zY3NzJ1xuXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XG5cblx0Y29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpXG5cblx0Y29uc3Qgb25TY3JvbGwgPSAoKSA9PiB7XG5cdFx0aWYgKCFvcGVuICYmIHdpbmRvdy5pbm5lcldpZHRoID4gNzY4KSB7XG5cdFx0XHRzZXRPcGVuKHRydWUpXG5cdFx0fVxuXHR9XG5cblx0Y29uc3Qgb25Ub2dnbGUgPSB1c2VDYWxsYmFjaygoKSA9PiBzZXRPcGVuKHByZXYgPT4ge1xuXHRcdGNvbnN0IG5leHQgPSAhcHJldlxuXG5cdFx0aWYgKHdpbmRvdy5pbm5lcldpZHRoIDw9IDc2OCkge1xuXHRcdFx0cmV0dXJuIG5leHRcblx0XHR9XG5cblx0XHRpZiAobmV4dCkge1xuXHRcdFx0ZG9jdW1lbnQuYm9keS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ292ZXJmbG93OiBoaWRkZW4nKVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRkb2N1bWVudC5ib2R5LnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKVxuXHRcdH1cblxuXHRcdHJldHVybiBuZXh0XG5cdH0pKVxuXG5cdHVzZUVmZmVjdCgoKSA9PiB7XG5cblx0XHQvLyBjb25zb2xlLmxvZygndXNlRWZmZWN0Jylcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIG9uU2Nyb2xsKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblNjcm9sbClcblx0XHQvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvblNjcm9sbClcblx0XHRcdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblNjcm9sbClcblx0XHRcdC8vIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBvblNjcm9sbClcblx0XHR9XG5cdH0pXG5cblxuXHRjb25zdCBmcm9tID0ge1xuXHRcdG9wYWNpdHk6IDAsXG5cdFx0dHJhbnNmb3JtOiAndHJhbnNsYXRlKDEuNXJlbSwgMCknXG5cdH1cblxuXHRjb25zdCB0cmFucyA9IHVzZVRyYW5zaXRpb24ob3BlbiwgbnVsbCwge1xuXHRcdGZyb206IGZyb20sXG5cdFx0ZW50ZXI6IHtcblx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMCwgMCknXG5cdFx0fSxcblx0XHRsZWF2ZTogZnJvbVxuXHR9KVxuXG5cdC8vIGNvbnN0IHN0eWxlID0gdXNlU3ByaW5nKHtcblx0Ly8gXHQvLyBjb25maWc6IGNvbmZpZy5zdGlmZixcblx0Ly8gXHRmcm9tOiB7XG5cdC8vIFx0XHRvcGFjaXR5OiAwXG5cdC8vIFx0fSxcblx0Ly8gXHR0bzoge1xuXHQvLyBcdFx0Ly8gLi4ucmVjdC5mcm9tLFxuXHQvLyBcdFx0b3BhY2l0eTogb3BlbiA/IDEgOiAwLFxuXHQvLyBcdFx0Ly8gdHJhbnNmb3JtOiBvcGVuID8gYHNjYWxlKCR7cmVjdC5zY2FsZX0pYCA6ICdzY2FsZSgwLjEpJ1xuXHQvLyBcdH1cblx0Ly8gfSlcblxuXG5cdHJldHVybiAoXG5cdFx0PGhlYWRlciBjbGFzc05hbWU9e2Nzcy5jb250YWluZXJ9PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nzcy5pbm5lcn0+XG5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e2Nzcy5sb2dvfT5cblx0XHRcdFx0XHRcdDxpbWcgc3JjPVwiL2ltZy9sb2dvLnN2Z1wiIGFsdD1cImF2dG8gbGlmZSAtIHN0eWxpbmcgYW5kIGRldGFpbGluZ1wiIC8+XG5cdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHQ8L0xpbms+XG5cblx0XHRcdFx0PExpbmsgaHJlZj1cIi9cIj5cblx0XHRcdFx0XHQ8YSBjbGFzc05hbWU9e2Nzcy5ob21lfSAvPlxuXHRcdFx0XHQ8L0xpbms+XG5cblx0XHRcdFx0PHNwYW4gY2xhc3NOYW1lPXtgJHtjc3MudG9nZ2xlfSAke29wZW4gJiYgY3NzLmFjdGl2ZX1gfSBvbkNsaWNrPXtvblRvZ2dsZX0+XG5cdFx0XHRcdFx0PHNwYW4gLz5cblx0XHRcdFx0XHQ8c3BhbiAvPlxuXHRcdFx0XHRcdDxzcGFuIC8+XG5cdFx0XHRcdDwvc3Bhbj5cblxuXHRcdFx0XHR7dHJhbnMubWFwKCh7IGl0ZW0sIHByb3BzLCBrZXkgfSkgPT4gIWl0ZW0gPyBudWxsIDogKFxuXHRcdFx0XHRcdDxhbmltYXRlZC5kaXYga2V5PXtrZXl9IGNsYXNzTmFtZT17Y3NzLndyYXB9IHN0eWxlPXtwcm9wc30+XG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3NzLm92ZXJmbG93fSAvPlxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nzcy5uYXZ9PlxuXHRcdFx0XHRcdFx0XHR7bGlzdC5tYXAoKHZhbCwga2V5KSA9PiB7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCBlbCA9ICh2LCBrKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8TGluayBrZXk9e2t9IGhyZWY9e3YuaHJlZn0+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGE+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7di50aXRsZX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvTGluaz5cblx0XHRcdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAodmFsLmNoaWxkcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4ga2V5PXtrZXl9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPnt2YWwudGl0bGV9PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDx1bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHt2YWwuY2hpbGRzLm1hcCgodiwgaykgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bGkga2V5PXtrfT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7ZWwodiwgayl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbGk+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQpKX1cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3VsPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIGVsKHZhbCwga2V5KVxuXHRcdFx0XHRcdFx0XHR9KX1cblx0XHRcdFx0XHRcdDwvZGl2PlxuXG5cdFx0XHRcdFx0XHQ8TW9kYWwgY2xhc3NOYW1lPXtjc3MuY2FsbH0gYWN0aW9uPSfQl9Cw0L/QuNGB0LDRgtGM0YHRjycgLz5cblxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2Nzcy5hZGRyZXNzfT5cblx0XHRcdFx0XHRcdFx0PHNwYW4+0LMuINCe0LzRgdC6LCDRg9C7LiDQpdC40LzQuNC60L7QsiwgNjA8L3NwYW4+XG5cdFx0XHRcdFx0XHRcdDxhIGhyZWY9XCJ0ZWw6ODM4MTI0OTI1MDBcIj4rNyAoMzgxMikgNDktMjUtMDA8L2E+XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdDwvYW5pbWF0ZWQuZGl2PlxuXHRcdFx0XHQpKX1cblxuXHRcdFx0PC9kaXY+XG5cdFx0PC9oZWFkZXI+XG5cdClcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./tags/header/index.jsx\n");

/***/ })

})