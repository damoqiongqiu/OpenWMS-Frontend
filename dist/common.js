(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/utils/color.util.ts":
/*!*************************************!*\
  !*** ./src/app/utils/color.util.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var baseColor = [
    '#25859e',
    '#6acece',
    '#e78816',
    '#eabc7f',
    '#12619d',
    '#ad2532',
    '#15938d',
    '#b3aa9b',
    '#042d4c'
];
var genColor = function (arr) {
    var num = 0;
    var color = [];
    for (var i = 0; i < arr.length; i++) {
        if (num < baseColor.length) {
            color[i] = baseColor[num++];
        }
        else {
            num = 0;
            color[i] = baseColor[num++];
        }
    }
    return color;
};
/* harmony default export */ __webpack_exports__["default"] = ({
    baseColor: baseColor,
    genColor: genColor
});


/***/ })

}]);
//# sourceMappingURL=common.js.map