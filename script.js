/* ==========================================
   FUNDO MATRIX
========================================== */

const matrix = document.getElementById("matrix");

const caracteres =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz{}[]<>/\\#$%@&*";

for (let i = 0; i < 85; i++) {

    const coluna = document.createElement("div");

    coluna.className = "matrix-column";

    let texto = "";

    for (let j = 0; j < 45; j++) {

        texto +=
            caracteres.charAt(
                Math.floor(
                    Math.random() * caracteres.length
                )
            ) + "<br>";

    }

    coluna.innerHTML = texto;

    coluna.style.left =
        Math.random() * 100 + "%";

    coluna.style.animationDuration =
        (5 + Math.random() * 9) + "s";

    coluna.style.animationDelay =
        Math.random() * 8 + "s";

    matrix.appendChild(coluna);
}


/* ==========================================
   TERMINAL DA PÁGINA
========================================== */

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

    terminalText.appendChild(linha);

    let texto =
        linhasTerminal[linhaAtual];

    let caractere = 0;

    const intervalo =
        setInterval(() => {

            linha.textContent +=
                texto[caractere];

            caractere++;

            if (caractere >= texto.length) {

                clearInterval(intervalo);

                linhaAtual++;

                setTimeout(
                    escreverTerminal,
                    250
                );
            }

        }, 25);
}

escreverTerminal();


/* ==========================================
   CONTEÚDOS DAS 3 OPÇÕES
========================================== */

const conteudos = {

    programacao: `

        <h2>
            // COMO FUNCIONA A PROGRAMAÇÃO
        </h2>

        <p>
            Programação é o processo de criar instruções
            que um computador consegue executar. Essas
            instruções são escritas utilizando linguagens
            de programação.
        </p>

        <h3>O computador simplesmente faz o que mandamos?</h3>

        <p>
            De certa maneira, sim. Um programa é uma sequência
            organizada de instruções. O computador executa essas
            instruções de acordo com as regras da linguagem e
            do ambiente em que o programa está sendo executado.
        </p>

        <h3>Variáveis</h3>

        <p>
            Variáveis permitem guardar informações para que
            o programa possa utilizá-las posteriormente.
        </p>

        <h3>Condições</h3>

        <p>
            Condições permitem que o programa tome decisões.
            Por exemplo: se uma determinada condição for
            verdadeira, faça uma ação; caso contrário,
            faça outra.
        </p>

        <h3>Repetições</h3>

        <p>
            Loops permitem repetir uma determinada operação
            várias vezes. Isso é muito útil quando precisamos
            trabalhar com grandes quantidades de dados ou
            executar uma tarefa repetitiva.
        </p>

        <h3>Funções</h3>

        <p>
            Funções organizam partes do código em blocos
            reutilizáveis. Isso ajuda a deixar programas
            grandes mais organizados.
        </p>

        <h3>O mais importante</h3>

        <p>
            Programar não significa apenas decorar comandos.
            O principal objetivo é aprender a transformar
            problemas e ideias em uma sequência lógica de
            instruções.
        </p>

    `,


    criacao: `

        <h2>
            // COISAS QUE VOCÊ PODE CRIAR USANDO PROGRAMAÇÃO
        </h2>

        <p>
            Programação pode ser utilizada para transformar
            praticamente qualquer ideia que possa ser
            representada por regras e informações em um
            sistema computacional.
        </p>

        <h3>🎮 Jogos</h3>

        <p>
            É possível criar jogos com personagens, mapas,
            inimigos, sistemas de pontuação, inventários,
            física, menus e muitas outras mecânicas.
        </p>

        <h3>🌐 Sites</h3>

        <p>
            HTML, CSS e JavaScript permitem criar páginas
            simples e aplicações web completas.
        </p>

        <h3>📱 Aplicativos</h3>

        <p>
            Linguagens e frameworks específicos podem ser
            utilizados para criar aplicativos para celulares
            e outros dispositivos.
        </p>

        <h3>🤖 Inteligência artificial</h3>

        <p>
            Programação também está presente em sistemas de
            inteligência artificial, processamento de dados,
            reconhecimento de padrões e modelos de aprendizado.
        </p>

        <h3>⚙️ Automação</h3>

        <p>
            Programas podem automatizar tarefas repetitivas,
            organizar informações e executar processos de
            maneira muito mais rápida.
        </p>

        <h3>🛠️ Ferramentas</h3>

        <p>
            Você também pode criar calculadoras, conversores,
            organizadores, sistemas de anotações, geradores,
            quizzes e diversas outras ferramentas.
        </p>

        <h3>💡 A ideia é o ponto de partida</h3>

        <p>
            A programação fornece as ferramentas. A partir
            delas, você pode transformar uma ideia em um
            projeto real.
        </p>

    `,


    comecar: `

        <h2>
            // COMO COMEÇAR A PROGRAMAR DO ZERO
        </h2>

        <p>
            Você não precisa conhecer dezenas de linguagens
            para começar. O ideal é escolher uma tecnologia,
            aprender os fundamentos e praticar.
        </p>

        <h3>1. Escolha uma linguagem</h3>

        <p>
            Para desenvolvimento web, JavaScript é uma
            opção importante. Python também é bastante
            utilizada em automação, dados e inteligência
            artificial.
        </p>

        <h3>2. Aprenda os fundamentos</h3>

        <p>
            Estude variáveis, tipos de dados, operadores,
            condições, loops, funções e estruturas básicas.
        </p>

        <h3>3. Faça pequenos projetos</h3>

        <p>
            Em vez de apenas assistir aulas, tente construir
            alguma coisa. Uma calculadora, um quiz, um jogo
            simples ou uma página web já podem ensinar
            bastante.
        </p>

        <h3>4. Aprenda com os erros</h3>

        <p>
            Encontrar erros faz parte do processo. Leia as
            mensagens apresentadas pelo programa e tente
            descobrir qual parte do código causou o problema.
        </p>

        <h3>5. Aprenda a pesquisar</h3>

        <p>
            Programadores também consultam documentação e
            referências constantemente. Saber pesquisar é
            uma habilidade importante.
        </p>

        <h3>6. Aumente a dificuldade</h3>

        <p>
            Depois dos projetos básicos, você pode começar
            a estudar conceitos mais avançados e construir
            projetos maiores.
        </p>

        <h3>7. Continue praticando</h3>

        <p>
            Programação é uma habilidade. Quanto mais você
            pratica, mais facilidade desenvolve para entender
            problemas e criar soluções.
        </p>

    `
};


/* ==========================================
   ABRIR CONTEÚDO
========================================== */

function abrirConteudo(tipo) {

    const painel =
        document.getElementById("conteudo");

    const texto =
        document.getElementById("contentText");

    texto.innerHTML =
        conteudos[tipo];

    painel.classList.add("show");

    painel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}


/* ==========================================
   FECHAR CONTEÚDO
========================================== */

function fecharConteudo() {

    const painel =
        document.getElementById("conteudo");

    painel.classList.remove("show");

}


/* ==========================================
   PESQUISA
========================================== */

const searchInput =
    document.getElementById("searchInput");

const cards =
    document.querySelectorAll(".card");

searchInput.addEventListener(
    "input",
    function () {

        const pesquisa =
            searchInput.value.toLowerCase();

        cards.forEach(card => {

            const texto =
                card.textContent.toLowerCase();

            if (texto.includes(pesquisa)) {

                card.style.display = "";

            } else {

                card.style.display = "none";

            }

        });

    }
);


/* ==========================================
   TERMINAL MODAL
========================================== */

const terminalButton =
    document.getElementById("terminalButton");

const terminalModal =
    document.getElementById("terminalModal");

const commandInput =
    document.getElementById("commandInput");

const terminalScreen =
    document.getElementById("terminalScreen");


terminalButton.addEventListener(
    "click",
    function () {

        terminalModal.classList.add("show");

        setTimeout(() => {
            commandInput.focus();
        }, 100);

    }
);


function fecharTerminal() {

    terminalModal.classList.remove("show");

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

        if (!comando) {
            return;
        }

        const resposta =
            document.createElement("p");

        resposta.innerHTML =
            "&gt; " + comando;

        terminalScreen.insertBefore(
            resposta,
            terminalScreen.querySelector(".terminal-input")
        );


        const resultado =
            document.createElement("p");


        if (comando === "help") {

            resultado.textContent =
                "> comandos: help, clear, about, status";

        }

        else if (comando === "about") {

            resultado.textContent =
                "> PROGRAMACAO.exe é uma central de aprendizado.";

        }

        else if (comando === "status") {

            resultado.textContent =
                "> sistema: ONLINE | versão: 1.0";

        }

        else if (comando === "clear") {

            terminalScreen.innerHTML = `
                <div class="terminal-input">
                    <span>&gt;</span>

                    <input
                        id="commandInput"
                        type="text"
                        placeholder="digite um comando..."
                    >
                </div>
            `;

            configurarTerminal();

            return;

        }

        else {

            resultado.textContent =
                "> comando não encontrado. Digite: help";

        }


        terminalScreen.insertBefore(
            resultado,
            terminalScreen.querySelector(".terminal-input")
        );

        commandInput.value = "";

    }
);


/* ==========================================
   RECONFIGURAR TERMINAL
========================================== */

function configurarTerminal() {

    const novoInput =
        document.getElementById("commandInput");

    novoInput.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Enter") {

                const comando =
                    novoInput.value
                        .trim()
                        .toLowerCase();

                const resultado =
                    document.createElement("p");

                resultado.textContent =
                    "> " + comando;

                terminalScreen.insertBefore(
                    resultado,
                    terminalScreen.querySelector(".terminal-input")
                );

                novoInput.value = "";

            }

        }
    );

  }
