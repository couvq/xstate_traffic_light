import { useTrafficLightSnapshot } from "./machines/trafficLightMachine";

type TrafficLightColor = "green" | "yellow" | "red" | "grey";
interface LightProps {
  color: TrafficLightColor;
}

const Light = ({ color }: LightProps) => {
  return <div className={`light light_${color}`}></div>;
};

const GreenLight = () => {
  const snapshot = useTrafficLightSnapshot();
  const isLightGreen = snapshot.matches("green");
  if (isLightGreen) {
    return <Light color="green" />;
  } else {
    return <Light color="grey" />;
  }
};

const YellowLight = () => {
  const snapshot = useTrafficLightSnapshot();
  const isLightYellow = snapshot.matches("yellow");
  if (isLightYellow) {
    return <Light color="yellow" />;
  } else {
    return <Light color="grey" />;
  }
};

const RedLight = () => {
  const snapshot = useTrafficLightSnapshot();
  const isLightRed = snapshot.matches("red");
  if (isLightRed) {
    return <Light color="red" />;
  } else {
    return <Light color="grey" />;
  }
};

const TrafficLight = () => {
  return (
    <div className="traffic_light">
      <GreenLight />
      <YellowLight />
      <RedLight />
    </div>
  );
};

export default TrafficLight;
