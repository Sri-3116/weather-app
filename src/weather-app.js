import axios from "axios";

const API_KEY = "1d78b48ff2340c63bbc55f5a24369cfd";

export async function getWeather(city) {
  if (!city || !city.trim()) {
    throw new Error("Please enter a city.");
  }

  const url =
    `https://api.openweathermap.org/data/2.5/weather` +
    `?q=${encodeURIComponent(city.trim())}` +
    `&appid=${API_KEY}` +
    `&units=metric`;

  try {
    const response = await axios.get(url);

    const data = response.data;

    console.log("Weather Information:", data);

    return data;

  } catch (error) {
    console.error("Weather Request Error:", error);

    if (error.response) {
      if (error.response.status === 401) {
        throw new Error("Invalid credentials. Weather service access denied.");
      }

      if (error.response.status === 404) {
        throw new Error("City not found. Please check the spelling.");
      }

      throw new Error(
        error.response.data?.message ||
        "Weather service unavailable."
      );
    }

    if (error.request) {
      throw new Error(
        "Unable to connect to the weather service."
      );
    }

    throw new Error(
      error.message ||
      "Failed to establish a connection with the weather service."
    );
  }
}
