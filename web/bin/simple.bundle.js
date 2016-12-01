webpackJsonp([3],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\n__webpack_require__(1); // for browser compatibility\n__webpack_require__(2); // for browser compatibility\n\nvar React = __webpack_require__(300);\nvar ReactDOM = __webpack_require__(330);\n\nvar DemoSimple = React.createClass({\n\tdisplayName: 'DemoSimple',\n\n\tgetInitialState: function getInitialState() {\n\t\treturn {\n\t\t\tfoo: 'foo'\n\t\t};\n\t},\n\n\tpropTypes: {\n\t\tbar: React.PropTypes.string\n\t},\n\n\tgetDefaultProps: function getDefaultProps() {\n\t\treturn {\n\t\t\tbar: 'bar'\n\t\t};\n\t},\n\n\trender: function render() {\n\t\tvar sceneRef = this;\n\t\treturn React.createElement(\n\t\t\t'div',\n\t\t\tnull,\n\t\t\t'Whatever...',\n\t\t\tReact.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tsceneRef.state.foo\n\t\t\t),\n\t\t\tReact.createElement(\n\t\t\t\t'div',\n\t\t\t\tnull,\n\t\t\t\tsceneRef.props.bar\n\t\t\t)\n\t\t);\n\t}\n});\n\nReactDOM.render(React.createElement(DemoSimple, null), document.getElementById('react-root'));\n\n//////////////////\n// WEBPACK FOOTER\n// ./simple.web.js\n// module id = 0\n// module chunks = 3\n//# sourceURL=webpack:///./simple.web.js?");

/***/ }
]);