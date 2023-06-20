"use strict";

var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  var sum = numbers.reduce(function (accum, number) {
    return accum + number;
  }, 0);
  return sum / numbers.length;
};
console.log("M\xE9dia Aritim\xE9tica Simples: ".concat(average(3, 6, 10, 9)));
var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * weight;
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    return accum + entry.weight;
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(weightedAverage({
  number: 9,
  weight: 3
}, {
  number: 7,
  weight: 1
}, {
  number: 10,
  weight: 1
})));
var weightedAverage2 = function weightedAverage2() {
  for (var _len3 = arguments.length, entries = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    entries[_key3] = arguments[_key3];
  }
  var sum = entries.reduce(function (accum, _ref2) {
    var number = _ref2.number,
      weight = _ref2.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);
  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(weightedAverage2({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
})));
var median = function median() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  var sortedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  }); // ordenar em ordem crescente
  var middle = Math.floor(sortedNumbers.length / 2);
  if (sortedNumbers.length % 2 === 0) {
    return sortedNumbers[middle];
  }
  var firstMedian = sortedNumbers[middle - 1];
  var secondMedian = sortedNumbers[middle];
  return average(firstMedian, secondMedian);
};
console.log("Mediana: ".concat(median(2, 5, 99, 4, 42, 7)));
console.log("Mediana: ".concat(median(15, 14, 8, 7, 3)));
var mode = function mode() {
  for (var _len5 = arguments.length, numbers = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    numbers[_key5] = arguments[_key5];
  }
  var quantities = numbers.map(function (number) {
    return [number, numbers.filter(function (n) {
      return number == n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  });
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));
