/* ================================= */
/* MATRIX BACKGROUND */
/* ================================= */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let matrixWidth;
let matrixHeight;
let columns;
let drops;

function iniciarMatrix() {

    matrixWidth = canvas.width = window.innerWidth;
    matrixHeight = canvas.height = window.innerHeight;

    const fontSize = 14;

    columns = Math.floor(matrixWidth / fontSize);

    drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -50;
    }

    function desenharMatrix() {

        ctx.fillStyle = "rgba(0, 0, 0, 0.06)";
        ctx.fillRect(0, 0, matrixWidth, matrixHeight);

        ctx.fillStyle = "#00ff66";
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {

            const caracteres =
                "01アイウエオカキクケコサシスセソABCDEFGHIJKLMNOPQRSTUVWXYZ";

            const texto =
                caracteres[Math.floor(Math.random() * caracteres.length)];

            ctx.fillText(
                texto,
                i * fontSize,
                drops[i] * fontSize
            );

            if (
                drops[i] * fontSize > matrixHeight &&
                Math.random() > 0.975
            ) {
                drops[i] = 0;
            }

            drops[i] += 0.7;
        }
    }

    setInterval(desenharMatrix, 45);
}

iniciarMatrix();

window.addEventListener("resize", () => {
    iniciarMatrix();
});


/* ================================= */
/* AULAS */
/* ================================= */

const aulas = {

    programacao: `
        <h2>COMO FUNCIONA A <span>PROGRAMAÇÃO</span></h2>

        <p>
            Programação é o processo de escrever instruções
            que um computador consegue executar.
        </p>

        <p>
            Essas instruções podem usar variáveis, condições,
            funções, loops e algoritmos para resolver problemas.
        </p>

        <p>
            Pense em um programa como uma sequência de ordens:
            entrada → processamento → resultado.
        </p>
    `,

    criacao: `
        <h2>O QUE VOCÊ PODE <span>CRIAR</span></h2>

        <p>
            Com programação você pode criar sites, jogos,
            aplicativos, ferramentas, sistemas e experiências
            interativas.
        </p>

        <p>
            HTML estrutura uma página, CSS cuida da aparência
            e JavaScript adiciona comportamento.
        </p>

        <p>
            O limite principal é sua criatividade e o que você
            aprende ao longo do caminho.
        </p>
    `,

    comecar: `
        <h2>COMEÇANDO DO <span>ZERO</span></h2>

        <p>
            Uma boa sequência para começar é aprender lógica
            de programação e depois praticar com projetos pequenos.
        </p>

        <p>
            Para a web, uma sequência simples é:
            HTML → CSS → JavaScript.
        </p>

        <p>
            Não tente aprender tudo de uma vez.
            Crie projetos pequenos e aumente a dificuldade
            aos poucos.
        </p>
    `
};

function mostrarAula(tipo) {

    const content = document.getElementById("aulaContent");

    content.innerHTML = aulas[tipo];

    abrirModal("aulaModal");
}


/* ================================= */
/* PESQUISA */
/* ================================= */

function pesquisarAulas() {

    const termo =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();

    const cards =
        document.querySelectorAll(".learning-card");

    cards.forEach(card => {

        const texto =
            card.innerText.toLowerCase();

        card.style.display =
            texto.includes(termo)
                ? ""
                : "none";
    });
}


/* ================================= */
/* MODAIS */
/* ================================= */

function abrirModal(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

function fecharModal(id) {

    const modal = document.getElementById(id);

    if (modal) {
        modal.classList.remove("active");
        document.body.style.overflow = "";
    }
}

document.querySelectorAll(".modal").forEach(modal => {

    modal.addEventListener("click", event => {

        if (event.target === modal) {
            modal.classList.remove("active");
            document.body.style.overflow = "";
        }

    });

});

document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        document.querySelectorAll(".modal").forEach(modal => {
            modal.classList.remove("active");
        });

        document.body.style.overflow = "";
    }

});


/* ================================= */
/* TERMINAL */
/* ================================= */

function abrirTerminal() {

    abrirModal("terminalModal");

    setTimeout(() => {

        document
            .getElementById("terminalInput")
            .focus();

    }, 100);
}

function terminalCommand(event) {

    if (event.key !== "Enter") {
        return;
    }

    const input =
        document.getElementById("terminalInput");

    const command =
        input.value.trim().toLowerCase();

    const output =
        document.getElementById("terminalOutput");

    if (!command) {
        return;
    }

    const line =
        document.createElement("p");

    line.innerHTML =
        `&gt; ${escaparHTML(command)}`;

    output.appendChild(line);

    let response = "";

    if (command === "help") {

        response =
            "Comandos: help, clear, about, jogos, status";

    } else if (command === "about") {

        response =
            "PROGRAMACAO.exe — central de aprendizado de programação.";

    } else if (command === "jogos") {

        response =
            "Módulo JOGOS: use o botão CRIAR JOGO para montar seu projeto.";

    } else if (command === "status") {

        response =
            "SISTEMA ONLINE — TODOS OS MÓDULOS PRINCIPAIS OPERACIONAIS.";

    } else if (command === "clear") {

        output.innerHTML = "";
        input.value = "";
        return;

    } else {

        response =
            `Comando "${escaparHTML(command)}" não encontrado. Digite help.`;
    }

    const responseLine =
        document.createElement("p");

    responseLine.textContent = response;

    output.appendChild(responseLine);

    output.scrollTop = output.scrollHeight;

    input.value = "";
}

function escaparHTML(texto) {

    return texto
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


/* ================================= */
/* MÓDULOS FUTUROS */
/* ================================= */

function moduloEmBreve(nome) {

    const content =
        document.getElementById("aulaContent");

    content.innerHTML = `
        <h2>${escaparHTML(nome)} <span>.exe</span></h2>

        <p>
            Este módulo ainda está sendo desenvolvido.
        </p>

        <p>
            O objetivo é transformar esta área em uma
            ferramenta realmente funcional, assim como
            o módulo JOGOS.
        </p>
    `;

    abrirModal("aulaModal");
}


/* ================================= */
/* JOGOS — CENTRAL DE CRIAÇÃO */
/* ================================= */

let etapaAtual = 1;

const projeto = {

    dimensao: null,

    estilo: null,

    personagem: "",

    mecanicas: []

};


/* ABRIR CENTRAL */

function abrirJogos() {

    resetarCriador();

    abrirModal("jogosModal");

}


/* RESET */

function resetarCriador() {

    etapaAtual = 1;

    projeto.dimensao = null;
    projeto.estilo = null;
    projeto.personagem = "";
    projeto.mecanicas = [];

    document
        .querySelectorAll(".game-step")
        .forEach(step => {

            step.classList.remove("active");

        });

    document
        .querySelector('.game-step[data-step="1"]')
        .classList.add("active");


    document
        .querySelectorAll(".choice-card")
        .forEach(card => {

            card.classList.remove("selected");

        });


    document
        .querySelectorAll(".mechanic")
        .forEach(button => {

            button.classList.remove("selected");

        });


    const character =
        document.getElementById("characterName");

    const preview =
        document.getElementById("characterPreview");

    if (character) {
        character.value = "";
    }

    if (preview) {
        preview.textContent = "SEU PERSONAGEM";
    }


    document
        .getElementById("generatedProject")
        .classList.remove("active");


    atualizarInterface();

}


/* ESCOLHER OPÇÃO */

function selecionarEscolha(elemento, tipo, valor) {

    const grupo =
        elemento.parentElement.querySelectorAll(".choice-card");

    grupo.forEach(card => {
        card.classList.remove("selected");
    });

    elemento.classList.add("selected");

    projeto[tipo] = valor;

}


/* MECÂNICAS */

function alternarMecanica(elemento, mecanica) {

    elemento.classList.toggle("selected");

    if (elemento.classList.contains("selected")) {

        if (!projeto.mecanicas.includes(mecanica)) {
            projeto.mecanicas.push(mecanica);
        }

    } else {

        projeto.mecanicas =
            projeto.mecanicas.filter(
                item => item !== mecanica
            );

    }

}


/* PERSONAGEM */

const characterInput =
    document.getElementById("characterName");

if (characterInput) {

    characterInput.addEventListener("input", () => {

        const nome =
            characterInput.value.trim();

        document
            .getElementById("characterPreview")
            .textContent =
            nome || "SEU PERSONAGEM";

        projeto.personagem = nome;

    });

}


/* PRÓXIMA ETAPA */

function proximaEtapa() {

    if (!validarEtapa()) {
        return;
    }

    if (etapaAtual < 5) {

        etapaAtual++;

        mostrarEtapa(etapaAtual);

    }

}


/* VOLTAR */

function voltarEtapa() {

    if (etapaAtual > 1) {

        etapaAtual--;

        mostrarEtapa(etapaAtual);

    }

}


/* MOSTRAR ETAPA */

function mostrarEtapa(numero) {

    document
        .querySelectorAll(".game-step")
        .forEach(step => {

            step.classList.remove("active");

        });

    const novaEtapa =
        document.querySelector(
            `.game-step[data-step="${numero}"]`
        );

    if (novaEtapa) {
        novaEtapa.classList.add("active");
    }


    atualizarInterface();


    if (numero === 5) {
        montarResumo();
    }

}


/* ATUALIZAR INTERFACE */

function atualizarInterface() {

    const porcentagem =
        etapaAtual * 20;

    document
        .getElementById("stepText")
        .textContent =
        `ETAPA ${String(etapaAtual).padStart(2, "0")}`;

    document
        .getElementById("stepPercent")
        .textContent =
        `${porcentagem}%`;

    document
        .getElementById("progressFill")
        .style.width =
        `${porcentagem}%`;


    const back =
        document.getElementById("backButton");

    const next =
        document.getElementById("nextButton");


    back.style.visibility =
        etapaAtual === 1
            ? "hidden"
            : "visible";


    if (etapaAtual === 5) {

        next.style.display = "none";

    } else {

        next.style.display = "block";

    }

}


/* VALIDAR */

function validarEtapa() {

    if (etapaAtual === 1) {

        if (!projeto.dimensao) {

            alert("Escolha 2D ou 3D para continuar.");

            return false;
        }

    }


    if (etapaAtual === 2) {

        if (!projeto.estilo) {

            alert("Escolha um estilo de jogo para continuar.");

            return false;
        }

    }


    if (etapaAtual === 3) {

        const nome =
            document
                .getElementById("characterName")
                .value
                .trim();

        if (!nome) {

            alert("Digite um nome para o personagem.");

            document
                .getElementById("characterName")
                .focus();

            return false;
        }

        projeto.personagem = nome;

    }


    if (etapaAtual === 4) {

        if (projeto.mecanicas.length === 0) {

            alert(
                "Escolha pelo menos uma mecânica para continuar."
            );

            return false;
        }

    }

    return true;
}


/* RESUMO */

function montarResumo() {

    const container =
        document.getElementById("projectSummary");

    const mecanicas =
        projeto.mecanicas.length
            ? projeto.mecanicas.join(", ")
            : "Nenhuma";

    container.innerHTML = `

        <div class="summary-item">
            <small>DIMENSÃO</small>
            <strong>${escaparHTML(projeto.dimensao || "Não definida")}</strong>
        </div>

        <div class="summary-item">
            <small>ESTILO</small>
            <strong>${escaparHTML(projeto.estilo || "Não definido")}</strong>
        </div>

        <div class="summary-item">
            <small>PERSONAGEM</small>
            <strong>${escaparHTML(projeto.personagem || "Não definido")}</strong>
        </div>

        <div class="summary-item">
            <small>MECÂNICAS</small>
            <strong>${escaparHTML(mecanicas)}</strong>
        </div>

    `;
}


/* ================================= */
/* GERAR PROJETO */
/* ================================= */

function gerarProjeto() {

    if (!projeto.dimensao ||
        !projeto.estilo ||
        !projeto.personagem ||
        projeto.mecanicas.length === 0) {

        alert("Complete todas as etapas antes de gerar o projeto.");

        return;
    }


    const codigo =
        criarCodigoInicial();


    document
        .getElementById("generatedCode")
        .textContent = codigo;


    document
        .getElementById("generatedSummary")
        .innerHTML = `

        <div class="generated-summary">

            <div class="summary-item">
                <small>DIMENSÃO</small>
                <strong>${escaparHTML(projeto.dimensao)}</strong>
            </div>

            <div class="summary-item">
                <small>ESTILO</small>
                <strong>${escaparHTML(projeto.estilo)}</strong>
            </div>

            <div class="summary-item">
                <small>PERSONAGEM</small>
                <strong>${escaparHTML(projeto.personagem)}</strong>
            </div>

            <div class="summary-item">
                <small>MECÂNICAS</small>
                <strong>${escaparHTML(projeto.mecanicas.join(", "))}</strong>
            </div>

        </div>

    `;


    document
        .getElementById("generatedProject")
        .classList.add("active");


    document
        .getElementById("generatedProject")
        .scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

}


/* ================================= */
/* CÓDIGO INICIAL */
/* ================================= */

function criarCodigoInicial() {

    const nome =
        projeto.personagem
            .replace(/[^a-zA-Z0-9À-ÿ ]/g, "")
            .trim();

    const nomeSeguro =
        nome || "Jogador";

    const dimensao =
        projeto.dimensao;

    const estilo =
        projeto.estilo;

    const mecanicas =
        projeto.mecanicas
            .map(item => `- ${item}`)
            .join("\n");


    return `<!DOCTYPE html>
<html lang="pt-BR">

<head>

<meta charset="UTF-8">

<meta name="viewport"
content="width=device-width, initial-scale=1.0">

<title>${nomeSeguro} - Meu Jogo</title>

<style>

body {
    margin: 0;
    background: #050505;
    color: #00ff66;
    font-family: monospace;
    min-height: 100vh;
    display: grid;
    place-items: center;
}

.game {
    width: min(700px, 90%);
    padding: 30px;
    border: 1px solid #00ff66;
    box-shadow: 0 0 30px #003d1a;
}

h1 {
    color: white;
}

.info {
    line-height: 1.8;
}

</style>

</head>

<body>

<div class="game">

<h1>${nomeSeguro}</h1>

<div class="info">

<p>Meu primeiro projeto de jogo!</p>

<p>Dimensão: ${dimensao}</p>

<p>Estilo: ${estilo}</p>

<p>Mecânicas:</p>

<pre>${mecanicas}</pre>

</div>

</div>


<script>

console.log("Meu primeiro jogo está iniciando...");

const jogo = {

    dimensao: "${dimensao}",

    estilo: "${estilo}",

    personagem: "${nomeSeguro}",

    mecanicas: ${JSON.stringify(projeto.mecanicas)}

};

console.log(jogo);

</script>

</body>

</html>`;
}


/* ================================= */
/* COPIAR CÓDIGO */
/* ================================= */

function copiarCodigo() {

    const codigo =
        document
            .getElementById("generatedCode")
            .textContent;


    navigator.clipboard
        .writeText(codigo)
        .then(() => {

            const botao =
                document.querySelector(
                    ".code-header button"
                );

            const textoOriginal =
                botao.textContent;

            botao.textContent =
                "✓ COPIADO!";

            setTimeout(() => {

                botao.textContent =
                    textoOriginal;

            }, 1800);

        })
        .catch(() => {

            alert(
                "Não foi possível copiar automaticamente. Selecione o código manualmente."
            );

        });

}


/* ================================= */
/* INICIALIZAÇÃO */
/* ================================= */

atualizarInterface();
