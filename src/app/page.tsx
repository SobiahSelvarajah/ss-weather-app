"use client";

import { useState } from "react";
import Header from "@/components/layout/Header";
import SearchBar from "@/components/search/SearchBar";
import WeatherCard from "@/components/weather/WeatherCard";
import { getWeather } from "@/services/WeatherService";

type WeatherData = {
  city: string;
  temperature: number;
  condition: string;
};

export default function Home() {

  const [ weather, setWeather ] = useState<WeatherData | null>(null);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState("");

  const handleSearch = async (location: string)  => {
    setLoading(true);
    setError("");

    try {
      const data = await getWeather(location);

      setWeather({
        city: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].main,
      });
    } catch(error) {
      console.error(error);

      setWeather(null);
      setError("Could not find that location.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <main className="flex flex-col bg-slate-900 text-white min-h-screen">
      <Header/>
      <section className="flex flex-1 items-center px-5 md:justify-center">
        <div className="-translate-y-16">
          <SearchBar 
            onSearch={handleSearch}
            loading={loading}
          />
        </div>

        {error && (
          <p className="mt-4 text-sm text-red-400">
            {error}
          </p>
        )}

        { weather && (
          <WeatherCard
            city={weather.city}
            temperature={weather.temperature}
            condition={weather.condition}
          />
        )}
      </section>
    </main>
  );
}
