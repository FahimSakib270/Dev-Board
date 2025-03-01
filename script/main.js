document.getElementById("btn-shop").addEventListener("click", function (evt) {
  reduceTask("task-no");
  navIncrease("nav-num");

  document.getElementById("btn-shop").setAttribute("disabled", true);
});

document.getElementById("btn-cloudSync").addEventListener("click", function () {
  reduceTask("task-no");
  navIncrease("nav-num");
  document.getElementById("btn-cloudSync").setAttribute("disabled", true);
});

document.getElementById("btn-swiftpay").addEventListener("click", function () {
  reduceTask("task-no");
  navIncrease("nav-num");
  document.getElementById("btn-swiftpay").setAttribute("disabled", true);
});

document.getElementById("btn-meta").addEventListener("click", function () {
  reduceTask("task-no");
  navIncrease("nav-num");
  document.getElementById("btn-meta").setAttribute("disabled", true);
});

document.getElementById("btn-google").addEventListener("click", function () {
  reduceTask("task-no");
  navIncrease("nav-num");
  document.getElementById("btn-google").setAttribute("disabled", true);
});

document.getElementById("btn-glassdoar").addEventListener("click", function () {
  reduceTask("task-no");
  navIncrease("nav-num");
  document.getElementById("btn-glassdoar").setAttribute("disabled", true);
});
