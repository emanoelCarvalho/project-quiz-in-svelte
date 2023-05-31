<script>
    import { trocaDeEstado } from "./estado";
</script>

<main>
    <div id="container">
        <h1 id="title-quiz"><strong style=" color: #fff;">Quiz</strong> <strong style="color: red;">Marvel</strong></h1>

        <div id="menu">
            <button id="btn-jogar" on:click={() => trocaDeEstado("levels")}
                >Jogar</button
            >
            <button id="btn-sobre" on:click={() => trocaDeEstado("sobre")}
                >Sobre</button
            >
        </div>
    </div>
</main>

<style>

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
    }
    #title-quiz {
        text-align: center;
        color: #000;
        font-size: 50px;
        font-family: "Marvel", sans-serif;
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
    #btn-jogar {
        background-color: red;
        color: white;
    }
    #btn-jogar:hover {
        background-color: #32CD32;
    }
    #btn-sobre {
        background-color: #191970;
        color: white;
    }
    #btn-sobre:hover {
        background-color: #32cd32;
    }
    #container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        /* margin-top: 10em; */
    }
</style>
