  const botoes = document.querySelectorAll("button");

    botoes.forEach(function (botao) {
        botao.addEventListener("click", function () {
            const contador = botao.querySelector("span");

            if (botao.classList.contains("clicado")) {
                // Se já clicou, tira o voto
                contador.textContent = "0";
                botao.classList.remove("clicado");
            } else {
                // Se ainda não clicou, adiciona o voto
                contador.textContent = "1";
                botao.classList.add("clicado");
            }
        });
    });
