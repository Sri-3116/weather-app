import { useState } from "react";
import { getWeather } from "./weather-app";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchWeather = async () => {
    if (!city.trim()) {
      setError("Please enter a city name.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setWeather(null);

      const data = await getWeather(city);

      setWeather(data);
    } catch (error) {
      console.error(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  /* --------------------------------
     DETERMINE WEATHER ENVIRONMENT
  -------------------------------- */

  const getWeatherMode = () => {
    if (!weather) return "default";

    const condition = weather.weather[0].main.toLowerCase();

    const now = Math.floor(Date.now() / 1000);

    const isNight =
      now < weather.sys.sunrise ||
      now > weather.sys.sunset;

    if (condition.includes("thunderstorm")) {
      return "storm";
    }

    if (
      condition.includes("rain") ||
      condition.includes("drizzle")
    ) {
      return isNight ? "night-rain" : "rain";
    }

    if (condition.includes("snow")) {
      return "snow";
    }

    if (
      condition.includes("cloud")
    ) {
      return isNight ? "night-cloud" : "cloudy";
    }

    if (
      condition.includes("clear")
    ) {
      return isNight ? "night-clear" : "clear";
    }

    return isNight ? "night-clear" : "clear";
  };

  const mode = getWeatherMode();

  const weatherIcon = weather
    ? `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`
    : "";

  return (
    <div className={`app ${mode}`}>

      {/* =================================
          ATMOSPHERIC BACKGROUND
      ================================= */}

      <div className="sky">

        <div className="stars"></div>

        <div className="cloud cloud-one"></div>
        <div className="cloud cloud-two"></div>
        <div className="cloud cloud-three"></div>
        <div className="cloud cloud-four"></div>

        <div className="rain-layer">
          {Array.from({ length: 90 }).map((_, index) => (
            <span
              key={index}
              className="rain-drop"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${0.5 + Math.random() * 0.7}s`,
              }}
            ></span>
          ))}
        </div>

        <div className="snow-layer">
          {Array.from({ length: 45 }).map((_, index) => (
            <span
              key={index}
              className="snow-flake"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 5}s`,
              }}
            >
              ❄
            </span>
          ))}
        </div>

        <div className="lightning"></div>

      </div>

      {/* =================================
          MAIN CONTAINER
      ================================= */}

      <div className="weather-container">

        {/* HEADER */}

        <div className="header">

          <div className="weather-logo">
            🌞
          </div>

          <h1>
            Weather App
          </h1>

          <p>
           Real-time weather updates
          </p>

        </div>

        {/* SEARCH */}

        <div className="search-container">

          <input
            type="text"
            placeholder="Search any city..."
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchWeather();
              }
            }}
          />

          <button
            onClick={searchWeather}
            disabled={loading}
          >
            {loading ? "Loading..." : "Search"}
          </button>

        </div>

        {/* ERROR */}

        {error && (
          <div className="error">
            ❌ {error}
          </div>
        )}

        {/* LOADING */}

        {loading && (
          <div className="loading">

            <div className="spinner"></div>

            <p>Analyzing atmospheric pressure
            </p>

          </div>
        )}

        {/* =================================
            WEATHER RESULT
        ================================= */}

        {weather && !loading && (

          <div className="weather-result">

            {/* LOCATION */}

            <div className="location">

              <span className="location-label">
                
              </span>

              <h2>
                📌{weather.name}
              </h2>

              <p>
                {weather.sys.country}
              </p>

            </div>

            {/* MAIN WEATHER */}

            <div className="current-weather">

              <div className="weather-icon-wrapper">

                <img
                  src={weatherIcon}
                  alt={weather.weather[0].description}
                />

              </div>

              <div className="temperature">

                <h3>
                  {Math.round(weather.main.temp)}
                  <span>°C</span>
                </h3>

                <p>
                  {weather.weather[0].description}
                </p>

              </div>

            </div>

            {/* DETAILS */}

            <div className="details">

              <div className="detail-card">

                <span>🥶</span>

                <strong>
                  FEELS LIKE
                </strong>

                <p>
                  {Math.round(
                    weather.main.feels_like
                  )}°C
                </p>

              </div>

              <div className="detail-card">

                <span>💧</span>

                <strong>
                  HUMIDITY
                </strong>

                <p>
                  {weather.main.humidity}%
                </p>

              </div>

              <div className="detail-card">

                <span>🌬️</span>

                <strong>
                  WIND
                </strong>

                <p>
                  {weather.wind.speed} m/s
                </p>

              </div>

              <div className="detail-card">

                <span>💭</span>

                <strong>
                  CLOUD COVER
                </strong>

                <p>
                  {weather.clouds.all}%
                </p>

              </div>

              <div className="detail-card">

                <span>⬇️</span>

                <strong>
                  LOW
                </strong>

                <p>
                  {Math.round(
                    weather.main.temp_min
                  )}°C
                </p>

              </div>

              <div className="detail-card">

                <span>⬆️</span>

                <strong>
                  HIGH
                </strong>

                <p>
                  {Math.round(
                    weather.main.temp_max
                  )}°C
                </p>

              </div>

            </div>
            </div>

        )}

        {/* WELCOME */}

        {!weather && !loading && !error && (

          <div className="welcome">

          </div>

        )}

      </div>

    </div>
  );
}

export default App;