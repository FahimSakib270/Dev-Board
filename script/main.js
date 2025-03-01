document.getElementById("btn-shop").addEventListener("click", function (evt) {
  let time = getCurrentTime();
  alert(`Board updated successfully at ${time}`);
  reduceTask("task-no");
  navIncrease("nav-num");
  dynmicActivityValue("History", "fix-mobileBtn");
  document.getElementById("btn-shop").setAttribute("disabled", true);
  checkTaskCompletion();
});

document.getElementById("btn-cloudSync").addEventListener("click", function () {
  let time = getCurrentTime();
  alert(`Board updated successfully at ${time}`);
  reduceTask("task-no");
  navIncrease("nav-num");
  dynmicActivityValue("History", "CloudSync-id");
  document.getElementById("btn-cloudSync").setAttribute("disabled", true);
  checkTaskCompletion();
});

document.getElementById("btn-swiftpay").addEventListener("click", function () {
  let time = getCurrentTime();
  alert(`Board updated successfully at ${time}`);
  reduceTask("task-no");
  navIncrease("nav-num");
  dynmicActivityValue("History", "Home-page");
  document.getElementById("btn-swiftpay").setAttribute("disabled", true);
  checkTaskCompletion();
});

document.getElementById("btn-meta").addEventListener("click", function () {
  let time = getCurrentTime();
  alert(`Board updated successfully at ${time}`);
  reduceTask("task-no");
  navIncrease("nav-num");
  dynmicActivityValue("History", "emoji");
  document.getElementById("btn-meta").setAttribute("disabled", true);
  checkTaskCompletion();
});

document.getElementById("btn-google").addEventListener("click", function () {
  let time = getCurrentTime();
  alert(`Board updated successfully at ${time}`);
  reduceTask("task-no");
  navIncrease("nav-num");
  dynmicActivityValue("History", "OpenAI");
  document.getElementById("btn-google").setAttribute("disabled", true);
  checkTaskCompletion();
});

document.getElementById("btn-glassdoar").addEventListener("click", function () {
  let time = getCurrentTime();
  alert(`Board updated successfully at ${time}`);

  reduceTask("task-no");
  navIncrease("nav-num");
  dynmicActivityValue("History", "job-search");
  document.getElementById("btn-glassdoar").setAttribute("disabled", true);
  checkTaskCompletion();
});

// to get complete alert()
function checkTaskCompletion() {
  let newText = document.getElementById("task-no").innerText;
  let updatedNewText = parseInt(newText);
  if (updatedNewText === 0) {
    alert("Congratulations! You have completed all the tasks.");
  }
}

document.getElementById("activity-btn").addEventListener("click", function () {
  let data = document.getElementById("History");
  data.innerText = "";
});

//random color

function getRandomColor() {
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  document.body.style.backgroundColor = randomColor;
}
document.getElementById("nav-img").addEventListener("click", function () {
  getRandomColor();
});

//  dynamically update the time
function updateTime() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const now = new Date();
  const dayName = days[now.getDay()];
  const monthName = months[now.getMonth()];
  const dayNumber = now.getDate();
  const year = now.getFullYear();

  const formattedDate = `${dayName}, ${monthName} ${dayNumber} ${year}`;
  document.getElementById("show-time").textContent = formattedDate;
}
updateTime();
