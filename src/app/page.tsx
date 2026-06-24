"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import SearchBar from "@/components/search/SearchBar";
import EmptyState from "@/components/ui/EmptyState";
import { WeatherData } from "@/services/weatherTypes";
import { mapWeatherData } from "@/services/weatherMapper";
import WeatherCard from "@/components/weather/WeatherCard";
import { getWeather } from "@/services/WeatherService";
import { weatherThemes, defaultTheme } from "@/data/weatherThemes";
import ActivitySuggestions from "@/components/activities/ActivitySuggestions";


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

  const theme = weather
      ? weatherThemes[ weather.condition ] ?? defaultTheme
      : defaultTheme;

  return (
    <main className={`min-h-screen bg-linear-to-b ${theme} text-white flex flex-col transition-all duration-700`}>
      <Header/>
      <section className="flex flex-1 flex-col items-center px-5 py-30">
        <div className="w-full max-w-md space-y-16">
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
            <WeatherCard
              city={weather.city}
              temperature={weather.temperature}
              condition={weather.condition}
              feelsLike={weather.feelsLike}
              humidity={weather.humidity}
              windSpeed={weather.windSpeed}
              icon={weather.icon}
            />
            <ActivitySuggestions
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
