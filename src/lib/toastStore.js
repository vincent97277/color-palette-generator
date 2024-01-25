import { writable } from "svelte/store";

const createToastStore = () => {
  let uuid = 0;
  const { subscribe, update } = writable([]);

  return {
    subscribe,
    addToast: ({ action, hex }) => {
      const id = uuid++;
      update(state => [...state, { action, hex, id: id }])
      setTimeout(() => update(state => state.filter(x => x.id !== id)), 5000)
    },
    removeToast: ({ id }) => update(state => state.filter(x => x.id !== id)),
  }
}

export const toastStore = createToastStore();
