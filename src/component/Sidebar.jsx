import React, { useState } from "react";

const Sidebar = ({ updateCity, currentWeather, sidebarUnit, recentSearches }) => {
  const [inputCity, setInputCity] = useState("");

  const handleButtonClick = () => {
    updateCity(inputCity || "Gurgaon");
  };

  return (
    <>
      <div className="bg-[#FFFFFE] my-2 rounded-tl-lg rounded-bl-lg lg:ml-3 w-full md:w-[69%] lg:w-[50%] shadow-lg shadow-slate-700">
        <div className="w-full shadow shadow-slate-400 rounded-lg py-7 pl-2 flex items-center flex-col">
          <div className="">
            <i className="ri-search-line mr-3 rounded-full" />
            <input
              className="p-2 border border-black rounded-lg flex-grow"
              type="text"
              placeholder="Gurgaon"
              value={inputCity}
              onChange={(e) => setInputCity(e.target.value)}
            />
            <button className="rounded underline ml-3" onClick={handleButtonClick}>
              Search
            </button>
          </div>
          {currentWeather && currentWeather.weather && (
            <img className="w-20 h-20 m-2" src={`http://openweathermap.org/img/w/${currentWeather.weather[0].icon}.png`} alt="" />
          )}
          <h1 className="text-5xl md:text-4xl font-semibold md:text-left pl-6 md:px-10 md:pt-3">
            {currentWeather && currentWeather.temp !== undefined
              ? `${Math.floor(currentWeather.temp)} ${sidebarUnit === "metric" ? "°C" : "°F"}`
              : "Loading..."}
          </h1>
        </div>

        <div className="mb-4">
          <h2 className="text-3xl font-semibold p-5">Recent Searches</h2>
          <ul>
            {recentSearches.map((search, index) => (
              <li
                key={index}
                className="cursor-pointer shadow-lg shadow-gray-600 p-2 border border-black rounded-xl mx-4 mb-3 text-3xl uppercase"
                onClick={() => updateCity(search)}
              >
                {search}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
