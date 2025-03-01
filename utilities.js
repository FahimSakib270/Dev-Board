// task assign reduce
function reduceTask(taskNo) {
  const taskNumber = document.getElementById(taskNo).innerText;
  const improvedTaskNum = parseInt(taskNumber);
  let newNum = improvedTaskNum - 1;
  document.getElementById(taskNo).innerText = newNum;
}

// navNumber increase
function navIncrease(navNum) {
  const navNumber = document.getElementById(navNum).innerText;
  const improvednavNum = parseInt(navNumber);
  let newNum = improvednavNum + 1;
  document.getElementById(navNum).innerText = newNum;
}
// Function to add dynamic date
function dateDynamic() {
  const now = new Date();
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

  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const monthDate = now.getDate();
  const year = now.getFullYear();
  const pDate = document.getElementById("show-time");
  pDate.innerText = `${day}, ${month} ${monthDate} ${year}`;
}
dateDynamic();

//current time
function getCurrentTime() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${hours}:${formattedMinutes} ${ampm}`;
}
// Activity Log

function dynmicActivityValue(id, btnTitle) {
  const btnT = document.getElementById(btnTitle);
  const ShopEase = btnT.innerText;
  const createElm = document.createElement("p");
  let addvalue = document.getElementById(id);
  const currentTime = getCurrentTime();
  createElm.innerText = `user click on this ${ShopEase} at ${currentTime}`;
  addvalue.appendChild(createElm);
}
