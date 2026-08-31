
# 🌦️ Weather app

Weather Forecast is a responsive weather application that combines real-time weather data with personalised activity and music recommendations. 

Users can search for a location to view current weather conditions and a five-day forecast, alongside activity suggestions and Spotify music recommendations tailored to the current weather.

The project focuses on combining external API data with dynamic UI behaviour, responsive design and contextual recommendations to create a more engaging weather experience.



## 🔗 Live Demo

Coming soon.



## ✨ Features

- Real-time weather data based on location search
- Five-day weather forecast 
- Daily high and low temperatures
- Weather-based activity suggestions
- Weather-based music recommendations
- Embedded Spotify track previews
- Dynamic background themes based on weather conditions
- Responsive forecast carousel with mobile navigation
- Loading and search states 
- Empty-search validation
- User-friendly invalid-location error handling
- Responsive layouts across mobile, tablet and desktop
- Accessible labels and feedback



## 🛠 Tech Stack

### Frontend 

- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide React

### APIs & Integrations

- OpenWeather API
- Spotify Embeds



## ⚙️ How It Works

1. The user enters a town and country into the search field.
2. The application requests current weather and forecast data from OpenWeather.
3. Current weather data is transformed into the format required by the interface.
4. Three-hour forecast data is grouped and transformed into a five-day forecast.
5. The interface displays current temperature, weather condition, feels-like temperature, humidity and wind-speed.
6. The current weather condition determines the background theme and available activity recommendations.
7. Three activity suggestions are selected based on the current weather.
8. Three weather-appropriate music recommendations are displayed with Spotify integration.
9. Searching again refreshes the weather data and rotates the activity and music recommendations.



## 💡 Technical Decisions

### Parallel Weather Requests

Current weather and forecast data are fetched concurrently using `Promise.all`.

This avoids waiting for one request to complete before beginning the other and allows the application to retrieve both datasets efficiently. 

### Forecast Data Transformation

OpenWeather provides forecast readings in three-hour intervals.

A dedicated forecast mapper groups these readings by local calender day and transforms them into a simplified daily forecast containing the condition, weather icon and minimum and maximum temperatures.

A reading closest to midday is used to represent the day's overall weather condition and icon rather than relying on an overnight reading.

### Weather-Based Theming 

The application's background changes according to the current weather condition.

Clear, cloudy, rainy, snowy and stormy conditions each use a dedicated gradient theme, while unsupported conditions fall back to a default theme.

### Contextual Recommendations

Activity and music recommendations are mapped to weather conditions.

Each successful search selects three recommendations from the appropriate collection, allowing repeated searches to provide variation while remaining relevant to the current weather.

### Responsive Forecast Navigation

The five-day forecast is displayed as a full horizontal strip on tablet and desktop layouts.

On smaller mobile screens, the forecast becomes horizontally scrollable with navigation controls to preserve readability without compressing each day's information.

### Spotify Integration

Music recommendations use Spotify embeds, allowing users to interact with recommended tracks directly from the weather interface while retaining access to Spotify where appropriate.

The integration deliberately uses lightweight embeds rather than requiring Spotify authentication or managing playback state within the application.

### Search and Error Handling 

Empty searches are validated before an API request is made.

Invalid locations return clear user-facing feedback, while stale errors are cleared when the user begins a new search. Loading states also prevent duplicate searches while weather data is being retrieved.



## 🚀 Getting Started

Clone the repository and install the dependencies: 

```bash
npm install
```

Create a `.env` file in the project root and provide the required environment variables:

```env
NEXT_PUBLIC_OPENWEATHER_API_KEY="your_openweather_api_key"
```

Then start the development server:

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.



## 📦 Production Build

To create an optimised production build:

```bash
npm run build
```

Then run the production server with:

```bash 
npm start
```



## 🔐 Environment Variables

Weather Forecast requires the following environment variables:

|               Variable              |                   Purpose                 |
|      -------------------------      |        ---------------------------        |
|  `NEXT_PUBLIC_OPENWEATHER_API_KEY`  |  API key used to retrieve weather and forecast data from OpenWeather |

> **Warning:** Environment variables should never be committed to source control.



## 📱 Responsive Design

Weather Forecast was designed and tested across mobile, tablet and desktop layouts.

The interface adapts across breakpoints to provide:
- Horizontally scrollable forecast navigation on smaller screens 
- Full five-day forecast presentation on larger screens 
- Responsive weather and activity cards
- Adaptive Spotify recommendation layouts
- Readable weather metrics across narrow mobile displays 
- Consistent spacing and visual hirearchy across screen sizes



## 🔮 Future Improvements

The current application is feature-complete, with several possible extensions planned for future iterations:

- Expand the weather-based music recommendation library
- Introduce dedicated Spotify playlists for different weather conditions
- Explore Spotify Web API integration for dynamic playlist retrieval
- Add authenticated Spotify playback using Spotify's playback tools
- Add hourly weather forecasts
- Include additional weather information such as sunrise, sunset and precipitation probability 
- Add location autocomplete and search suggestions
- Allow users to save favourite locations
- Add temperature unti switching between Celcius and Fahrenheit
- Explore richer weather animations and visual effects



## 📌 Project Status 

Weather Forecast is feature-complete and ready for deployment.



## 📄 Licence

This project is licenced under the MIT licence.