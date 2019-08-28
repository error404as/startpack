"use strict";

var m = [1, 2, 3, 4, 5];
m.map(function (el) {
  return el + 4;
}).filter(function (e) {
  return e < 5;
});
var mm = 1;
var mm2 = 1;