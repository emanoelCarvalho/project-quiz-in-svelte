<script>
  import { estado } from "./estado";
  import Menu from "./Menu.svelte";
  import Jogar from "./Jogar.svelte";
</script>

<main>
  {#if $estado == "menu"}
  <Menu />
  {:else if $estado == "jogar"}
  <Jogar />
  {/if}
  
</main>