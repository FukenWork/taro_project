(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ "./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _class, _temp2;

var _taroWeapp = __webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.6@@tarojs/taro-weapp/index.js");

var _taroWeapp2 = _interopRequireDefault(_taroWeapp);

__webpack_require__(/*! ./index.scss */ "./src/pages/index/index.scss");

var _userAction = __webpack_require__(/*! ../../actions/user-action */ "./src/actions/user-action.jsx");

var _redux = __webpack_require__(/*! @tarojs/redux */ "./node_modules/_@tarojs_redux@2.2.10@@tarojs/redux/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Index = (_temp2 = _class = function (_BaseComponent) {
  _inherits(Index, _BaseComponent);

  function Index() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [this].concat(args))), _this), _this.$usedState = ["$compid__126", "$compid__127", "$compid__128", "username", "age", "HandleSaveUserInfo", "getUserInfo"], _this.config = {
      navigationBarTitleText: '首页'
    }, _this.handleOpen = function () {
      // 存储
      _this.props.HandleSaveUserInfo({ id: 123456, usename: 'xiaozhang', age: '123' });
      // 获取
      console.log(_this.props.getUserInfo);
    }, _this.handleClose = function (e) {
      console.log(e);
    }, _this.customComponents = ["AtButton", "AtIcon", "Banner"], _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Index, [{
    key: 'componentWillMount',
    value: function componentWillMount() {}
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {}
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {}
  }, {
    key: 'componentDidShow',
    value: function componentDidShow() {}
  }, {
    key: 'componentDidHide',
    value: function componentDidHide() {}
  }, {
    key: '_constructor',
    value: function _constructor(props) {
      _get(Index.prototype.__proto__ || Object.getPrototypeOf(Index.prototype), '_constructor', this).call(this, props);
      this.state = {
        username: 'xiaoming',
        age: 12
      };
      this.$$refs = new _taroWeapp2.default.RefsArray();
    }
  }, {
    key: '_createData',
    value: function _createData() {
      this.__state = arguments[0] || this.state || {};
      this.__props = arguments[1] || this.props || {};
      var __isRunloopRef = arguments[2];
      var __prefix = this.$prefix;
      ;

      var _genCompid = (0, _taroWeapp.genCompid)(__prefix + "$compid__126"),
          _genCompid2 = _slicedToArray(_genCompid, 2),
          $prevCompid__126 = _genCompid2[0],
          $compid__126 = _genCompid2[1];

      var _genCompid3 = (0, _taroWeapp.genCompid)(__prefix + "$compid__127"),
          _genCompid4 = _slicedToArray(_genCompid3, 2),
          $prevCompid__127 = _genCompid4[0],
          $compid__127 = _genCompid4[1];

      var _genCompid5 = (0, _taroWeapp.genCompid)(__prefix + "$compid__128"),
          _genCompid6 = _slicedToArray(_genCompid5, 2),
          $prevCompid__128 = _genCompid6[0],
          $compid__128 = _genCompid6[1];

      _taroWeapp.propsManager.set({
        "type": "primary",
        "onClick": this.handleOpen
      }, $compid__126, $prevCompid__126);
      _taroWeapp.propsManager.set({
        "value": "bell",
        "size": "30",
        "color": "#f00"
      }, $compid__127, $prevCompid__127);
      _taroWeapp.propsManager.set({
        "age": this.__state.age,
        "close": this.handleClose
      }, $compid__128, $prevCompid__128);
      Object.assign(this.__state, {
        $compid__126: $compid__126,
        $compid__127: $compid__127,
        $compid__128: $compid__128
      });
      return this.__state;
    }
  }]);

  return Index;
}(_taroWeapp.Component), _class.$$events = [], _class.$$componentPath = "pages/index/index", _temp2);


var mapToStateProps = function mapToStateProps(state) {
  return {
    getUserInfo: state.getUserInfo
  };
};
var mapToDispatchProps = {
  HandleSaveUserInfo: _userAction.HandleSaveUserInfo
};

var Index__Connected = (0, _redux.connect)(mapToStateProps, mapToDispatchProps)(Index);
exports.default = Index__Connected;

Component(__webpack_require__(/*! @tarojs/taro-weapp */ "./node_modules/_@tarojs_taro-weapp@2.2.6@@tarojs/taro-weapp/index.js").default.createComponent(Index__Connected, true));

/***/ }),

/***/ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\project\\新建文件夹\\taro\\project\\src!./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:/project/新建文件夹/taro/project/src!./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pages/index/index.wxml";

/***/ }),

/***/ "./src/actions/user-action.jsx":
/*!*************************************!*\
  !*** ./src/actions/user-action.jsx ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HandleSaveUserInfo = undefined;

var _actionTypes = __webpack_require__(/*! ./action-types */ "./src/actions/action-types.jsx");

var Type = _interopRequireWildcard(_actionTypes);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * 保存用户信息
 * @param {*} preload
 */
var HandleSaveUserInfo = exports.HandleSaveUserInfo = function HandleSaveUserInfo(preload) {
  return {
    type: Type.SAVE_USER_INFO,
    data: preload
  };
};

/***/ }),

/***/ "./src/pages/index/index.jsx":
/*!***********************************!*\
  !*** ./src/pages/index/index.jsx ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.jsx?taro&type=template&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.jsx?taro&type=script&parse=PAGE& */ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));




/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=script&parse=PAGE&":
/*!****************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=script&parse=PAGE& ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=script&parse=PAGE& */ "./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=script&parse=PAGE&");
/* harmony import */ var _node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_script_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/pages/index/index.jsx?taro&type=template&parse=PAGE&":
/*!******************************************************************!*\
  !*** ./src/pages/index/index.jsx?taro&type=template&parse=PAGE& ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_project_taro_project_src_node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!file-loader?name=[path][name].wxml&context=D:/project/新建文件夹/taro/project/src!../../../node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!../../../node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js??ref--6-0!./index.jsx?taro&type=template&parse=PAGE& */ "./node_modules/_file-loader@4.3.0@file-loader/dist/cjs.js?name=[path][name].wxml&context=D:\\project\\新建文件夹\\taro\\project\\src!./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/miniTemplateLoader.js!./node_modules/_@tarojs_mini-runner@2.2.6@@tarojs/mini-runner/dist/loaders/wxTransformerLoader.js?!./src/pages/index/index.jsx?taro&type=template&parse=PAGE&");
/* harmony import */ var _file_loader_name_path_name_wxml_context_D_project_taro_project_src_node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_file_loader_name_path_name_wxml_context_D_project_taro_project_src_node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _file_loader_name_path_name_wxml_context_D_project_taro_project_src_node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _file_loader_name_path_name_wxml_context_D_project_taro_project_src_node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_miniTemplateLoader_js_node_modules_tarojs_mini_runner_2_2_6_tarojs_mini_runner_dist_loaders_wxTransformerLoader_js_ref_6_0_index_jsx_taro_type_template_parse_PAGE___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/pages/index/index.scss":
/*!************************************!*\
  !*** ./src/pages/index/index.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

},[["./src/pages/index/index.jsx","runtime","vendors","common"]]]);