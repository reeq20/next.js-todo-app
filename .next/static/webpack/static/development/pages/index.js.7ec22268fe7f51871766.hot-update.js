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
    // formの内容が空白の場合はalertを出す
    if (tmpTodo === "") {
      alert("文字を入力してください");
      return;
    }

    setTodos([].concat(Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(todos), [tmpTodo]));
    setTmpTodo("");
  }; // todoを削除する処理


  var deleteTodo = function deleteTodo(index) {
    var newTodos = todos.filter(function (todo, todoIndex) {
      return index !== todoIndex;
    });
    console.log(newTodos);
    setTodos(newTodos);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }
  }, "TodoApp"), __jsx("div", {
    className: "form",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
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
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("button", {
    onClick: addTodo,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }, "Add")), __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }
  }, todos.map(function (todo, index) {
    return __jsx("li", {
      key: index,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 13
      }
    }, todo, __jsx("button", {
      onClick: function onClick() {
        return deleteTodo(index);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, "delete"));
  })), __jsx("style", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }
  }, "\n         h1 {\n          text-align: center;\n        }\n        .form {\n          display: flex;\n          justify-content: center;\n        }\n        ul {\n          width: 200px;\n          margin: 10px auto;\n        }\n        "));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.7ec22268fe7f51871766.hot-update.js.map