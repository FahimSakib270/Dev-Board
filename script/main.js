document.getElementById("btn-shop").addEventListener("click", function (evt) {
  let time = getCurrentTime();
  alert(`Board updated successfully at ${time}`);
  reduceTask("task-no");
  navIncrease("nav-num");
  dynmicActivityValue("History", "fix-mobileBtn");
  document.getElementById("btn-shop").setAttribute("disabled", true);
});

document.getElementById("btn-cloudSync").addEventListener("click", function () {
  let time = getCurrentTime();
  alert(`Board updated successfully at ${time}`);
  reduceTask("task-no");
  navIncrease("nav-num");
  dynmicActivityValue("History", "CloudSync-id");
  document.getElementById("btn-cloudSync").setAttribute("disabled", true);
});

document.getElementById("btn-swiftpay").addEventListener("click", function () {
  let time = getCurrentTime();
  alert(`Board updated successfully at ${time}`);
  reduceTask("task-no");
  navIncrease("nav-num");
  dynmicActivityValue("History", "Home-page");
  document.getElementById("btn-swiftpay").setAttribute("disabled", true);
});

document.getElementById("btn-meta").addEventListener("click", function () {
  let time = getCurrentTime();
  alert(`Board updated successfully at ${time}`);
  reduceTask("task-no");
  navIncrease("nav-num");
  dynmicActivityValue("History", "emoji");
  document.getElementById("btn-meta").setAttribute("disabled", true);
});

document.getElementById("btn-google").addEventListener("click", function () {
  let time = getCurrentTime();
  alert(`Board updated successfully at ${time}`);
  reduceTask("task-no");
  navIncrease("nav-num");
  dynmicActivityValue("History", "OpenAI");
  document.getElementById("btn-google").setAttribute("disabled", true);
});

document.getElementById("btn-glassdoar").addEventListener("click", function () {
  let time = getCurrentTime();
  alert(`Board updated successfully at ${time}`);
  alert(`congrats!!!you have completed the task `);
  reduceTask("task-no");
  navIncrease("nav-num");
  dynmicActivityValue("History", "job-search");
  document.getElementById("btn-glassdoar").setAttribute("disabled", true);
});

document.getElementById("activity-btn").addEventListener("click", function () {
  let data = document.getElementById("History");
  data.innerText = "";
});
