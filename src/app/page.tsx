"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import SearchBar from "@/components/search/SearchBar";
import EmptyState from "@/components/ui/EmptyState";
import type { WeatherData } from "@/services/weatherTypes";
import { mapWeatherData } from "@/services/weatherMapper";
import WeatherCard from "@/components/weather/WeatherCard";
import { getWeather } from "@/services/WeatherService";
import { getWeatherTheme } from "@/data/weatherThemes";
import ActivitySuggestions from "@/components/activities/ActivitySuggestions";
import MusicRecommendations from "@/components/music/MusicRecommendations";


export default function Home() {

  const [ weather, setWeather ] = useState<WeatherData | null>(null);
  const [ searchCount, setSearchCount ] = useState(0);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState("");

  const handleSearch = async (location: string)  => {
    setSearchCount(prev => prev + 1);
    setLoading(true);
    setError("");

    try {
      const data = await getWeather(location);
      setWeather(mapWeatherData(data));

    } catch(error) {
      console.error(error);

      setWeather(null);
      setError("Could not find that location.");
    } finally {
      setLoading(false);
    }
  };

  const theme = getWeatherTheme(weather?.condition);

  
  return (
    <main className={`min-h-screen bg-linear-to-b ${theme} text-white flex flex-col transition-all duration-700`}>
      <Header/>
      <section className="flex flex-1 flex-col items-center px-7 pb-12 pt-10 sm:px-6 sm:py-20 lg:px-5 lg:py-30">
        <div className="w-full max-w-md space-y-10 sm:space-y-12 lg:space-y-16">
          <SearchBar 
            onSearch={handleSearch}
            loading={loading}
          />

          {!weather && !error && (
            <EmptyState />
          )}

          {error && (
            <p className="text-sm text-red-400">
              {error}
            </p>
          )}  

        {weather && (
          <div key={`${weather.city}-${searchCount}`} className="fade-in-up">
            <WeatherCard weather={weather} />
            <ActivitySuggestions
              condition={weather.condition}
              searchCount={searchCount}
            />    
            <MusicRecommendations
              condition={weather.condition}
              searchCount={searchCount}
            />      
          </div>
        )}
        </div>
      </section>
    </main>
  );
}
