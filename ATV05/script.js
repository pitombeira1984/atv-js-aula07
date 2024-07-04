function criarFuncaoSoma(num1) {
    return function(num2) {
        return num1 + num2;
    };
}

document.addEventListener('DOMContentLoaded', () => {
    const primeiroNumeroInput = document.getElementById('primeiroNumero');
    const criarFuncaoBtn = document.getElementById('criarFuncaoBtn');
    const segundaParte = document.getElementById('segundaParte');
    const segundoNumeroInput = document.getElementById('segundoNumero');
    const somarBtn = document.getElementById('somarBtn');
    const resultadoDiv = document.getElementById('resultado');
    const resultadoValor = document.getElementById('resultadoValor');

    let funcaoSoma;

    criarFuncaoBtn.addEventListener('click', () => {
        const primeiroNumero = parseFloat(primeiroNumeroInput.value);
        if (!isNaN(primeiroNumero)) {
            funcaoSoma = criarFuncaoSoma(primeiroNumero);
            segundaParte.classList.remove('hidden');
        } else {
            alert('Por favor, digite um número válido.');
        }
    });

    somarBtn.addEventListener('click', () => {
        const segundoNumero = parseFloat(segundoNumeroInput.value);
        if (funcaoSoma && !isNaN(segundoNumero)) {
            const resultado = funcaoSoma(segundoNumero);
            resultadoValor.textContent = resultado;
            resultadoDiv.classList.remove('hidden');
        } else {
            alert('Por favor, digite um número válido.');
        }
    });
});
