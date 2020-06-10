webpackHotUpdate("static/development/pages/services/polishing.js",{

/***/ "./tags/header/index.jsx":
/*!*******************************!*\
  !*** ./tags/header/index.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ \"./node_modules/react-spring/web.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _routes_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../routes.json */ \"./routes.json\");\nvar _routes_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../routes.json */ \"./routes.json\", 1);\n/* harmony import */ var _forms_call__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../forms/call */ \"./forms/call/index.jsx\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.scss */ \"./tags/header/index.module.scss\");\n/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\nvar _this = undefined,\n    _jsxFileName = \"/Users/Maxim/git/avtolife.club/tags/header/index.jsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_s(function () {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(false),\n      open = _useState[0],\n      setOpen = _useState[1];\n\n  var onScroll = function onScroll() {\n    if (open && window.innerWidth > 768) {\n      setOpen(false);\n    }\n  };\n\n  var onToggle = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useCallback\"])(function () {\n    return setOpen(function (prev) {\n      return !prev;\n    });\n  });\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // console.log('useEffect')\n    window.addEventListener('resize', onScroll);\n    window.addEventListener('scroll', onScroll);\n    return function () {\n      window.removeEventListener('resize', onScroll);\n      window.removeEventListener('scroll', onScroll);\n    };\n  });\n  var from = {\n    opacity: 0,\n    transform: 'translate(1.5rem, 0)'\n  };\n  var trans = Object(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useTransition\"])(open, null, {\n    from: from,\n    enter: {\n      opacity: 1,\n      transform: 'translate(0, 0)'\n    },\n    leave: from\n  }); // const style = useSpring({\n  // \t// config: config.stiff,\n  // \tfrom: {\n  // \t\topacity: 0\n  // \t},\n  // \tto: {\n  // \t\t// ...rect.from,\n  // \t\topacity: open ? 1 : 0,\n  // \t\t// transform: open ? `scale(${rect.scale})` : 'scale(0.1)'\n  // \t}\n  // })\n\n  return __jsx(\"header\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.container,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 64,\n      columnNumber: 3\n    }\n  }, __jsx(\"div\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.inner,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 65,\n      columnNumber: 4\n    }\n  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 67,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.logo,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 68,\n      columnNumber: 6\n    }\n  }, __jsx(\"img\", {\n    src: \"/img/logo.svg\",\n    alt: \"avto life - styling and detailing\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 69,\n      columnNumber: 7\n    }\n  }))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: \"/\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 73,\n      columnNumber: 5\n    }\n  }, __jsx(\"a\", {\n    className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.home,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 74,\n      columnNumber: 6\n    }\n  })), __jsx(\"span\", {\n    className: \"\".concat(_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.toggle, \" \").concat(open && _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.active),\n    onClick: onToggle,\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 77,\n      columnNumber: 5\n    }\n  }, __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 78,\n      columnNumber: 6\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 6\n    }\n  }), __jsx(\"span\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 80,\n      columnNumber: 6\n    }\n  })), trans.map(function (_ref) {\n    var item = _ref.item,\n        props = _ref.props,\n        key = _ref.key;\n    return !item ? null : __jsx(react_spring__WEBPACK_IMPORTED_MODULE_1__[\"animated\"].div, {\n      key: key,\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.wrap,\n      style: props,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 84,\n        columnNumber: 6\n      }\n    }, __jsx(\"div\", {\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.nav,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 7\n      }\n    }, _routes_json__WEBPACK_IMPORTED_MODULE_3__.map(function (val, key) {\n      var el = function el(v, k) {\n        return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n          key: k,\n          href: v.href,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 90,\n            columnNumber: 11\n          }\n        }, __jsx(\"a\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 91,\n            columnNumber: 12\n          }\n        }, v.title));\n      };\n\n      if (val.childs) {\n        return __jsx(\"span\", {\n          key: key,\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 11\n          }\n        }, __jsx(\"span\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 101,\n            columnNumber: 12\n          }\n        }, val.title), __jsx(\"ul\", {\n          __self: _this,\n          __source: {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 12\n          }\n        }, val.childs.map(function (v, k) {\n          return __jsx(\"li\", {\n            key: k,\n            __self: _this,\n            __source: {\n              fileName: _jsxFileName,\n              lineNumber: 104,\n              columnNumber: 14\n            }\n          }, el(v, k));\n        })));\n      }\n\n      return el(val, key);\n    })), __jsx(_forms_call__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.call,\n      action: \"\\u0417\\u0430\\u043F\\u0438\\u0441\\u0430\\u0442\\u044C\\u0441\\u044F\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 117,\n        columnNumber: 7\n      }\n    }), __jsx(\"div\", {\n      className: _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default.a.address,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 119,\n        columnNumber: 7\n      }\n    }, __jsx(\"span\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 120,\n        columnNumber: 8\n      }\n    }, \"\\u0433. \\u041E\\u043C\\u0441\\u043A, \\u0443\\u043B. \\u0425\\u0438\\u043C\\u0438\\u043A\\u043E\\u0432, 60\"), __jsx(\"a\", {\n      href: \"tel:83812492500\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 121,\n        columnNumber: 8\n      }\n    }, \"+7 (3812) 49-25-00\")));\n  })));\n}, \"ivcclCZh2SUeRL4a7l7BQOPcL9M=\", false, function () {\n  return [react_spring__WEBPACK_IMPORTED_MODULE_1__[\"useTransition\"]];\n}));\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi90YWdzL2hlYWRlci9pbmRleC5qc3g/MjJmNiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwib25TY3JvbGwiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwib25Ub2dnbGUiLCJ1c2VDYWxsYmFjayIsInByZXYiLCJ1c2VFZmZlY3QiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImZyb20iLCJvcGFjaXR5IiwidHJhbnNmb3JtIiwidHJhbnMiLCJ1c2VUcmFuc2l0aW9uIiwiZW50ZXIiLCJsZWF2ZSIsImNzcyIsImNvbnRhaW5lciIsImlubmVyIiwibG9nbyIsImhvbWUiLCJ0b2dnbGUiLCJhY3RpdmUiLCJtYXAiLCJpdGVtIiwicHJvcHMiLCJrZXkiLCJ3cmFwIiwibmF2IiwibGlzdCIsInZhbCIsImVsIiwidiIsImsiLCJocmVmIiwidGl0bGUiLCJjaGlsZHMiLCJjYWxsIiwiYWRkcmVzcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVlLDhFQUFNO0FBQUE7O0FBQUEsa0JBRUlBLHNEQUFRLENBQUMsS0FBRCxDQUZaO0FBQUEsTUFFYkMsSUFGYTtBQUFBLE1BRVBDLE9BRk87O0FBSXBCLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFDdEIsUUFBSUYsSUFBSSxJQUFJRyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBaEMsRUFBcUM7QUFDcENILGFBQU8sQ0FBQyxLQUFELENBQVA7QUFDQTtBQUNELEdBSkQ7O0FBTUEsTUFBTUksUUFBUSxHQUFHQyx5REFBVyxDQUFDO0FBQUEsV0FBTUwsT0FBTyxDQUFDLFVBQUFNLElBQUk7QUFBQSxhQUFJLENBQUNBLElBQUw7QUFBQSxLQUFMLENBQWI7QUFBQSxHQUFELENBQTVCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUVmO0FBQ0FMLFVBQU0sQ0FBQ00sZ0JB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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdHQURELEVBRUM7QUFBRyxVQUFJLEVBQUMsaUJBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFGRCxDQW5DRCxDQURVO0FBQUEsR0FBVixDQWxCRixDQURELENBREQ7QUFtRUEsQ0F2SEQ7QUFBQSxVQThCZXpCLDBEQTlCZjtBQUFBIiwiZmlsZSI6Ii4vdGFncy9oZWFkZXIvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZUxheW91dEVmZmVjdCwgdXNlQ2FsbGJhY2ssIHVzZVJlZiwgZm9yd2FyZFJlZiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgdXNlVHJhbnNpdGlvbiwgdXNlU3ByaW5nLCB1c2VDaGFpbiwgYW5pbWF0ZWQsIGNvbmZpZyB9IGZyb20gJ3JlYWN0LXNwcmluZydcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuaW1wb3J0IGxpc3QgZnJvbSAnLi4vLi4vcm91dGVzLmpzb24nXG5cbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9mb3Jtcy9jYWxsJ1xuXG5pbXBvcnQgY3NzIGZyb20gJy4vaW5kZXgubW9kdWxlLnNjc3MnXG5cbmV4cG9ydCBkZWZhdWx0ICgpID0+IHtcblxuXHRjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuXHRjb25zdCBvblNjcm9sbCA9ICgpID0+IHtcblx0XHRpZiAob3BlbiAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+IDc2OCkge1xuXHRcdFx0c2V0T3BlbihmYWxzZSlcblx0XHR9XG5cdH1cblxuXHRjb25zdCBvblRvZ2dsZSA9IHVzZUNhbGxiYWNrKCgpID0+IHNldE9wZW4ocHJldiA9PiAhcHJldikpXG5cblx0dXNlRWZmZWN0KCgpID0+IHtcblxuXHRcdC8vIGNvbnNvbGUubG9nKCd1c2VFZmZlY3QnKVxuXHRcdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBvblNjcm9sbClcblx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgb25TY3JvbGwpXG5cblx0XHRyZXR1cm4gKCkgPT4ge1xuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIG9uU2Nyb2xsKVxuXHRcdFx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIG9uU2Nyb2xsKVxuXHRcdH1cblx0fSlcblxuXG5cdGNvbnN0IGZyb20gPSB7XG5cdFx0b3BhY2l0eTogMCxcblx0XHR0cmFuc2Zvcm06ICd0cmFuc2xhdGUoMS41cmVtLCAwKSdcblx0fVxuXG5cdGNvbnN0IHRyYW5zID0gdXNlVHJhbnNpdGlvbihvcGVuLCBudWxsLCB7XG5cdFx0ZnJvbTogZnJvbSxcblx0XHRlbnRlcjoge1xuXHRcdFx0b3BhY2l0eTogMSxcblx0XHRcdHRyYW5zZm9ybTogJ3RyYW5zbGF0ZSgwLCAwKSdcblx0XHR9LFxuXHRcdGxlYXZlOiBmcm9tXG5cdH0pXG5cblx0Ly8gY29uc3Qgc3R5bGUgPSB1c2VTcHJpbmcoe1xuXHQvLyBcdC8vIGNvbmZpZzogY29uZmlnLnN0aWZmLFxuXHQvLyBcdGZyb206IHtcblx0Ly8gXHRcdG9wYWNpdHk6IDBcblx0Ly8gXHR9LFxuXHQvLyBcdHRvOiB7XG5cdC8vIFx0XHQvLyAuLi5yZWN0LmZyb20sXG5cdC8vIFx0XHRvcGFjaXR5OiBvcGVuID8gMSA6IDAsXG5cdC8vIFx0XHQvLyB0cmFuc2Zvcm06IG9wZW4gPyBgc2NhbGUoJHtyZWN0LnNjYWxlfSlgIDogJ3NjYWxlKDAuMSknXG5cdC8vIFx0fVxuXHQvLyB9KVxuXG5cblx0cmV0dXJuIChcblx0XHQ8aGVhZGVyIGNsYXNzTmFtZT17Y3NzLmNvbnRhaW5lcn0+XG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3NzLmlubmVyfT5cblxuXHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17Y3NzLmxvZ299PlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIvaW1nL2xvZ28uc3ZnXCIgYWx0PVwiYXZ0byBsaWZlIC0gc3R5bGluZyBhbmQgZGV0YWlsaW5nXCIgLz5cblx0XHRcdFx0XHQ8L2E+XG5cdFx0XHRcdDwvTGluaz5cblxuXHRcdFx0XHQ8TGluayBocmVmPVwiL1wiPlxuXHRcdFx0XHRcdDxhIGNsYXNzTmFtZT17Y3NzLmhvbWV9IC8+XG5cdFx0XHRcdDwvTGluaz5cblxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e2Ake2Nzcy50b2dnbGV9ICR7b3BlbiAmJiBjc3MuYWN0aXZlfWB9IG9uQ2xpY2s9e29uVG9nZ2xlfT5cblx0XHRcdFx0XHQ8c3BhbiAvPlxuXHRcdFx0XHRcdDxzcGFuIC8+XG5cdFx0XHRcdFx0PHNwYW4gLz5cblx0XHRcdFx0PC9zcGFuPlxuXG5cdFx0XHRcdHt0cmFucy5tYXAoKHsgaXRlbSwgcHJvcHMsIGtleSB9KSA9PiAhaXRlbSA/IG51bGwgOiAoXG5cdFx0XHRcdFx0PGFuaW1hdGVkLmRpdiBrZXk9e2tleX0gY2xhc3NOYW1lPXtjc3Mud3JhcH0gc3R5bGU9e3Byb3BzfT5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjc3MubmF2fT5cblx0XHRcdFx0XHRcdFx0e2xpc3QubWFwKCh2YWwsIGtleSkgPT4ge1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgZWwgPSAodiwgaykgPT4ge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIChcblx0XHRcdFx0XHRcdFx0XHRcdFx0PExpbmsga2V5PXtrfSBocmVmPXt2LmhyZWZ9PlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxhPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e3YudGl0bGV9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9hPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L0xpbms+XG5cdFx0XHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHZhbC5jaGlsZHMpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGtleT17a2V5fT5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57dmFsLnRpdGxlfTwvc3Bhbj5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8dWw+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR7dmFsLmNoaWxkcy5tYXAoKHYsIGspID0+IChcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGxpIGtleT17a30+XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0e2VsKHYsIGspfVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2xpPlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0KSl9XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC91bD5cblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0KVxuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiBlbCh2YWwsIGtleSlcblx0XHRcdFx0XHRcdFx0fSl9XG5cdFx0XHRcdFx0XHQ8L2Rpdj5cblxuXHRcdFx0XHRcdFx0PE1vZGFsIGNsYXNzTmFtZT17Y3NzLmNhbGx9IGFjdGlvbj0n0JfQsNC/0LjRgdCw0YLRjNGB0Y8nIC8+XG5cblx0XHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPXtjc3MuYWRkcmVzc30+XG5cdFx0XHRcdFx0XHRcdDxzcGFuPtCzLiDQntC80YHQuiwg0YPQuy4g0KXQuNC80LjQutC+0LIsIDYwPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHQ8YSBocmVmPVwidGVsOjgzODEyNDkyNTAwXCI+KzcgKDM4MTIpIDQ5LTI1LTAwPC9hPlxuXHRcdFx0XHRcdFx0PC9kaXY+XG5cblx0XHRcdFx0XHQ8L2FuaW1hdGVkLmRpdj5cblx0XHRcdFx0KSl9XG5cblx0XHRcdDwvZGl2PlxuXHRcdDwvaGVhZGVyPlxuXHQpXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./tags/header/index.jsx\n");

/***/ })

})