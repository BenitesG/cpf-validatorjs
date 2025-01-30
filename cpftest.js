const button = document.querySelector('.send');
const input = document.querySelector('.cpf')

button.addEventListener("click", function () {
    let valor = input.value.trim();
    // Retirar caracteres
    cpf = valor.replace(/\D/g, "");
    if (valor === "") {
        alert("Por favor, digite algo.");
    } else if (!isNaN(cpf) && cpf !== " ") {
        if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
            let paragrafo = document.querySelector("p");
            if (paragrafo) {
                paragrafo.classList.remove("positivo");
                paragrafo.classList.add("negativo");
                return paragrafo.textContent = "CPF Inválido";
            }

            if (!paragrafo) {
                paragrafo = document.createElement("p");
                paragrafo.textContent = "CPF Inválido";
                paragrafo.classList.add("negativo");
                return document.querySelector(".resultado").appendChild(paragrafo); // Adiciona ao DOM
            }

        }

        let soma = 0, resto;

        // Cálculo do 1º digito
        for (let i = 0; i < 9; i++) {
            soma += parseInt(cpf[i]) * (10 - i);
        }
        resto = soma % 11;
        let dv1 = resto < 2 ? 0 : 11 - resto;

        // Cálculo do 2º digito
        soma = 0;
        for (let i = 0; i < 10; i++) {
            soma += parseInt(cpf[i]) * (11 - i);
        }
        resto = soma % 11;
        let dv2 = resto < 2 ? 0 : 11 - resto;

        // Verifica se os digitos são do cpf
        if (dv1 == cpf[9] && dv2 == cpf[10]) {
            let paragrafo = document.querySelector("p");

            if (paragrafo) {
                paragrafo.classList.remove("negativo");
                paragrafo.classList.add("positivo");
                return paragrafo.textContent = "CPF Válido";
            }

            if (!paragrafo) {
                paragrafo = document.createElement("p");
                paragrafo.textContent = "CPF Válido";
                paragrafo.classList.add("positivo");
                return document.querySelector(".resultado").appendChild(paragrafo);
            }

        }


        else {
            let paragrafo = document.querySelector("p");
            if (paragrafo) {
                paragrafo.classList.remove("positivo");
                paragrafo.classList.add("negativo");
                return paragrafo.textContent = "CPF Inválido";
            }

            else if (!paragrafo) {
                paragrafo = document.createElement("p");
                paragrafo.textContent = "CPF Inválido";
                paragrafo.classList.add("negativo");
                return document.querySelector(".resultado").appendChild(paragrafo);

            }

        }
    }
},
)
