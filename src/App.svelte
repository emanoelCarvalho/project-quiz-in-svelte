<script>
  import { estado } from "./estado";
  import Menu from "./Menu.svelte";
  import Jogar from "./Jogar.svelte";
  import Sobre from "./Sobre.svelte";
</script>

<main>
  {#if $estado == "menu"}
  <Menu />
  {:else if $estado == "jogar"}
  <Jogar />
  {:else if $estado == "sobre"}
  <Sobre />
  {/if}
  
</main>