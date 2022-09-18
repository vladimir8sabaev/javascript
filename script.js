"use strict";

function calculateVolumeAndArea(a) {
  if (typeof a != "number" || a <= 0 || Number.isInteger(a) === false) {
    return "При вычислении произошла ошибка";
  } else {
    return (
      "Объем куба: " +
      a * a * a +
      ", " +
      "площадь всей поверхности: " +
      a * a * 6
    );
  }
}
calculateVolumeAndArea(15.5);
