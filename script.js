
const button = document.querySelector("button");
const input_number = document.querySelector("#input");
const input_numero = document.querySelector("#input1");
const resultado = document.querySelector("#result")

function buttonOnClick() {
   const sumaImput = Number(input.value) + parseInt(input1.value)
   resultado.innerText = "El Resultado es: " + sumaImput
}