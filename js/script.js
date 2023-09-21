function calcularIMC() {
    const pesoInput = document.getElementById('peso');
    const alturaInput = document.getElementById('altura');
    const result = document.getElementById('result');

    const peso = parseFloat(pesoInput.value);
    const altura = parseFloat(alturaInput.value);

    if (!isNaN(peso) && !isNaN(altura) && altura > 0) {
        const imc = calcular(peso, altura);
        const mensagem = interpretarResultado(imc);
        result.innerHTML = `Seu IMC é ${imc.toFixed(2)} - ${mensagem}`;
    } else {
        alert("Por favor, insira valores válidos.")
    }
}

function calcular(peso, altura) {
    return peso / (altura * altura);
}

function interpretarResultado(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Peso normal";
    } else if (imc >= 25 && imc < 29.9) {
        return "Sobrepeso";
    } else if (imc >= 30 && imc < 34.9) {
        return "Obesidade Grau I";
    } else if (imc >= 35 && imc < 39.9) {
        return "Obesidade Grau II";
    } else {
        return "Obesidade Grau III";
    }
}