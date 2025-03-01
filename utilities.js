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
