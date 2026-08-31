"use client";


import Header from "@/components/layout/Header";
import SearchBar from "@/components/search/SearchBar";
import EmptyState from "@/components/ui/EmptyState";
import WeeklyForecast from "@/components/weather/WeeklyForecast";
import WeatherCard from "@/components/weather/WeatherCard";
import ActivitySuggestions from "@/components/activities/ActivitySuggestions";
import MusicRecommendations from "@/components/music/MusicRecommendations";
import { getWeatherTheme } from "@/data/weatherThemes";
import { useWeatherSearch } from "@/hooks/useWeatherSearch";


export default function Home() {
  const {
    weather,
    forecast,
    searchCount,
    loading,
    error,
    handleSearch,
    clearError,
  } = useWeatherSearch();
    
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
              clearError={clearError}
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

          {forecast.length > 0 && (
            <div className="mt-10">
              <WeeklyForecast forecast={forecast} />
            </div>
          )}

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
};