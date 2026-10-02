/* ==========================================
   PROGRAMACAO.exe
   SISTEMA COMPLETO DE CURSOS
========================================== */


/* ==========================================
   MATRIX
========================================== */

const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");

let matrixWidth;
let matrixHeight;
let fontSize = 14;
let columns;
let drops;

function iniciarMatrix() {

    matrixWidth = canvas.width = window.innerWidth;
    matrixHeight = canvas.height = window.innerHeight;

    columns = Math.floor(matrixWidth / fontSize);

    drops = [];

    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * matrixHeight / fontSize;
    }
}

const matrixChars =
    "01ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz<>[]{}$#@%";

function desenharMatrix() {

    ctx.fillStyle = "rgba(0, 0, 0, 0.07)";
    ctx.fillRect(0, 0, matrixWidth, matrixHeight);

    ctx.fillStyle = "#21ff68";
    ctx.font = fontSize + "px monospace";

    for (let i = 0; i < drops.length; i++) {

        const char =
            matrixChars[
                Math.floor(Math.random() * matrixChars.length)
            ];

        ctx.fillText(
            char,
            i * fontSize,
            drops[i] * fontSize
        );

        if (
            drops[i] * fontSize > matrixHeight &&
            Math.random() > 0.975
        ) {
            drops[i] = 0;
        }

        drops[i]++;
    }
}

iniciarMatrix();

setInterval(desenharMatrix, 45);

window.addEventListener("resize", iniciarMatrix);


/* ==========================================
   DIGITAÇÃO
========================================== */

const typingElement = document.getElementById("typing");

const typingTexts = [
    "iniciar aprendizado",
    "carregar cursos",
    "abrir programação.exe",
    "aprender programação"
];

let typingIndex = 0;
let charIndex = 0;
let deleting = false;

function efeitoDigitacao() {

    const texto = typingTexts[typingIndex];

    if (!deleting) {

        typingElement.textContent =
            texto.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === texto.length) {
            deleting = true;

            setTimeout(efeitoDigitacao, 1800);
            return;
        }

    } else {

        typingElement.textContent =
            texto.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {
            deleting = false;

            typingIndex++;

            if (typingIndex >= typingTexts.length) {
                typingIndex = 0;
            }
        }
    }

    setTimeout(
        efeitoDigitacao,
        deleting ? 40 : 75
    );
}

efeitoDigitacao();


/* ==========================================
   PESQUISA
========================================== */

function pesquisarCursos() {

    const termo =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();

    const cards =
        document.querySelectorAll(".searchable");

    cards.forEach(card => {

        const texto =
            card.textContent.toLowerCase();

        if (texto.includes(termo)) {
            card.style.display = "";
        } else {
            card.style.display = "none";
        }

    });
}


/* ==========================================
   DADOS DOS CURSOS
========================================== */

const cursos = {

    jogos: {

        categoria: "🎮 JOGOS.exe",

        titulo: "ESCOLA DE CRIAÇÃO DE JOGOS",

        etapas: [

            {
                titulo: "O QUE É UM JOGO?",

                texto: `
                    <p class="lesson-text">
                        Um jogo é um sistema de regras no qual o jogador
                        realiza ações para alcançar objetivos.
                    </p>

                    <div class="concept-grid">

                        <div class="concept-card">
                            <h3>🎯 OBJETIVO</h3>
                            <p>
                                O jogador precisa ter algo para tentar alcançar.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>📜 REGRAS</h3>
                            <p>
                                As regras determinam o que pode e o que não pode acontecer.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>👤 JOGADOR</h3>
                            <p>
                                É quem toma decisões dentro do jogo.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>⚔️ DESAFIO</h3>
                            <p>
                                Obstáculos fazem o jogador pensar e agir.
                            </p>
                        </div>

                    </div>
                `,

                desafio: {
                    pergunta: "Qual elemento define aquilo que o jogador precisa alcançar?",
                    opcoes: [
                        "Objetivo",
                        "Cor do menu",
                        "Nome do arquivo",
                        "Fonte"
                    ],
                    correta: 0
                }
            },

            {
                titulo: "OS 5 ELEMENTOS DE UM JOGO",

                texto: `
                    <p class="lesson-text">
                        Antes de pensar em programação, um criador de jogos
                        precisa entender a estrutura do jogo.
                    </p>

                    <div class="concept-grid">

                        <div class="concept-card">
                            <h3>1. PERSONAGEM</h3>
                            <p>
                                Quem o jogador controla ou acompanha.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>2. OBJETIVO</h3>
                            <p>
                                O que precisa ser realizado.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>3. MUNDO</h3>
                            <p>
                                O ambiente onde a experiência acontece.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>4. REGRAS</h3>
                            <p>
                                As condições que controlam o funcionamento.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>5. DESAFIOS</h3>
                            <p>
                                Problemas que dificultam o objetivo.
                            </p>
                        </div>

                    </div>
                `,

                desafio: {
                    pergunta: "Qual destes pertence à estrutura de um jogo?",
                    opcoes: [
                        "Objetivo",
                        "Planilha bancária",
                        "Senha",
                        "Cabo USB"
                    ],
                    correta: 0
                }
            },

            {
                titulo: "2D OU 3D?",

                texto: `
                    <p class="lesson-text">
                        Jogos podem utilizar diferentes formas de representação.
                        Em um jogo 2D, os elementos são representados em duas
                        dimensões. Em 3D, existe uma representação de profundidade.
                    </p>

                    <div class="concept-grid">

                        <div class="concept-card">
                            <h3>🟩 2D</h3>
                            <p>
                                Geralmente trabalha com largura e altura.
                                É muito usado em plataformas e jogos de visão superior.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>🧊 3D</h3>
                            <p>
                                Trabalha com largura, altura e profundidade,
                                permitindo ambientes tridimensionais.
                            </p>
                        </div>

                    </div>
                `,

                desafio: {
                    pergunta: "Qual dimensão é adicionada para representar profundidade?",
                    opcoes: [
                        "3ª dimensão",
                        "Nenhuma",
                        "Apenas cor",
                        "Texto"
                    ],
                    correta: 0
                }
            },

            {
                titulo: "MECÂNICAS",

                texto: `
                    <p class="lesson-text">
                        Mecânicas são as ações e sistemas que fazem o jogo
                        funcionar. Elas determinam o que o jogador pode fazer.
                    </p>

                    <div class="concept-grid">

                        <div class="concept-card">
                            <h3>🦘 PULAR</h3>
                            <p>
                                O personagem pode sair temporariamente do chão.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>💎 COLETAR</h3>
                            <p>
                                O jogador pode pegar objetos.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>❤️ VIDA</h3>
                            <p>
                                Um sistema pode representar a resistência
                                ou condição do personagem.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>🏆 PONTUAÇÃO</h3>
                            <p>
                                Determina pontos conquistados através de ações.
                            </p>
                        </div>

                    </div>
                `,

                desafio: {
                    pergunta: "Qual destas é uma mecânica?",
                    opcoes: [
                        "Pular",
                        "Nome do desenvolvedor",
                        "Tamanho do monitor",
                        "Pasta do computador"
                    ],
                    correta: 0
                }
            },

            {
                titulo: "PLANEJANDO SEU PRIMEIRO JOGO",

                texto: `
                    <p class="lesson-text">
                        Agora você vai planejar um jogo. Não estamos criando
                        código ainda. Primeiro vamos transformar sua ideia
                        em um projeto organizado.
                    </p>

                    <label>NOME DO JOGO</label>

                    <input
                        class="course-input"
                        id="gameName"
                        placeholder="Ex: Aventura Neon"
                    >

                    <label>OBJETIVO</label>

                    <input
                        class="course-input"
                        id="gameObjective"
                        placeholder="Ex: chegar ao final da fase"
                    >

                    <label>PERSONAGEM PRINCIPAL</label>

                    <input
                        class="course-input"
                        id="gameCharacter"
                        placeholder="Ex: Alex"
                    >

                    <p class="lesson-text">
                        Quando você terminar, estará criando um documento
                        de planejamento — uma das primeiras etapas reais
                        do desenvolvimento de um jogo.
                    </p>
                `,

                desafio: {
                    pergunta: "Qual deve vir antes da programação?",
                    opcoes: [
                        "Planejamento",
                        "Apagar o projeto",
                        "Publicar imediatamente",
                        "Ignorar o objetivo"
                    ],
                    correta: 0
                }
            },

            {
                titulo: "DESAFIO FINAL",

                texto: `
                    <p class="lesson-text">
                        Parabéns. Você chegou ao desafio final.
                        Aqui você precisa aplicar o que aprendeu.
                    </p>

                    <div class="concept-card">
                        <h3>MISSÃO</h3>

                        <p>
                            Imagine um jogo em que o personagem precisa
                            atravessar uma floresta e chegar a uma torre.
                            Existem obstáculos pelo caminho.
                        </p>

                        <br>

                        <p>
                            Pense em:
                            personagem,
                            objetivo,
                            regras,
                            desafios e mecânicas.
                        </p>
                    </div>
                `,

                desafio: {
                    pergunta: "O que melhor representa a missão do jogador?",
                    opcoes: [
                        "Alcançar a torre",
                        "A cor do botão",
                        "O nome do computador",
                        "A pasta do projeto"
                    ],
                    correta: 0
                }
            }

        ]
    },


    sites: {

        categoria: "🌐 SITES.exe",

        titulo: "ESCOLA DE CRIAÇÃO DE SITES",

        etapas: [

            {
                titulo: "COMO UM SITE FUNCIONA?",

                texto: `
                    <p class="lesson-text">
                        Um site normalmente combina estrutura, aparência
                        e comportamento.
                    </p>

                    <div class="concept-grid">

                        <div class="concept-card">
                            <h3>HTML</h3>
                            <p>
                                Define a estrutura e o conteúdo da página.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>CSS</h3>
                            <p>
                                Define aparência, layout, cores e estilos.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>JAVASCRIPT</h3>
                            <p>
                                Permite criar comportamentos e interações.
                            </p>
                        </div>

                    </div>
                `,

                desafio: {
                    pergunta: "Qual tecnologia organiza a estrutura da página?",
                    opcoes: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "Imagem"
                    ],
                    correta: 0
                }
            },

            {
                titulo: "ESTRUTURA HTML",

                texto: `
                    <p class="lesson-text">
                        HTML trabalha com elementos. Títulos, parágrafos,
                        botões, imagens e outras partes da página podem
                        ser representados por elementos HTML.
                    </p>

                    <div class="concept-grid">

                        <div class="concept-card">
                            <h3>TÍTULOS</h3>
                            <p>
                                Apresentam os assuntos principais.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>PARÁGRAFOS</h3>
                            <p>
                                Apresentam informações em texto.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>BOTÕES</h3>
                            <p>
                                Podem iniciar ações.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>LINKS</h3>
                            <p>
                                Permitem navegar para outros locais.
                            </p>
                        </div>

                    </div>
                `,

                desafio: {
                    pergunta: "Para que serve principalmente o HTML?",
                    opcoes: [
                        "Estruturar o conteúdo",
                        "Editar vídeos",
                        "Criar músicas",
                        "Formatar o computador"
                    ],
                    correta: 0
                }
            },

            {
                titulo: "CSS E DESIGN",

                texto: `
                    <p class="lesson-text">
                        CSS transforma uma estrutura simples em uma interface.
                        Com ele você trabalha com cores, tamanhos, espaços,
                        bordas, posicionamento e responsividade.
                    </p>

                    <div class="concept-grid">

                        <div class="concept-card">
                            <h3>🎨 CORES</h3>
                            <p>Definem a aparência visual.</p>
                        </div>

                        <div class="concept-card">
                            <h3>📦 LAYOUT</h3>
                            <p>Organiza os elementos.</p>
                        </div>

                        <div class="concept-card">
                            <h3>📱 RESPONSIVIDADE</h3>
                            <p>Adapta o site a diferentes telas.</p>
                        </div>

                        <div class="concept-card">
                            <h3>✨ EFEITOS</h3>
                            <p>Adiciona transições e detalhes visuais.</p>
                        </div>

                    </div>
                `,

                desafio: {
                    pergunta: "Qual tecnologia cuida principalmente da aparência?",
                    opcoes: [
                        "CSS",
                        "HTML",
                        "JavaScript",
                        "URL"
                    ],
                    correta: 0
                }
            },

            {
                titulo: "JAVASCRIPT E INTERAÇÃO",

                texto: `
                    <p class="lesson-text">
                        JavaScript permite que a página reaja às ações
                        do usuário.
                    </p>

                    <div class="concept-grid">

                        <div class="concept-card">
                            <h3>🖱️ CLIQUES</h3>
                            <p>
                                Um botão pode executar uma ação.
                            </p>
                        </div>

                        <div class="concept-card">
                            <h3>⌨️ ENTRADAS</h3>
            
