# 🌞 Weather App

**Weather App** is a modern and immersive weather application built using React.js, JavaScript, CSS3, and the OpenWeatherMap API. 

Unlike a traditional weather application that simply displays temperature and weather information, this project creates a dynamic visual experience where the entire interface reacts to the current weather condition.

---

## 🚀 Key Features

* **Reactive Visual Environment:** Modifies the interface theme color palette and state classes based on live weather data codes.
* **Atmospheric Animation Engine:** Dynamically generates complex visual effects (such as individual falling rain drop layers, looping snow flake generators, active lightning bursts, and scrolling cloud maps) depending on real-time climate criteria.
* **Comprehensive Metrics Dashboard:** Tracks granular meteorological parameters including Feels Like, Humidity, Wind Speed, Cloud Cover, and High/Low temperature benchmarks.
* **Streamlined Search Mechanics:** Optimized text field submission mapping utilizing both active submit buttons and keyboard `Enter` event listeners.

---

## 📁 Project Structure

Your project is organized using the standard Create React App layout template:


weather-app-clone/
├── public/
│   ├── index.html        # Main HTML layout wrapper
│   ├── manifest.json     # App tracking definitions
│   └── robots.txt        # Search engine crawler policies
├── src/
│   ├── App.css           # Weather animations (rain, snow, lightning) & style sheets
│   ├── App.js            # Main reactive dashboard shell framework
│   ├── App.test.js       # Basic unit test cases
│   ├── index.css         # Baseline global style guidelines
│   ├── index.js          # React DOM structural entry link
│   ├── weather-app.js    # OpenWeather API data fetch logic configuration
│   ├── reportWebVitals.js# Performance tracker tools
│   └── setupTests.js     # Testing library automation scripts
├── .gitignore            # Version control exclusion records
├── package-lock.json     # Dependency tree asset map
└── package.json          # Core package and script listings
```

---

## ⚙️ Installation & Setup

Follow these commands to get your local environment set up and run the application:

### 1. Install Dependencies
Run the installation sequencer to resolve and provision necessary module packages:
```bash
npm install
```

### 2. Configure Your API Key Safely
To keep your OpenWeather key secure, create a `.env` file in the root folder of your project and assign your active token value precisely as follows:

```text
REACT_APP_WEATHER_API_KEY=1d78b48ff2340c63bbc55f5a24369cfd
```
*(Verify that your `.env` file is referenced inside `.gitignore` before pushing anything to public repositories).*

### 3. Launch the Server
Execute the start script to boot your live application:
```bash
npm start
```
Once compilation finishes, open your browser and navigate to the default development workspace pipeline at:
👉 **http://localhost:3000/**

---

## 🛠️ Built With

* [React.js](https://react.dev) - Component Driven User Interface Core
* [OpenWeatherMap API](https://openweathermap.org) - Comprehensive Climate API Systems
* [Axios](https://axios-http.com) - Promise-based Asynchronous HTTP Client Core
* CSS3 Keyframe Animations - Fluid Atmospheric Backdrop Layers

