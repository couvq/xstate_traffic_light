import { useSelector } from "@xstate/react";
import { trafficLightActor } from "./machines/trafficLightMachine";

const TrafficLight = () => {
  const value = useSelector(trafficLightActor, (snapshot) => snapshot.value);

  return (
    <>
      <div>{JSON.stringify(value)}</div>
    </>
  );
};

export default TrafficLight;
