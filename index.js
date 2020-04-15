// Sqrt(((((diameter - seamAlow)* pi)/strips)^2)/2)
function calculateBiasCircumfrence() {
  var diameter = document.getElementById("Diameter").value;
  var out = Math.sqrt(
    Math.pow(((parseFloat(diameter) - 0.25) * 3.14) / 7, 2) / 2
  );
  document.getElementById("Output").innerHTML = out;
  console.log(out);
}
// select text ctrl + d
