import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import DaysCard from "./DaysCard";

const Weather = ({ city, TodaysWeather, setSidebarUnit }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [unit, setUnit] = useState("metric");
  const [error, setError] = useState(null);
  const [dailyWeather, setDailyWeather] = useState("");
  const [currentWeather, setCurrentWeather] = useState("");
  const daysOfWeek = ["Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu"];

  useEffect(() => {
    const getlatlong = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1bc582f5844a89ab253383172b481a52`
        );
        setLatitude(response.data.coord.lat);
        setLongitude(response.data.coord.lon);
        setError(null); // Reset error state on successful response
      } catch (error) {
        setError("Error fetching latitude and longitude data");
      }
    };

    getlatlong();
  }, [city]);

  useEffect(() => {
    const getweather = async () => {
      if (!latitude || !longitude) {
        return;
      }

      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=${unit}&exclude=hourly,minutely,alerts&appid=1bc582f5844a89ab253383172b481a52`
        );
        console.log(response.data);
        setDailyWeather(response.data.daily);
        setCurrentWeather(response.data.current);
        TodaysWeather(response.data.current);
        setError(null); 
      } catch (error) {
        setError("Error fetching weather data");
      }
    };

    getweather();
  }, [latitude, longitude, unit]);

  function handleUnitClick(selectedUnit) {
    setUnit(selectedUnit);
    setSidebarUnit(selectedUnit);
  }

  function handlemode(){
    
  }

  return (
    <div className="bg-[#F6F6F8]  w-full rounded-tr-lg rounded-br-lg my-2 mr-3 shadow-lg shadow-slate-700">
      {error && <p className="text-red-500">{error}</p>}

      <div className="flex mt-3 ml-3 flex-wrap">
        {dailyWeather &&
          dailyWeather.map((demo, index) => (
            <DaysCard
              key={index}
              {...demo.weather[0]}
              feels_like={demo.feels_like.day}
              {...demo.temp}
              daysOfWeek={daysOfWeek}
              index={index}
            />
          ))}
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="m-4">
          <h1 className="font-semibold text-3xl p-2 m-2 font-customFont text-center md:text-left">
            Today's Highlights
          </h1>
        </div>

        <div className="flex gap-5 p-4  flex-none justify-center items-center">
          

          <button
            className={`border rounded-full p-2 h-8 flex items-center ${
              unit === "metric"
                ? "bg-black text-white"
                : "hover:bg-[#1A1A1A] hover:text-white"
            }`}
            onClick={() => handleUnitClick("metric")}
          >
            °C
          </button>
          <button
            className={`border rounded-full p-2 h-8 flex items-center ${
              unit === "imperial"
                ? "bg-black text-white"
                : "hover:bg-[#1A1A1A] hover:text-white"
            }`}
            onClick={() => handleUnitClick("imperial")}
          >
            °F
          </button>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        {currentWeather && (
          <Card
            {...currentWeather}
            weather={currentWeather.weather[0]}
            unit={unit}
          />
        )}
      </div>
    </div>
  );
};

export default Weather;
