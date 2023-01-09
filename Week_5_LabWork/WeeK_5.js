var a = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (var i in a) {
  console.log("row " + i);
  for (var j in a[i]) {
  }
}

//                                                  ON CLICK
var el = document.getElementById("test");
var text = "";
var results = "";
el.onclick = function (e) {
  for (var i = 1; i >= 0; i--) {
    results += i + "<br />";
  }
  document.getElementById("section").innerHTML = text + results;
};

function focusFunction() {
  document.getElementById("myInput").style.background = "yellow";
}

function blurFunction() {
  document.getElementById("myInput").style.background = "red";
}

var bodyElem = document.getElementsByTagName("body")[0];

function showKeyInfo(event) {
  var infoElem = document.getElementById("key-info");

  infoElem.innerHTML = "";

  infoElem.insertAdjacentHTML(
    "beforeend",
    "<p>You pressed the " + String.fromCharCode(event.which) + " key.</p>"
  );
}

bodyElem.addEventListener("keypress", showKeyInfo);

//                                                 POSITION OF POINTER

var IE = document.all ? true : false;

if (!IE) document.captureEvents(Event.MOUSEMOVE);

document.onmousemove = getMouseXY;

var tempX = 0;
var tempY = 0;
function getMouseXY(e) {
  if (IE) {
    tempX = event.clientX + document.body.scrollLeft;
    tempY = event.clientY + document.body.scrollTop;
  } else {
    tempX = e.clientX;
    tempY = e.clientY;
  }

  if (tempX < 0) {
    tempX = 0;
  }
  if (tempY < 0) {
    tempY = 0;
  }
  document.Show.MouseX.value = tempX;
  document.Show.MouseY.value = tempY;
  return true;
}

//
