var unitDisplay = "";
var queue = [];

var input = function(n) {
if (queue.length == 2) {
  unitDisplay = ""
  var show = document.getElementById('output');
  show.innerHTML = unitDisplay + n;
  unitDisplay = unitDisplay + n;
  queue.push(unitDisplay);
  }
else if (queue.length > 2) {
  var show = document.getElementById('output');
  show.innerHTML = queue[2] + n;
  unitDisplay = queue[2] + n;
  queue[2] = unitDisplay;
  }
else {
  var show = document.getElementById('output');
  show.innerHTML = unitDisplay + n;
  unitDisplay = unitDisplay + n;
  }
};

var clear = function() {
  document.getElementById('output').innerText = "0"
  queue = [];
  unitDisplay = "";
}

var toPercent = function() {
  unitDisplay = unitDisplay / 100;
  document.getElementById('output').innerText = unitDisplay;
}

// Major problem with correct result involving negatives
var toNegative = function() {
  if (queue.length > 1) {
    unitDisplay = unitDisplay - (unitDisplay * 2);
    document.getElementById('output').innerText = unitDisplay;
    queue[2] = unitDisplay;
    }
  else {
    unitDisplay = unitDisplay - (unitDisplay * 2);
    document.getElementById('output').innerText = unitDisplay;
    }
}

var toQueueDivide = function() {
  if (queue.length > 1) {
    null
    }
  else {
    queue.push(unitDisplay);
    queue.push("/");
    }
}

var toQueueTimes = function() {
  if (queue.length > 1) {
    null
    }
  else {
    queue.push(unitDisplay);
    queue.push("×");
    }
}

var toQueueSubtract = function() {
  if (queue.length > 1) {
    null
    }
  else {
    queue.push(unitDisplay);
    queue.push("-");
    }
}

var toQueuePlus = function() {
  if (queue.length > 1) {
    null
    }
  else {
    queue.push(unitDisplay);
    queue.push("+");
    }
}

var toEquals = function() {
  switch(queue[1]) {
    case "/":
        maths = Number(queue[0]) / Number(queue[2]);
        document.getElementById('output').innerText = maths;
        queue = [];
        unitDisplay = maths;
        break;
    case "×":
        maths = Number(queue[0]) * Number(queue[2]);
        document.getElementById('output').innerText = maths;
        queue = [];
        unitDisplay = maths;
        break;
    case "-":
        maths = Number(queue[0]) - Number(queue[2]);
        document.getElementById('output').innerText = maths;
        queue = [];
        unitDisplay = maths;
        break;
    case "+":
        maths = Number(queue[0]) + Number(queue[2]);
        document.getElementById('output').innerText = maths;
        queue = [];
        unitDisplay = maths;
        break;
    }
  }

document.getElementById("ac").addEventListener("click", clear);

document.getElementById("percent").addEventListener("click", toPercent);

document.getElementById("plusMinus").addEventListener("click", toNegative);

document.getElementById("divide").addEventListener("click", toQueueDivide);

document.getElementById("times").addEventListener("click", toQueueTimes);

document.getElementById("subtract").addEventListener("click", toQueueSubtract);

document.getElementById("plus").addEventListener("click", toQueuePlus);

document.getElementById("equals").addEventListener("click", toEquals);
