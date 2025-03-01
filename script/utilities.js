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
  createElm.classList.add("his");
  createElm.innerText = `You have completed this task ${ShopEase} at ${currentTime}`;
  addvalue.appendChild(createElm);
}
