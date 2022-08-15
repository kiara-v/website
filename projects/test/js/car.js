// 🚗 Svg animation
// Author: Saif (@saifkeralite)

// On mouse click action.
let carObject = document.getElementById("car-object");
document.onmousedown = function () {
  console.log(carObject);
  carObject.classList.add("on");
};
document.onmouseup = function () {
  carObject.classList.remove("on");
};