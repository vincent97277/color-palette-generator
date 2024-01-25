<script>
  import unlock from "../assets/unlock.svg";
  import lock from "../assets/lock.svg";
  import { toastStore } from "./toastStore";
  import { createHexStore } from "./hexStore";
  export let hex;
  export let locked;

  const getHexName = async (hex) => {
    const url = `https://www.thecolorapi.com/id?hex=${hex}`;
    const res = await fetch(url);
    const json = await res.json();
    return json.name.value;
  };
  const handleLock = ({ locked, hex }) => {
    console.log(`${locked}, ${hex}`);
    toastStore.addToast({ action: locked ? "lock" : "unlock", hex });
  };

  const hexStore = createHexStore(hex);
  $: hexStore.set(hex);
</script>

<div class="card">
  <div class="palette" style="background: #{$hexStore}" />
  <div class="hex-code">
    <input type="text" size="10" bind:value={hex} />
    <p>
      {hex}
    </p>
    <p>
      {#await getHexName(hex)}
        wait...
      {:then name}
        {name}
      {/await}
    </p>
  </div>
  <div class="lock-icon">
    <label>
      <input
        type="checkbox"
        bind:checked={locked}
        on:change={() => handleLock({ locked, hex })}
      />
      {#if locked}
        <img src={lock} alt="color-locked" />
      {:else}
        <img src={unlock} alt="color-unlocked" />
      {/if}
    </label>
  </div>
</div>

<style>
  .card {
    padding: 0.5em;
    background: var(--color-bg-3);
    border-radius: var(--border-radius);
    display: grid;
    grid-template-columns: 1fr 2fr 0.5fr;
    align-items: center;
  }

  .card .palette {
    height: 100%;
    border-radius: 0.2em;
  }

  .card .lock-icon {
    display: flex;
    width: 3em;
    height: 3em;
    padding: 0.7em;
    opacity: 0.3;
    cursor: pointer;
  }

  .card .lock-icon:hover {
    opacity: 0.5;
  }

  .card .lock-icon input {
    display: none;
  }

  .card .lock-icon img {
    height: 100%;
  }
</style>
