<script>
    //@ts-nocheck
    import { trocaDeEstado } from "./estado";

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

    function reiniciar() {
        perguntaAtual = 0;
        acertos = 0;
        erros = 0;
    }

    function winnerGame() {
        if (acertos <= 4 && erros < acertos) {
            setTimeout(() => {
                alert("Você ganhou!");
            }, 2000);
            setTimeout(() => {
                trocaDeEstado("menu");
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
        <h1>Quiz</h1>
        <h2>Acertos: {acertos}</h2>
        <h2>Erros: {erros}</h2>
        {#if perguntaAtual < perguntas.length}
            <h3>{perguntas[perguntaAtual].pergunta}</h3>
            {#each perguntas[perguntaAtual].alternativas as alternativa}
                <button id="btn-resposta" on:click={responder}
                    >{alternativa}</button
                >
            {/each}
        {:else}
            <h3>Fim de jogo</h3>
            <button on:click={reiniciar}>Reiniciar</button>
        {/if}<br />
        {#if perguntaAtual < perguntas.length}
            <button id="jump" on:click={pularPergunta}>Pular</button>
        {/if}
    </div>
</main>

<style>
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
    button {
        width: 200px;
        height: 50px;
        border-radius: 10px;
        border: none;
        font-size: 20px;
        font-family: "Marvel", sans-serif;
        cursor: pointer;
    }
    h1 {
        text-align: center;
        color: red;
        font-size: 50px;
        font-family: "Marvel", sans-serif;
    }
    h2 {
        text-align: center;
        color: black;
        font-size: 30px;
        font-family: "Marvel", sans-serif;
    }
    h3 {
        text-align: center;
        color: black;
        font-size: 30px;
        font-family: "Marvel", sans-serif;
    }
    #jump {
        margin-top: 20px;
        border: 1px solid black;
        border-radius: 10px;
        font-size: 20px;
        font-family: "Marvel", sans-serif;
    }
    button {
        background-color: #f44336;
        color: white;
    }
    button:hover {
        background-color: white;
        color: #f44336;
    }
    #btn-resposta {
        margin-top: 10px;
        border: 1px solid black;
        border-radius: 10px;
        font-size: 20px;
        font-family: "Marvel", sans-serif;
        display: block;
    }
</style>
