<script>
  import { estado } from "./estado";
  import Menu from "./Menu.svelte";
  import Levels from "./Levels.svelte";
  import Game1 from "./Game1.svelte";
  import Sobre from "./Sobre.svelte";
</script>

<main>
  {#if $estado == "menu"}
    <Menu />
  {:else if $estado == "levels"}
    <Levels />
  {:else if $estado == "game1"}
    <Game1 />
  {:else if $estado == "sobre"}
    <Sobre />
  {/if}
</main>
