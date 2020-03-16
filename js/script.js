const btns = document.querySelector("#btns");

const listener = event => {
  if (event.target.dataset.calc) {
    calkAndWrite();
  } else if (event.target.dataset.clear) {
    cleanEl();
  }
};

btns.addEventListener("click", listener);

function writeS(S) {
  document.getElementById("area").innerHTML = `area : ${S} m<sup>2</sup>`;
}

function drawTriangle(context, left_padding, top_padding, height, width) {
  context.beginPath();
  context.moveTo(width / 2, height / 2);
  context.lineTo(
    parseInt(document.getElementById("side_a").value) + width / 2,
    height / 2
  );
  context.font = "10px serif";
  context.textAlign = "center";
  context.fillText(
    "side a = " + document.getElementById("side_a").value,
    width / 2 + parseInt(document.getElementById("side_a").value) / 2,
    height / 2 - 5
  );
  context.lineTo(
    width / 2,
    parseInt(document.getElementById("side_b").value) + height / 2
  );
  context.closePath();
  context.stroke();
  context.save();
  context.translate(0, 0);
  context.rotate(Math.PI / 2);
  context.font = "10px serif";
  context.textAlign = "center";
  context.fillText(
    "side b =" + document.getElementById("side_b").value,
    height / 2 + parseInt(document.getElementById("side_b").value) / 2,
    -35
  );
  context.restore();
}

function getContextCanv(elID) {
  const canvas = document.getElementById(elID);
  const context = canvas.getContext("2d");
  return { canvas, context };
}

function cleanCanvas(elID) {
  const { canvas, context } = getContextCanv("canvas");
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function cleanEl() {
  document.getElementById("side_a").value = "";
  document.getElementById("side_b").value = "";
  document.getElementById("area").innerHTML = "";
  cleanCanvas("canvas");
}

function calkAndWrite() {
  const side_a = document.getElementById("side_a").value;
  const side_b = document.getElementById("side_b").value;
  const area = calcAreaTriangle(side_a, side_b);
  writeS(area);
  cleanCanvas("canvas");
  const { context } = getContextCanv("canvas");
  drawTriangle(context, 0, 0, 100, 100);
}
