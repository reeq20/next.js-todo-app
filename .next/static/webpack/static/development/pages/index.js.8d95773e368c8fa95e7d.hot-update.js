webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _this = undefined,
    _jsxFileName = "/Users/sugawarariku/Documents/_Lo_Private/_JS_Study/React/Next/next-todo/pages/index.jsx";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var App = function App() {
  //　作成したtodo を入れておくためのstate
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]),
      todos = _useState[0],
      setTodos = _useState[1]; // フォームに入力された値をtodoに登録するまでに入れておくためのstate


  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      tmpTodo = _useState2[0],
      setTmpTodo = _useState2[1];

  var addTodo = function addTodo() {
    setTodos([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(todos), [tmpTodo]));
    setTmpTodo("");
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, "Todo App"), __jsx("div", {
    className: "form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    name: "todo",
    onChange: function onChange(e) {
      return setTmpTodo(e.target.value);
    },
    value: tmpTodo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }), __jsx("button", {
    onClick: addTodo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  }, "Add")), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, todos.map(function (todo, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 18
      }
    }, todo);
  })), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }, "\n        \n        "));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.8d95773e368c8fa95e7d.hot-update.js.map