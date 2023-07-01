<script>
    import swal from "sweetalert";
    import { estado, trocaDeEstado } from "../stores/estado.js";

    const precisaConcluirLevel = () => {
        swal({
            title: "Atenção!",
            text: "Você precisa concluir o nível 1 para poder jogar o nível 2",
            icon: "warning",
        });
    };
</script>

<main>
    <div class="container">
        <h1>Sejam bem-vindos à tela de níveis</h1>
        <h2>Escolha o nível que deseja jogar</h2>
        <p>
            Vale lembrar que para poder jogar o próximo nível, precisa passar
            pelo nível anterior
        </p>

        <button class="btn-nivel" on:click={() => trocaDeEstado("game1")}
            >Nível 1</button
        >

        <button class="btn-nivel" on:click={() => precisaConcluirLevel()}
            >Nível 2</button
        >
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
        overflow: hidden;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    .container {
        text-align: center;
    }

    h1 {
        color: #fe0404;
        font-size: 40px;
        font-family: "Anton", sans-serif;
        margin-bottom: 10px;
    }

    h2 {
        color: #fff;
        font-size: 30px;
        font-family: "Anton", sans-serif;
        margin-bottom: 20px;
    }

    p {
        color: #fff;
        font-size: 20px;
        margin-bottom: 30px;
    }

    .btn-nivel {
        background-color: #fe0404;
        color: #fff;
        font-size: 24px;
        font-family: "Anton", sans-serif;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color 0.3s ease;
    }

    .btn-nivel:hover {
        background-color: #fff;
        color: #fe0404;
    }
</style>
