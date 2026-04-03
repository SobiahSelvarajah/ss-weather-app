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
    <main className="flex min-h-screen items-start md:items-center justify-center bg-slate-900 text-white px-5 py-10 md:px-8">
      
      <div className="w-full max-w-5xl space-y-8 md:space-y-12">

        {/* header */}
        <div className="text-center space-y-3">
          <h1 className="text-5xl font-light">
            Weather Forecast
          </h1>

          {weather && (
            <h2 className="text-lg text-white/60 tracking-wide uppercase">
              {location}
            </h2>
          )}
        </div>

        {/* search bar */}
        <div className="flex justify-center">
          <SearchBar onSearch={handleSearch} />
        </div>

        {/* loading element */}
        {loading && (
          <p className="text-center text-white/60 animate-pulse">
            Loading weather...
          </p>
        )}

        {/* main content */}
        {weather && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start">

            {/* desktop left */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6">
              <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 shadow-lg shadow-black/20">
                <WeatherDisplay weather={weather} />
              </div>
              <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 shadow-lg shadow-black/20">
                <MoodDisplay weatherMain={weather.weather[0].main} />
              </div>
            </div>

            {/* desktop right */}
            <div className="flex flex-col items-center md:items-end text-center md:text-right gap-6">
              <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 shadow-lg shadow-black/20">
                <MusicDisplay mood={mood} />
              </div>
              <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-5 md:p-6 shadow-lg shadow-black/20">
                <OutfitDisplay
                  weather={weather.weather[0].main}
                  mood={mood}
                  temp={temp}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}