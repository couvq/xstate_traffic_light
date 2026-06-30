import { useTrafficLightSnapshot } from "./machines/trafficLightMachine";

type TrafficLightColor = "green" | "yellow" | "red" | "grey";
interface LightProps {
  color: TrafficLightColor;
}

const Light = ({ color }: LightProps) => {
  return <div className={`light light_${color}`}></div>;
};

const TrafficLight = () => {
  const snapshot = useTrafficLightSnapshot();
  const activeColor = snapshot.value as TrafficLightColor

  return (
    <div className="traffic_light">
      {["green", "yellow", "red"].map((c) => (
        <Light key={c} color={c === activeColor ? c : 'grey'}/>
      ))}
    </div>
  );
};

export default TrafficLight;
