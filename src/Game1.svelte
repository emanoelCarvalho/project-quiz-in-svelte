<script>
   // @ts-nocheck

    import { trocaDeEstado } from "./estado";
    import passedLevelOne from "./Levels.svelte";

    let perguntas = [
        {
            pergunta: "Qual o nome do ator que interpreta o Homem de Ferro?",
            alternativas: [
                "Robert Downey Jr.",
                "Chris Evans",
                "Mark Ruffalo",
                "Chris Hemsworth",
            ],
            resposta: "Robert Downey Jr.",
        },
        {
            pergunta: "Qual o nome do ator que interpreta o Capitão América?",
            alternativas: [
                "Robert Downey Jr.",
                "Chris Evans",
                "Mark Ruffalo",
                "Chris Hemsworth",
            ],
            resposta: "Chris Evans",
        },
        {
            pergunta: "Qual o nome do ator que interpreta o Hulk?",
            alternativas: [
                "Robert Downey Jr.",
                "Chris Evans",
                "Mark Ruffalo",
                "Chris Hemsworth",
            ],
            resposta: "Mark Ruffalo",
        },
        {
            pergunta: "Qual o nome do ator que interpreta o Thor?",
            alternativas: [
                "Robert Downey Jr.",
                "Chris Evans",
                "Mark Ruffalo",
                "Chris Hemsworth",
            ],
            resposta: "Chris Hemsworth",
        },
    ];

    let perguntaAtual = 0;
    let acertos = 0;
    let erros = 0;
    let jogoFinalizado = false;

    function responder(event) {
        let resposta = event.target.innerText;
        if (resposta == perguntas[perguntaAtual].resposta) {
            acertos++;
        } else {
            erros++;
        }
        perguntaAtual++;

        if (perguntaAtual >= perguntas.length && acertos > erros) {
            winnerGame();
        } else if (perguntaAtual >= perguntas.length && acertos == erros) {
            empatouGame();
        } else if (perguntaAtual >= perguntas.length && erros >= acertos) {
            loserGame();
        }
    }

    function pularPergunta() {
        perguntaAtual++;
    }

    function winnerGame() {
        if (acertos <= 4 && erros < acertos) {
            setTimeout(() => {
                alert("Você ganhou!");
            }, 2000);
            setTimeout(() => {
                passedLevelOne = (true);
                trocaDeEstado("levels");
            }, 3000);
        }
    }

    function empatouGame() {
        if (acertos == erros) {
            setTimeout(() => {
                alert("Você empatou!");
            }, 2000);
            setTimeout(() => {
                trocaDeEstado("menu");
            }, 3000);
        }
    }

    function loserGame() {
        if (erros >= acertos) {
            setTimeout(() => {
                alert("Você perdeu!");
            }, 2000);
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
        {#if perguntaAtual < perguntas.length}
            <h3>{perguntas[perguntaAtual].pergunta}</h3>
            {#each perguntas[perguntaAtual].alternativas as alternativa}
                <button class="btn-resposta" on:click={responder}>
                    {alternativa}
                </button>
            {/each}
        {:else}
            <h3>Fim de jogo</h3>
            <!-- <button class="btn-reiniciar" on:click={reiniciar}>Reiniciar</button
            > -->
        {/if}<br />
        {#if perguntaAtual < perguntas.length}
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
