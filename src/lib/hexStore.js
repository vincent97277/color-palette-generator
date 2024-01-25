import { tweened } from "svelte/motion";

export const createHexStore = (hex) => {
  const hexStore = tweened(hex, {
    duration: 500,
    interpolate: (a, b) => (t) => {
      const rA = parseInt(a.slice(0, 2), 16);
      const gA = parseInt(a.slice(2, 4), 16);
      const bA = parseInt(a.slice(4, 6), 16);

      const rB = parseInt(b.slice(0, 2), 16);
      const gB = parseInt(b.slice(2, 4), 16);
      const bB = parseInt(b.slice(4, 6), 16);

      const rT = ("0" + Math.round((rB - rA) * t + rA).toString(16)).slice(-2);
      const gT = ("0" + Math.round((gB - gA) * t + gA).toString(16)).slice(-2);
      const bT = ("0" + Math.round((bB - bA) * t + bA).toString(16)).slice(-2);

      return rT + gT + bT;
    },
  });

  return hexStore;
}
