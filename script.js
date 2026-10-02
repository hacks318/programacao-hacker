/* =====================================================
   PROGRAMACAO.exe
   SCRIPT.JS
===================================================== */


/* =====================================================
   MATRIX
===================================================== */

const matrix = document.getElementById("matrix");

const caracteres =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]<>/\\#$%@&*";

for (let i = 0; i < 85; i++) {

    const coluna =
        document.createElement("div");

    coluna.className =
        "matrix-column";

    let texto = "";

    const quantidade =
        Math.floor(Math.random() * 25) + 15;

    for (let j = 0; j < quantidade; j++) {

        texto +=
            caracteres[
                Math.floor(
                    Math.random() *
                    caracteres.length
                )
            ];

        texto += "\n";
    }

    coluna.textContent = texto;

    coluna.style.left =
        Math.random() * 100 + "%";

    coluna.style.animationDuration =
        (Math.random() * 8 + 5) + "s";

    coluna.style.animationDelay =
        Math.random() * 5 + "s";

    matrix.appendChild(coluna);
}


/* =====================================================
   TERMINAL DO HERO
===================================================== */

const terminalText =
    document.getElementById("terminalText");

const linhasTerminal = [

    "> inicializando PROGRAMACAO.exe...",

    "> carregando módulos...",

    "> verificando sistema...",

    "> conexão estabelecida.",

    "> sistema pronto.",

    "> acesso concedido_"

];

let linhaAtual = 0;

function escreverTerminal() {

    if (linhaAtual >= linhasTerminal.length) {
        return;
    }

    const linha =
        document.createElement("div");

    linha.textContent =
        linhasTerminal[linhaAtual];

    terminalText.appendChild(linha);

    linhaAtual++;

    setTimeout(
        escreverTerminal,
        600
    );
}

escreverTerminal();


/* =====================================================
   APRENDIZADO
===================================================== */

const conteudos = {

    programacao: {

        titulo:
            "COMO FUNCIONA A PROGRAMAÇÃO",

        texto: `

            <h3>Como funciona a programação?</h3>

            <p>
                Programação é o processo de criar
                instruções que um computador consegue
                executar.
            </p>

            <p>
                Um programa normalmente trabalha
                com dados, decisões, repetições
                e funções.
            </p>

            <p>
                Por exemplo, podemos dizer:
                se o jogador tiver 10 pontos,
                mostre uma mensagem.
            </p>

            <p>
                Linguagens como JavaScript,
                Python, Java e C++ permitem
                transformar essas ideias em código.
            </p>

        `

    },


    criacao: {

        titulo:
            "COISAS QUE VOCÊ PODE CRIAR",

        texto: `

            <h3>O que a programação permite criar?</h3>

            <p>
                Programação pode ser usada para
                criar jogos, sites, aplicativos,
                ferramentas e sistemas.
            </p>

            <p>
                Também pode ser usada para
                inteligência artificial,
                automação, análise de dados
                e muitas outras áreas.
            </p>

            <p>
                O limite principal é a combinação
                entre criatividade, conhecimento
                e tecnologia disponível.
            </p>

        `

    },


    comecar: {

        titulo:
            "COMO COMEÇAR DO ZERO",

        texto: `

            <h3>Começando a programar</h3>

            <p>
                Primeiro escolha uma linguagem
                adequada para o que você deseja
                construir.
            </p>

            <p>
                Para sites, HTML, CSS e JavaScript
                são uma ótima combinação.
            </p>

            <p>
                Depois aprenda variáveis,
                condições, loops, funções
                e estruturas de dados.
            </p>

            <p>
                O mais importante é praticar
                criando pequenos projetos.
            </p>

        `

    }

};


function abrirConteudo(tipo) {

    const conteudo =
        document.getElementById("conteudo");

    const contentText =
        document.getElementById("contentText");

    contentText.innerHTML =
        conteudos[tipo].texto;

    conteudo.classList.add("active");

    conteudo.scrollIntoView({
        behavior: "smooth"
    });
}


function fecharConteudo() {

    document
        .getElementById("conteudo")
        .classList.remove("active");
}


/* =====================================================
   PESQUISA
===================================================== */

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener(
        "input",
        function () {

            const busca =
                this.value.toLowerCase();

            const cards =
                document.querySelectorAll(
                    "#learningCards .card"
                );

            cards.forEach(card => {

                const texto =
                    card.textContent.toLowerCase();

                if (texto.includes(busca)) {

                    card.style.display =
                        "";

                } else {

                    card.style.display =
                        "none";

                }

            });

        }
    );
}


/* =====================================================
   TERMINAL
===================================================== */

const terminalButton =
    document.getElementById(
        "terminalButton"
    );

const terminalModal =
    document.getElementById(
        "terminalModal"
    );

const commandInput =
    document.getElementById(
        "commandInput"
    );

const terminalScreen =
    document.getElementById(
        "terminalScreen"
    );


terminalButton.addEventListener(
    "click",
    function () {

        terminalModal.classList.add(
            "active"
        );

        setTimeout(() => {

            commandInput.focus();

        }, 100);

    }
);


function fecharTerminal() {

    terminalModal.classList.remove(
        "active"
    );
}


function escreverTerminalLinha(texto) {

    const linha =
        document.createElement("p");

    linha.innerHTML =
        texto;

    terminalScreen.insertBefore(
        linha,
        document.querySelector(
            ".terminal-input"
        )
    );
}


commandInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key !== "Enter") {
            return;
        }

        const comando =
            commandInput.value
                .trim()
                .toLowerCase();

        commandInput.value = "";

        if (!comando) {
            return;
        }


        escreverTerminalLinha(
            "&gt; " + comando
        );


        if (comando === "help") {

            escreverTerminalLinha(
                "Comandos: help, about, status, projects, learn, clear"
            );

        }

        else if (comando === "about") {

            escreverTerminalLinha(
                "PROGRAMACAO.exe — central de aprendizado e projetos."
            );

        }

        else if (comando === "status") {

            escreverTerminalLinha(
                "STATUS: ONLINE | SISTEMA: OPERACIONAL | VERSÃO: 2.0"
            );

        }

        else if (comando === "projects") {

            escreverTerminalLinha(
                "Projetos: JOGOS, SITES, APLICATIVOS, IA, AUTOMAÇÃO, FERRAMENTAS."
            );

        }

        else if (comando === "learn") {

            escreverTerminalLinha(
                "Módulos de aprendizado disponíveis: 03."
            );

        }

        else if (comando === "clear") {

            terminalScreen.innerHTML = `

                <p>
                    &gt; Terminal limpo.
                </p>

                <div class="terminal-input">

                    <span>&gt;</span>

                    <input
                        id="commandInput"
                        type="text"
                        placeholder="digite um comando..."
                    >

                </div>

            `;

            configurarNovoTerminal();

        }

        else {

            escreverTerminalLinha(
                "Comando não encontrado. Digite 'help'."
            );

        }

    }
);


function configurarNovoTerminal() {

    const novoInput =
        document.getElementById(
            "commandInput"
        );

    novoInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                commandInput.dispatchEvent(
                    new KeyboardEvent(
                        "keydown",
                        {
                            key: "Enter"
                        }
                    )
                );

            }

        }
    );
}


/* =====================================================
   MENSAGEM DOS PROJETOS
===================================================== */

function mostrarEmBreve(nome) {

    alert(
        nome +
        " será o próximo módulo funcional do PROGRAMACAO.exe."
    );
}


/* =====================================================
   JOGOS.exe
===================================================== */

const jogosModal =
    document.getElementById(
        "jogosModal"
    );

const neonGame =
    document.getElementById(
        "neonGame"
    );

const alvo =
    document.getElementById(
        "alvo"
    );

const campoJogo =
    document.getElementById(
        "campoJogo"
    );

const pontosTexto =
    document.getElementById(
        "pontos"
    );

const tempoTexto =
    document.getElementById(
        "tempo"
    );

const inicioJogo =
    document.getElementById(
        "inicioJogo"
    );

const fimJogo =
    document.getElementById(
        "fimJogo"
    );

const pontuacaoFinal =
    document.getElementById(
        "pontuacaoFinal"
    );


let pontos = 0;

let tempo = 30;

let intervaloJogo = null;

let partidaAtiva = false;


/* ABRIR JOGOS */

function abrirJogos() {

    jogosModal.classList.add(
        "active"
    );

    neonGame.style.display =
        "none";

    clearInterval(
        intervaloJogo
    );

    partidaAtiva = false;
}


/* FECHAR JOGOS */

function fecharJogos() {

    jogosModal.classList.remove(
        "active"
    );

    clearInterval(
        intervaloJogo
    );

    partidaAtiva = false;

    alvo.style.display =
        "none";
}


/* ABRIR NEON TARGET */

function iniciarNeonTarget() {

    neonGame.style.display =
        "block";

    pontos = 0;

    tempo = 30;

    pontosTexto.textContent =
        pontos;

    tempoTexto.textContent =
        tempo;

    inicioJogo.style.display =
        "flex";

    fimJogo.style.display =
        "none";

    alvo.style.display =
        "none";
}


/* COMEÇAR PARTIDA */

function comecarPartida() {

    clearInterval(
        intervaloJogo
    );

    pontos = 0;

    tempo = 30;

    partidaAtiva = true;

    pontosTexto.textContent =
        pontos;

    tempoTexto.textContent =
        tempo;

    inicioJogo.style.display =
        "none";

    fimJogo.style.display =
        "none";

    alvo.style.display =
        "block";

    moverAlvo();


    intervaloJogo =
        setInterval(
            function () {

                tempo--;

                tempoTexto.textContent =
                    tempo;

                if (tempo <= 0) {

                    terminarPartida();

                }

            },
            1000
        );
}


/* ACERTAR ALVO */

function acertarAlvo() {

    if (!partidaAtiva) {
        return;
    }

    pontos++;

    pontosTexto.textContent =
        pontos;

    moverAlvo();
}


/* MOVER ALVO */

function moverAlvo() {

    const largura =
        campoJogo.clientWidth;

    const altura =
        campoJogo.clientHeight;

    const tamanho =
        55;

    const x =
        Math.random() *
        (largura - tamanho);

    const y =
        Math.random() *
        (altura - tamanho);

    alvo.style.left =
        x + "px";

    alvo.style.top =
        y + "px";
}


/* TERMINAR PARTIDA */

function terminarPartida() {

    partidaAtiva = false;

    clearInterval(
        intervaloJogo
    );

    alvo.style.display =
        "none";

    pontuacaoFinal.textContent =
        pontos;

    fimJogo.style.display =
        "flex";
}


/* =====================================================
   FECHAR MODAIS CLICANDO FORA
===================================================== */

window.addEventListener(
    "click",
    function (event) {

        if (event.target === jogosModal) {

            fecharJogos();

        }

        if (event.target === terminalModal) {

            fecharTerminal();

        }

    }
);
