import { useSelector } from "@xstate/react";
import { trafficLightActor } from "./machines/trafficLightMachine";

const TrafficLight = () => {
  const value = useSelector(trafficLightActor, (snapshot) => snapshot.value);
  console.log(value)
  return <div>TrafficLight</div>;
};

export default TrafficLight;
