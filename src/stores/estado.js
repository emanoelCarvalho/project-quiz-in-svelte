import { writable } from "svelte/store";

export let estado = writable('menu');

export const trocaDeEstado = (novoEstado) => {
    estado.set(novoEstado);
}
