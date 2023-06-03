<script>
    import { estado, trocaDeEstado } from "./estado.js";
</script>

<main>
    <h1 class="parabens">Parabéns, você ganhou!</h1>

    <h2>Esperamos que tenha gostado do Quiz</h2>

    <p>Aguardem novos desafios</p>

    <button class="btn-voltar" on:click={() => trocaDeEstado("menu")}>Voltar ao menu</button>
</main>

<style>
    main {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 90vh;
        background-color: #000;
        color: #fff;
        font-family: "Roboto", sans-serif;
    }

    .parabens {
        font-size: 50px;
        font-family: "Anton", sans-serif;
        animation-name: parabensAnimation;
        animation-duration: 3s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
    }

    @keyframes parabensAnimation {
        0% {
            opacity: 0;
            transform: scale(0.5);
        }
        50% {
            opacity: 1;
            transform: scale(1.2);
        }
        100% {
            opacity: 0;
            transform: scale(0.5);
        }
    }

    .btn-voltar {
        margin-top: 20px;
        border: 1px solid #fe0404;
        border-radius: 10px;
        font-size: 20px;
        font-family: "Anton", sans-serif;
        display: block;
        background-color: transparent;
        color: #fe0404;
        padding: 10px 20px;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .btn-voltar:hover {
        background-color: #fe0404;
        color: #fff;
    }
</style>
