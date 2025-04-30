// campos de entrada
const inputNum1 = document.getElementById("input-num-1");
const inputNum2 = document.getElementById("input-num-2");

// botones
const calculateBtn = document.getElementById("calculate-btn");
const clearBtn = document.getElementById("clear-btn");
const copyBtn = document.getElementById("copy-btn");

// campo de resultado
const result = document.getElementById("result");

// función para calcular y mostrar el resultado o para eliminar el resultado
const handleResult = (action, sum = 0) => {
    if (action === "add") {
        result.value = sum;
        result.classList.add("scale");
        copyBtn.classList.add("show");
    } else if (action === "remove") {
        result.value = "00.00";
        result.classList.remove("scale");
        copyBtn.classList.remove("show");
    }
};

// calcular el resultado y mostrarlo
calculateBtn.addEventListener("click", function() {
    var number1 = parseFloat(inputNum1.value);
    var number2 = parseFloat(inputNum2.value);
    var sum = number1 + number2;
    handleResult("add", sum);
});

// reiniciar todo al hacer clic en el botón de AC
clearBtn.addEventListener("click", function() {
    inputNum1.value = inputNum2.value = "";
    handleResult("remove");
});

// copiar el resultado al portapapeles
copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(result.value);
    alert(`El resultado ${result.value} se ha copiado al portapapeles.`);
});

// eliminar el resultado al cambiar los valores de los campos de entrada
inputNum1.addEventListener("input", function() { handleResult("remove"); });
inputNum2.addEventListener("input", function() { handleResult("remove"); });