<script>
  import Palette from "./Palette.svelte";
  export let palettes;
</script>

<div class="palettes">
  {#each palettes as { hex, locked, id } (id)}
    <Palette bind:hex bind:locked />
  {:else}
    <div class="card no-color">
      <div>
        <p>No color to show. Please add a color.</p>
      </div>
    </div>
  {/each}
</div>

<style>
  .palettes {
    margin: 1em;
    flex: 1;
    display: grid;
    gap: 0.5em;
  }

  .card {
    padding: 0.5em;
    background: var(--color-bg-3);
    border-radius: var(--border-radius);
    display: grid;
    grid-template-columns: 1fr 2fr 0.5fr;
    align-items: center;
  }

  .card.no-color {
    font-size: 1.5em;
    grid-template-columns: 1fr;
  }
</style>
