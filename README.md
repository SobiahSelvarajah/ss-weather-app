
# Weather app
An interactive weather application that combines real-time weather data with suggested activities and music that match the mood of the day.


## ✨ Features
- Real-time weather data
- Weather-based activity suggestions
- Song of the day based on weather mood
- Immersive weather scenes (planned)


## ⚙️ Tech Stack
- Next.js
- React
- Tailwind CSS
- OpenWeather API
- Spotify Web API


## 📂 Project Structure
ss-weather-app
│
├── public
│   ├── images
│   └── icons
│
├── src
│   ├── app
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   │
│   ├── components
│   │   ├── WeatherCard.tsx
│   │   ├── WeatherScene.tsx
│   │   ├── ActivitySuggestions.tsx
│   │   ├── SongPlayer.tsx
│   │   └── LocationSearch.tsx
│   │
│   ├── lib
│   │   ├── getWeather.ts
│   │   └── getSpotifyTrack.ts
│   │
│   ├── data
│   │   ├── activities.ts
│   │   └── weatherMoods.ts
│   │
│   ├── hooks
│   │   └── useWeather.ts
│   │
│   ├── types
│   │   └── weather.ts
│   │
│   └── utils
│       └── weatherHelpers.ts
│
├── .env.local
├── package.json
└── README.md


## 🛠️ Getting Started
    Clone the repository
        git clone https://github.com/yourusername/ss-weather-app.git

    Install dependencies
        npm install

    Run the development server
        npm run dev

    Create a .env.local file and add your API key
        NEXT_PUBLIC_OPENWEATHER_KEY=your_api_key_here
