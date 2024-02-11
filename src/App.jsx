import React, { useState, useEffect } from "react";
import Sidebar from "./component/Sidebar";
import Weather from "./component/Weather";

const App = () => {
  const [city, setCity] = useState('Gurgaon');
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [sidebarUnit, setSidebarUnit] = useState("metric");
  const [recentSearches, setRecentSearches] = useState([]);

  // Updating recent searches when a new city is searched
  const handleSearch = (newCity) => {
    setCity(newCity);

    // Clear current weather data when a new city is selected
    setCurrentWeatherData(null); 

    // Updateing recent searches
    setRecentSearches(prevSearches => {
      // Remove the newCity if it already exists in recent searches
      const updatedSearches = prevSearches.filter(search => search !== newCity);

      // Add the newCity to the beginning of the array
      return [newCity, ...updatedSearches.slice(0, 4)]; 
    });
  };
  return (
    <div className="min-h-screen w-full bg-[#D6D7DA]">
      <div className="flex flex-col md:flex-row min-h-screen w-full">
        <Sidebar updateCity={handleSearch} currentWeather={currentWeatherData} sidebarUnit={sidebarUnit} recentSearches={recentSearches} />
        <Weather city={city} TodaysWeather={setCurrentWeatherData} setSidebarUnit={setSidebarUnit} />
      </div>
    </div>
  );
};

export default App;
