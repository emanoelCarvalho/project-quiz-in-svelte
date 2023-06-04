<script>
  import { estado } from "./stores/estado";
  import Menu from "./Components/Menu.svelte";
  import Levels from "./Components/Levels.svelte";
  import Game1 from "./Components/Game1.svelte";
  import Game2 from "./Components/Game2.svelte";
  import Sobre from "./Components/Sobre.svelte";
  import WinnerQuiz from "./Components/WinnerQuiz.svelte";
</script>

<main>
  {#if $estado == "menu"}
    <Menu />
  {:else if $estado == "levels"}
    <Levels />
  {:else if $estado == "game1"}
    <Game1 />
  {:else if $estado == "game2"}
    <Game2 />
  {:else if $estado == "winnerQuiz"}
    <WinnerQuiz />
  {:else if $estado == "sobre"}
    <Sobre />
  {/if}
</main>
