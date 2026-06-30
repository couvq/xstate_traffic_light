import { useSelector } from "@xstate/react";
import { trafficLightActor } from "./machines/trafficLightMachine";

const TrafficLight = () => {
  const value = useSelector(trafficLightActor, (snapshot) => snapshot.value);
  
  return <>
    <div>{JSON.stringify(value)}</div>
    <button onClick={() => trafficLightActor.send({ type: 'turnGreen'})}>Turn Green</button>
    <button onClick={() => trafficLightActor.send({ type: 'turnYellow'})}>Turn Yellow</button>
    <button onClick={() => trafficLightActor.send({ type: 'turnRed'})}>Turn Red</button>
  </>;
};

export default TrafficLight;
