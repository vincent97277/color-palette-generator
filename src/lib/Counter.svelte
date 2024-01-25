<script>
  import { createEventDispatcher } from "svelte";
  import shuffle from "../assets/shuffle.svg";

  export let count = 100;

  const dispatch = createEventDispatcher();

  const handleClick = (delta) => {
    dispatch("changeCount", delta);
  };

  const handleShuffle = () => dispatch("shuffle");
</script>

<section>
  <h1>Create Color Palette for Me!</h1>

  <div class="controller">
    <div class="counter">
      <button on:click={() => handleClick(-1)}>
        <svg aria-hidden="true" viewBox="0 0 1 1">
          <path d="M0,0.5 L1,0.5" />
        </svg>
      </button>
      <div class="counter-viewer">
        <p>{count}</p>
      </div>
      <button on:click={() => handleClick(1)}>
        <svg aria-hidden="true" viewBox="0 0 1 1">
          <path d="M0,0.5 L1,0.5 M0.5,0 L0.5,1" />
        </svg>
      </button>
    </div>

    <div class="shuffle">
      <button on:click={handleShuffle}>
        <p>Shuffle<span><img src={shuffle} alt="shuffle" /></span></p>
      </button>
    </div>
  </div>
</section>

<style>
  h1 {
    margin: 0.5em 0;
  }

  .counter {
    display: flex;
    justify-content: center;
  }

  .counter button {
    width: 4em;
    height: 4em;
    border-radius: var(--border-radius);
    background: var(--color-bg-3);
    outline: none;
    border: none;
    cursor: pointer;
  }

  .counter button:hover {
    background: #fff;
  }

  .shuffle {
    width: 100%;
  }

  .shuffle button {
    width: 100%;
  }

  .counter {
    display: flex;
    justify-content: center;
  }

  .counter .counter-viewer {
    width: 4em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 2em;
    font-weight: 600;
  }

  svg {
    width: 25%;
    height: 25%;
  }

  path {
    vector-effect: non-scaling-stroke;
    stroke-width: 2px;
    stroke: #444;
  }

  img {
    padding-left: 0.4em;
    opacity: 0.5;
  }
</style>
