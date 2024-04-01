import { useEffect } from "react";
import { useState } from "react";

export default function Navigation() {
  const [weather, setWeather] = useState("");

  const [time, setTime] = useState(new Date().toLocaleTimeString());
  useEffect(() => {
    const UpdateTime = () => {
      setTime(new Date().toLocaleTimeString());
    };
    setInterval(UpdateTime);
  }, []);

  useEffect(() => {
    async function getWeather() {
      const res = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=38.6275&longitude=-92.5666&current=temperature_2m"
      );
      const data = await res.json();

      setWeather(
        data.current.temperature_2m + data.current_units.temperature_2m
      );
    }

    getWeather();
  }, []);

  return (
    <nav id="navigation">
      <h3> Plask </h3>
      <h3> {time} </h3>
      <h3>{weather}</h3>
    </nav>
  );
}
