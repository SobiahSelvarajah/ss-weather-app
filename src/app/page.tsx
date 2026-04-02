"use client";

import { useState } from "react";
import { getWeather } from "@/lib/getWeather";
import { getMood } from "@/lib/getMood";
import SearchBar from "@/components/SearchBar";
import WeatherDisplay from "@/components/WeatherDisplay";
import MoodDisplay from "@/components/MoodDisplay";
import MusicDisplay from "@/components/MusicDisplay";
import OutfitDisplay from "@/components/OutfitDisplay";


export default function Home() {
  const [location, setLocation] = useState("Cambridge,UK");
  const [weather, setWeather] = useState<any>(null);
  const [mood, setMood] = useState<string>("");
  const [temp, setTemp] = useState<number>(0);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (newLocation: string) => {
    setLoading(true);
    setLocation(newLocation);

    const weatherData = await getWeather(newLocation);
    const weatherMain = weatherData.weather[0].main;
    const { mood } = getMood(weatherMain);
    const temp = Math.round(weatherData.main.temp);

    setWeather(weatherData);
    setMood(mood);
    setTemp(temp);
    setLoading(false);
  }


  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-900 text-white">
      <div>
        <h1 className="text-5xl font-light text-center mb-6">
          Weather Forecast
        </h1>

        {/* search bar to access weather for location */}
        <SearchBar onSearch={handleSearch} />

        {/* loading state */}
        {loading && <p className="text-center mt-4">Loading...</p>}

        {/* existing weather display */}
        {weather && <WeatherDisplay weather={weather} />}

        {/* mood display based on weather */}
        {weather && <MoodDisplay weatherMain={weather.weather[0].main} />}

        {/* music display based on mood */}
        {weather && <MusicDisplay mood={mood} />}

        {/* outfit suggestion based on weather, mood and temp */}
        {weather && <OutfitDisplay weather={weather.weather[0].main} mood={mood} temp={temp}/>}

      </div>
    </main>
  );
}