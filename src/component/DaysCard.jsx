import React from "react";

const DaysCard = ({ icon,  daysOfWeek, index, day,feels_like }) => {
  const adjustedIndex = (index + new Date().getDay() + 1) % 7;
  return (
    <div className="flex">
      <div className="border flex flex-col w-28 h-30 m-1 justify-center items-center border-black rounded-lg shadow-md shadow-gray-600 ">
        <h1>{daysOfWeek[adjustedIndex]}</h1>
        <img className="" src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
        <div className="flex gap-2 justify-center items-center">
        <span className=" font-medium">
        {Math.floor(day)}°
        </span>
        <span className=" text-[#C1C1C1] font-normal">
          {Math.floor(feels_like)}°</span>
        </div>
      </div>
    </div>
  );
};

export default DaysCard;
