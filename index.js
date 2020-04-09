// Sqrt(((((diameter - seamAlow)* pi)/strips)^2)/2)
function calculateBiasCircumfrence() {
  var diameter = document.getElementById("Diameter").value;
  var seamAlow = document.getElementById("seamAlow").value;
  var stripNum = document.getElementById("stripNum").value;
  var out = Math.sqrt(
    Math.pow(
      ((parseFloat(diameter) - parseFloat(seamAlow)) * 3.14) /
        parseFloat(stripNum),
      2
    ) / 2
  );
  document.getElementById("Output").innerHTML = out;
  console.log(out);
}
// select text ctrl + d
