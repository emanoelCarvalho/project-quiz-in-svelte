<script>
    import swal from "sweetalert";
    import { trocaDeEstado } from "../stores/estado.js";

    let perguntasLevelTow = [
        {
            pergunta:
                "Qual é o nome da equipe de super-heróis formada por Homem de Ferro, Capitão América, Thor, Hulk, Viúva Negra e Gavião Arqueiro?",
            alternativas: [
                "Vingadores",
                "Quarteto Fantástico",
                "Guardiões da Galáxia",
                "Thunderbolts ",
            ],
            resposta: "Vingadores",
        },

        {
            pergunta:
                "Quem é o 1° inimigo do Homem-Aranha do Tobey Maguire?    ",
            alternativas: [
                "Duende Verde",
                "Doutor Octopus",
                "Venom",
                "Carnificina",
            ],
            resposta: "Duende Verde",
        },

        {
            pergunta: "Qual é o nome do planeta natal do Scar?",
            alternativas: ["Terra", "Titã", "Vormir", "Sakaar"],
            resposta: "Sakaar",
        },

        {
            pergunta: "Qual é o nome do pai  do Senhor das Estrelas?",
            alternativas: ["Tony Stark", "Ego", "Drax", "Nick Fury"],
            resposta: "Ego",
        },

        {
            pergunta: "Qual é o nome do planeta natal do Thanos?",
            alternativas: ["Terra", "Titã", "Vormir", "Sakaar"],
            resposta: "Titã",
        },
    ];

    let perguntaAtual = 0;
    let acertos = 0;
    let erros = 0;

    function embaralharPerguntas() {
        let perguntasEmbaralhadas = [];
        while (perguntasLevelTow.length > 0) {
            let indiceAleatorio = Math.floor(
                Math.random() * perguntasLevelTow.length
            );
            perguntasEmbaralhadas.push(perguntasLevelTow[indiceAleatorio]);
            perguntasLevelTow.splice(indiceAleatorio, 1);
        }
        perguntasLevelTow = perguntasEmbaralhadas;
    }

    function responder(event) {
        let resposta = event.target.innerText;
        if (resposta == perguntasLevelTow[perguntaAtual].resposta) {
            acertos++;
        } else {
            erros++;
        }
        perguntaAtual++;

        if (perguntaAtual >= perguntasLevelTow.length && acertos > erros) {
            winnerGame();
        } else if (
            perguntaAtual >= perguntasLevelTow.length &&
            acertos == erros
        ) {
            empatouGame();
        } else if (
            perguntaAtual >= perguntasLevelTow.length &&
            erros >= acertos
        ) {
            loserGame();
        }
    }

    function pularPergunta() {
        perguntaAtual++;

        if (perguntaAtual >= perguntasLevelTow.length && acertos > erros) {
            winnerGame();
        } else if (
            perguntaAtual >= perguntasLevelTow.length &&
            acertos == erros
        ) {
            empatouGame();
        } else if (
            perguntaAtual >= perguntasLevelTow.length &&
            erros >= acertos
        ) {
            loserGame();
        }
    }

    embaralharPerguntas();

    function winnerGame() {
        if (acertos <= 5 && erros < acertos) {
            setTimeout(() => {
                swal({
                    title: "Você ganhou!",
                    text: "Você acertou " + acertos + " perguntas!",
                    icon: "success",
                });
            }, 1000);
            setTimeout(() => {
                trocaDeEstado("winnerQuiz");
            }, 3000);
        }
    }

    function empatouGame() {
        if (acertos == erros) {
            setTimeout(() => {
                swal({
                    title: "Empatou!",
                    text:
                        "Você acertou " +
                        acertos +
                        " e errou " +
                        erros +
                        " perguntas!" +
                        "\n" +
                        "Iniciando o quiz novamente... " +
                        "\n" +
                        "Recomece o level 1 novamente!",
                    icon: "warning",
                });
            }, 1000);
            setTimeout(() => {
                trocaDeEstado("game1");
            }, 3000);
        }
    }

    function loserGame() {
        if (erros >= acertos) {
            setTimeout(() => {
                swal({
                    title: "Você perdeu!",
                    text:
                        "Você errou " +
                        erros +
                        " perguntas!" +
                        "\n" +
                        "Retornando para o menu...",
                    icon: "error",
                });
            }, 1000);
            setTimeout(() => {
                trocaDeEstado("menu");
            }, 3000);
        }
    }
</script>

<main>
    <div>
        <h1>Quiz Marvel</h1>
        <h2>Acertos: {acertos}</h2>
        <h2>Erros: {erros}</h2>
        {#if perguntaAtual < perguntasLevelTow.length}
            <h3>{perguntasLevelTow[perguntaAtual].pergunta}</h3>
            {#each perguntasLevelTow[perguntaAtual].alternativas as alternativa}
                <button class="btn-resposta" on:click={responder}>
                    {alternativa}
                </button>
            {/each}
        {:else}
            <h3>Fim de jogo</h3>
            <!-- <button class="btn-reiniciar" on:click={reiniciar}>Reiniciar</button
            > -->
        {/if}<br />
        {#if perguntaAtual < perguntasLevelTow.length}
            <button class="jump" on:click={pularPergunta}>Pular</button>
        {/if}
    </div>
</main>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Anton&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");

    :global(body) {
        background-color: #000;
        font-family: "Roboto", sans-serif;
        margin: 0;
        padding: 0;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 500px;
        height: 500px;
    }

    h1 {
        text-align: center;
        color: #fe0404;
        font-size: 50px;
        font-family: "Anton", sans-serif;
        margin-bottom: 0;
    }

    h2 {
        text-align: center;
        color: #fff;
        font-size: 30px;
        font-family: "Anton", sans-serif;
        margin: 10px 0;
    }

    h3 {
        text-align: center;
        color: #fff;
        font-size: 30px;
        font-family: "Anton", sans-serif;
        margin: 10px 0;
    }

    .jump {
        margin-top: 20px;
        border: 1px solid #fff;
        border-radius: 10px;
        font-size: 20px;
        font-family: "Anton", sans-serif;
        background-color: transparent;
        color: #fff;
        padding: 10px 20px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .jump:hover {
        background-color: #fe0404;
        color: #fff;
    }

    .btn-resposta {
        margin-top: 10px;
        border: 1px solid #fe0404;
        border-radius: 10px;
        font-size: 20px;
        font-family: "Anton", sans-serif;
        display: block;
        background-color: #fe0404;
        color: #fff;
        padding: 10px 20px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-resposta:hover {
        background-color: #fff;
        color: #fe0404;
    }
</style>
