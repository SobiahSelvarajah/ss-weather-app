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
    setLoading(true);
    setError("");

    try {
      const data = await getWeather(location);

      setWeather(mapWeatherData(data));
      setSearchCount(prev => prev + 1)
    } catch {
      setWeather(null);
      setError(
        "We couldn't find that location. Please check the spelling and try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const theme = getWeatherTheme(weather?.condition);

  
  return (
    <main className={`min-h-screen bg-linear-to-b ${theme} text-white flex flex-col transition-all duration-700`}>
      <Header/>
      <section className="flex flex-1 flex-col items-center px-7 pb-12 pt-10 sm:px-6 sm:py-20 lg:px-5 lg:py-30">
        <div className="w-full max-w-5xl">
          <div className="mx-auto w-full max-w-md">
            <SearchBar 
              onSearch={handleSearch}
              loading={loading}
              clearError={() => setError("")}
            />

            {!weather && !error && (
              <div className="mt-10">
                <EmptyState />
              </div>
            )}

            {error && (
              <p 
                role="alert"
                className="mt-5 px-5 text-sm text-red-300"
              >
                {error}
              </p>
            )}  
          </div>

          {weather && (
            <div 
              key={`${weather.city}-${searchCount}`} 
              className="fade-in-up mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch"
            >
              <WeatherCard weather={weather} />
              <ActivitySuggestions
                condition={weather.condition}
                searchCount={searchCount}
              />    
              <div className="-mx-4 md:col-span-2 md:mx-0">
                <MusicRecommendations
                  condition={weather.condition}
                  searchCount={searchCount}
                />                  
              </div>
    
            </div>
          )}
        </div>
      </section>
    </main>
  );
}