function addInput() {
const val1 = document.getElementById('input1').value;
const val2 = document.getElementById('input2').value;

output = +val1 + +val2;
document.getElementById('answer').innerHTML = output;
return output
}
