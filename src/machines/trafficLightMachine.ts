import { createActor, createMachine } from "xstate";

const trafficLightMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcBOBDAZpglgYwBkcoALZAOlUgGIAPWZdZMcrZ1ACgGYAGPgSmposuQsTKVIAbR4BdRKAAOAe1g5kOZQDsFIWogCMvcgBYAnBbMB2AKxcTPGzwAcXADQgAnogBMPA+S2fAY+ZiY+djYmzgC+MR7C2PhEpBRQVGBadAxMLGxgnH4CQhhJYqnk6WCZMvJIICpqGtq6+ghcTuQG-jZWVv48DtEe3gh+AUF8oU5Rg7HxIImiKRKeYAA268oA7tmMzKyY7BzdxUvJ4hRrmzu1uo3qmjr1bR0BZqH9PuFcVgBsfRGiGcAScfEGZgMtmcVhMNjiCy0yggcF053KZHuqkeLReiAAtH8gQhCXEEqVlpdJBAsU0nq1EOFic4-uQXFx7B9rP0uM55uSRBcKlVMrScc9QG0IiYulZrP4DDYbAYzDYWcSioEwQYTH87HwbGYyYsKULVhsttsxc0JXpGVYuORfk4DH9un9nDxucznOQ1RzzJ8eXyETEgA */
  id: "trafficLight",

  initial: "red",

  states: {
    red: {
      after: {
        5000: "green",
      },
    },

    green: {
      after: {
        3000: "yellow",
      },
    },
    yellow: {
      after: {
        2000: "red",
      },
    },
  },
});

export const trafficLightActor = createActor(trafficLightMachine);

// We can subscribe to an actor to be notified whenever its state changes
trafficLightActor.subscribe((snapshot) => {
  // snapshot contains the current state of the actor and other metadata
  // The current state of the actor is in snapshot.value
  console.log(snapshot.value);
});

// Start running the actor.
// It will go to the initial state and transition to other states from there
trafficLightActor.start();
