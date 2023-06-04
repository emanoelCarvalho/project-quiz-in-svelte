<script>
    import { trocaDeEstado } from "../stores/estado.js";
</script>

<main>
    <h1>Sobre o Quiz da Marvel</h1>
    <p>
        Olá, jogador! Bem-vindo ao Quiz da Marvel, um jogo emocionante para
        testar seus conhecimentos sobre o universo Marvel.
    </p>

    <h2>Como Jogar</h2>
    <ul>
        <li>
            Leia cuidadosamente cada pergunta e as opções de resposta
            fornecidas.
        </li>
        <li>Selecione a resposta que você acredita ser correta.</li>
        <li>Clique no botão "Próxima" para avançar para a próxima pergunta.</li>
        <li>
            Repita os passos 1 a 3 para cada pergunta até que o quiz seja
            concluído.
        </li>
        <li>
            Ao final do quiz, você receberá sua pontuação total e poderá
            compartilhar seu resultado nas redes sociais.
        </li>
    </ul>

    <p>Divirta-se e boa sorte!</p>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={() => trocaDeEstado("menu")} id="voltar">Voltar ao menu</div>
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
        display: block;
        margin-top: 20px;
        justify-content: center;
        margin: 0 auto;
        max-width: 800px;
        padding: 0 1rem;
        font-size: 30px;
        color: #fff;
    }

    h1 {
        font-family: "Anton", sans-serif;
        font-size: 2.5rem;
        margin-bottom: 1rem;
        color: #fe0404;
    }

    h2 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
        color: #fe0404;
    }

    p {
        font-size: 1.2rem;
        margin-bottom: 1rem;
        color: #fff;
    }

    ul {
        margin-bottom: 1rem;
    }

    #voltar {
        cursor: pointer;
        font-size: 1rem;
        margin-bottom: 1rem;
        float: left;
        color: #fe0404;
        text-decoration: underline;
    }

    #voltar:hover {
        color: #fff;
    }
</style>
