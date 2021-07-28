function func1() {
    var numberOne = Number(document.getElementById("number_1").value);
    var numberTwo = Number(document.getElementById("number_2").value);
    var numberThree = Number(document.getElementById("number_3").value);
    var result = numberOne + numberTwo + numberThree;

    document.getElementById("result").innerHTML = result;
}


function func2() {
    var temperature = Number(document.getElementById("temp").value);
    var resulTemp = (temperature * 1.8) + 32;

    document.getElementById("result-temp").innerHTML = resulTemp;
}


function func3() {
    var sideA = Number(document.getElementById("side-a").value);
    var sideB = Number(document.getElementById("side-b").value);
    var resultArea = sideA * sideB;
    var resultPerimetr = (sideA + sideB) * 2;

    document.getElementById("result-area").innerHTML = resultArea;
    document.getElementById("result-perimetr").innerHTML = resultPerimetr;
}
