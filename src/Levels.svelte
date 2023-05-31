<script>
    import { estado, trocaDeEstado } from "./estado";
    import Levels from "./Levels.svelte";
    import Game1 from "./Game1.svelte";

    let level1Passed = false;
    let level2Passed = false;
    let level3Passed = false;
</script>
<style>
    /* Estilos CSS compartilhados por todos os níveis */
    .level-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        background-color: #f1f1f1;
    }

    .level-title {
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    .level-description {
        font-size: 16px;
        text-align: center;
        margin-bottom: 20px;
    }

    .level-button {
        padding: 10px 20px;
        font-size: 16px;
        font-weight: bold;
        background-color: #fe0404;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .level-button:hover {
        background-color: #c40000;
    }
</style>

<main>
    {#if !level1Passed}
    <div class="level-container">
        <h1 class="level-title">Nível 1</h1>
        <p class="level-description">Complete o Nível 1 para desbloquear o próximo.</p>
        <button class="level-button" on:click={() => trocaDeEstado("game1")}>Passar para o Próximo Nível</button>
    </div>
    {:else if !level2Passed}
    <div class="level-container">
        <h1 class="level-title">Nível 2</h1>
        <p class="level-description">Complete o Nível 2 para desbloquear o próximo.</p>
        <button class="level-button" on:click={() => level2Passed = true}>Passar para o Próximo Nível</button>
    </div>
    {:else if !level3Passed}
    <div class="level-container">
        <h1 class="level-title">Nível 3</h1>
        <p class="level-description">Complete o Nível 3 para concluir o jogo.</p>
        <button class="level-button" on:click={() => level3Passed = true}>Concluir o Jogo</button>
    </div>
    {:else}
    <div class="level-container">
        <h1 class="level-title">Parabéns!</h1>
        <p class="level-description">Você concluiu todos os níveis.</p>
    </div>
    {/if}
</main>