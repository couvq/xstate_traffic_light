import { createActor, createMachine } from "xstate";

const trafficLightMachine = createMachine({
    /** @xstate-layout N4IgpgJg5mDOIC5QBcBOBDAZpglgYwBkcoALZAOlUgGJkBXVAOwHEqxGBtABgF1FQADgHtYOZDiGN+IAB6IAjAGYu5AKwAaEAE9EAJi7zyu1QF8TmtFlyFiZclDaNaDRgE0wAGw9CA7tz5IIMKi4pLScgiKAGyKRlyK8saaOgj6hsZmFhjY+ESkFFqe3j7OTABKkP7SwWISUoERigAchlwA7PGJGtqITSqmmSCMQhBw0pY5NvnVIrVhDYgAtFHJS1GDE9Z5dlQQMyF14YgALLqrCE1Rak2Kt3f3txvZW7YUDmDs+3P1oBG6UW0jC0kj1UgZyG0BlkrLlXuRCl5fF9Qj9ZIhVOCAJxtKKqKIglJNTHkLg3B7ksxmIA */
    id: 'trafficLight',

    initial: "red",

    states: {
        red: {
            on: {
                turnGreen: "green"
            }
        },

        green: {
            on: {
                turnYellow: "yellow"
            }
        },
        yellow: {
            on: {
                turnRed: "red"
            }
        }
    }
})

const trafficLightActor = createActor(trafficLightMachine)

// We can subscribe to an actor to be notified whenever its state changes
trafficLightActor.subscribe((snapshot) => { // snapshot contains the current state of the actor and other metadata
    // The current state of the actor is in snapshot.value
    console.log(snapshot.value);
  })
  
  // Start running the actor.
  // It will go to the initial state and transition to other states from there
  trafficLightActor.start();