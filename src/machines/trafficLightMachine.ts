import { useSelector } from "@xstate/react";
import { createActor, createMachine, type SnapshotFrom } from "xstate";

const trafficLightMachine = createMachine({
  /** @xstate-layout N4IgpgJg5mDOIC5QBcBOBDAZpglgYwBkcoALZAOlUgGIAPWZdZMcrZ1ACgFYAGPgSmposuQsTKVIAbR4BdRKAAOAe1g5kOZQDsFIWogCMAZh7kALAE4rFgBwAmC1xtHLRgDQgAnojs8D5AHZLax4jEy5HMwBfKI9hbHwiUgooKjAtOgYmFjYwThMBIQwEsWTyVLB0mXkkEBU1DW1dfQQXC0CXIxtQuwMbLgA2AfcvHz9A4KtQ8MiYuOLRJIlPMAAbVeUAd0zGZlZMdg5fQvjF8QoV9a3q3Xr1TR1alqNecgMzHmGzewCuAzsuB5vAgbP5eHweHY7M4Ap8zNE5iAtMoIHBdKdEudbqp7k0nogALQDIGEgbkCEUyl8AKIjGlCRUCDYhoPZqIMx2Ekgsk8ZwuYYvCwBAZQ2kLTFlCrpZm4x6gFoAozkUF2b6RP4DCxmLnHQLggy8l5ceFasUiCXLNYbTYyxpyvTsgJKszvHgBJ0i2xOgJcmw2chOMJmAURYWimJRIA */
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

type TrafficMachineSnapshot = SnapshotFrom<typeof trafficLightMachine>

// hook to read state snapshot, strongly typed
export const useTrafficLightSnapshot = (): TrafficMachineSnapshot => {
  return useSelector(trafficLightActor, (snapshot) => snapshot)
}
