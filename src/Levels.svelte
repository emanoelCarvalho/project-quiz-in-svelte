<script>
    import { estado, trocaDeEstado } from "./estado.js";
</script>

<main>
    <h1 class="title">Sejam bem-vindos à tela de jogar</h1>
    <h2 class="subtitle">Escolha o nível que deseja jogar</h2>

    <p class="description">
        Vale lembrar que para poder jogar o nível seguinte, precisa passar pelo
        nível anterior.
    </p>

    <button class="level-button" on:click={() => trocaDeEstado("game1")}
        >Nível 1</button
    >

    <button class="level-button" on:click={() => trocaDeEstado("game2")}
        >Nível 2</button
    >


    
</main>

<style>
    main {
        overflow: hidden;
    }

    .title {
        font-size: 36px;
        font-weight: bold;
        margin-bottom: 20px;
        font-family: "Anton", sans-serif;
        color: #fe0404;
    }

    .subtitle {
        font-size: 24px;
        margin-bottom: 20px;
    }

    .description {
        font-size: 16px;
        text-align: center;
        margin-bottom: 40px;
    }

    .level-button {
        padding: 10px 20px;
        margin-bottom: 10px;
        font-size: 18px;
        background-color: #fe0404;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .level-button:hover {
        background-color: #fff;
        color: #fe0404;
    }
</style>
