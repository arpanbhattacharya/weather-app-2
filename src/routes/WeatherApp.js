import React, { useState } from "react";

const WeatherApp = () => {
  let [name, setName] = useState("");
  let [location, setLocation] = useState("");
  let [temp, setTemp] = useState("");
  let [desc, setDesc] = useState("");

  const weather_api_key = "d7783ec8fe96acacf8bede71ecdeed2c";

  const api_url =
    "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

  return (
    <div className="container">
      <h1 className="title">Weather App</h1>
      <div className="weather-card">
        <div className="search-container">
          <input
            type="text"
            className="search-box"
            placeholder="Search location"
            onChange={(ev) => {
              setName(ev.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={async () => {
              const resp = await fetch(
                api_url + name + `&appid=${weather_api_key}`
              );
              var data = await resp.json();

              console.log(data);
              setLocation(data.name);
              setTemp(Math.round(data.main.temp) + "°C");
              setDesc(data.weather[0].main);
            }}
          >
            Go
          </button>
        </div>
        <div className="weather-info">
          <h2 className="temperature">{temp}</h2>
          <p className="location">{location}</p>
          <p className="description">{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherApp;
