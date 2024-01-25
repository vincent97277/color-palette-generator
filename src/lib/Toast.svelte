<script>
  import { scale, fade } from "svelte/transition";
  import { elasticInOut } from "svelte/easing";
  import { toastStore } from "./toastStore";
  import plus from "../assets/plus.svg";
  import minus from "../assets/minus.svg";
  import lock from "../assets/lock.svg";
  import unlock from "../assets/unlock.svg";
  export let toast;

  const icons = { plus, minus, lock, unlock };
  $: icon = icons[toast.action];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<div
  class="toast"
  on:click={() => toastStore.removeToast({ id: toast.id })}
  in:scale={{ easing: elasticInOut }}
  out:fade
>
  <div class="icon">
    <img src={icon} alt={toast.action} />
  </div>
  <div class="hex" style="color: #{toast.hex}">{toast.hex}</div>
</div>

<style>
  .toast {
    font-size: 1.2em;
    font-weight: bold;
    width: 10em;
    padding: 1em 0;
    background: #fff;
    display: flex;
    justify-content: center;
    border-radius: 0.5em;
    gap: 1em;
    position: fixed;
    bottom: 1em;
    left: 50%;
    transform: translateX(-50%);
  }

  .toast .icon {
    width: 1.2em;
  }

  .toast .hex {
    width: 5em;
  }
</style>
