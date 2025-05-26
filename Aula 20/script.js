
function loop() {
    for (var x = 0; x <= 1000; x += 2) {
        var impar = 999 - x
        document.writeln(x)
        document.writeln(impar)
    }

}

function number() {
    let text = ""
    let x = 0
    while (x < 10) {
        text += "The number is " + x; x++;
    }
}

function calculo() {
    var nmr1 = Number(document.getElementById("nmr1").value)
    var nmr2 = Number(document.getElementById("nmr2").value)
    var operacao = document.getElementById("operacao").value
    var resultado

    switch (
    operacao
    ) {
        case "soma": resultado = nmr1 + nmr2;
            break;
        case "multiplicacao": resultado = nmr1 * nmr2;
            break;
        case "divisao": resultado = nmr1 / nmr2;
            break;
        case "subtracao": resultado = nmr1 - nmr2;
            break;
    }

    window.alert(resultado)
}
