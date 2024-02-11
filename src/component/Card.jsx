import React from 'react';
import { gettime } from '../Hooks/Usetime';
import up from "../assets/up.png";
import down from "../assets/down.png";

const Card = ({ wind_speed, sunrise, sunset, humidity, visibility, weather, uvi, unit }) => {
  const rise = gettime(sunrise);
  const set = gettime(sunset);

  return (
    <>
      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2 p-3 h-auto md:h-52 rounded-xl shadow-lg shadow-gray-600">
        <h1 className="text-xl font-semibold m-3 text-[#BEBEBE]">Weather</h1>
        <div className='flex flex-col justify-center items-center '>
          <img className="w-20" src={`http://openweathermap.org/img/w/${weather.icon}.png`} alt="" />
          <p className='uppercase font-semibold tracking-[3px] mb-1'>{weather.description}</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2 p-3 h-auto md:h-52 rounded-xl shadow-lg shadow-gray-600">
        <h1 className="text-xl font-semibold m-3 text-[#BEBEBE]">
          Wind Status
        </h1>
        <p className="text-3xl m-4 font-bold ">{wind_speed}{" "}{unit === "metric" ? "M/Sec" : "Km/h"}</p>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2 p-3 h-auto md:h-52 rounded-xl shadow-lg shadow-gray-600">
        <h1 className="text-xl font-semibold m-3 text-[#BEBEBE]">
          Sunrise & Sunset
        </h1>
        <div className="flex gap-5 items-center ">
          <img className="h-10 w-10 " src={up} alt="" />
          <p className="m-2 text-xl font-semibold">{rise} AM</p>
        </div>
        <div className="flex gap-5 items-center ">
          <img className="h-10 w-10" src={down} alt="" />
          <p className="m-2 text-xl font-semibold">{set} PM</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2 p-3 h-auto md:h-52 rounded-xl shadow-lg shadow-gray-600">
        <h1 className="text-xl font-semibold m-3 text-[#BEBEBE]">Humidity</h1>
        <p className="text-3xl m-4 font-bold ">{humidity} %</p>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2 p-3 h-auto md:h-52 rounded-xl shadow-lg shadow-gray-600">
        <h1 className="text-xl font-semibold m-3 text-[#BEBEBE]">
          Visibility
        </h1>
        <p className="text-3xl m-4 font-bold ">{visibility / 100} KM </p>
      </div>

      <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 m-2 p-3 h-auto md:h-52 rounded-xl shadow-lg shadow-gray-600">
        <h1 className="text-xl font-semibold m-3 text-[#BEBEBE]">
          UV Index
        </h1>
        <p className="text-3xl m-4 font-bold ">{uvi} </p>
      </div>
    </>
  );
};

export default Card;
