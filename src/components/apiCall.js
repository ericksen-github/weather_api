const apiFunctions = (() => {
  // starts the api call process
  async function newCall(location) {
    // sets London as initial city to search and adds listeners to appropriate buttons
    if (location == "initial call") {
      location = "London";
    }

    try {
      const response = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          location +
          "&APPID=b0724c24118141e549b0048fcae7ce4d",
        { mode: "cors" }
      );

      handleInfo(await response.json());
    } catch (error) {
      alert("There was an error with your search.");
    }
  }

  // takes response.json() data and adds it to an object info
  const handleInfo = (newData) => {
    const info = {};
    info.currentTemp = (parseFloat(newData.main.temp) - 273.15).toFixed(1);
    info.weatherStatus = newData.weather[0].main;
    info.weatherDescription = newData.weather[0].description;
    info.location = newData.name + ", " + newData.sys.country;
    info.tempHigh = (parseFloat(newData.main.temp_max) - 273.15).toFixed(1);
    info.tempLow = (parseFloat(newData.main.temp_min) - 273.15).toFixed(1);
    info.humidity = newData.main.humidity;

    console.log(info);
  };

  return {
    newCall,
  };
})();

export { apiFunctions };
