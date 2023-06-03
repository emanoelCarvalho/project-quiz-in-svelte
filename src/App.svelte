<script>
  import { estado } from "./estado";
  import Menu from "./Menu.svelte";
  import Levels from "./Levels.svelte";
  import Game1 from "./Game1.svelte";
  import Game2 from "./Game2.svelte";
  import Sobre from "./Sobre.svelte";
  import WinnerQuiz from "./WinnerQuiz.svelte";
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
