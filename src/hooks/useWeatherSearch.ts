"use client";

import { useState } from "react";
import type { ForecastDay, WeatherData } from "@/services/weatherTypes";
import { getWeather, getForecast } from "@/services/WeatherService";
import { mapWeatherData } from "@/services/weatherMapper";
import { mapForecastData } from "@/services/forecastMapper";


export function useWeatherSearch() {

    const [ weather, setWeather ] = useState<WeatherData | null>(null);
    const [ forecast, setForecast ] = useState<ForecastDay[]>([]);
    const [ searchCount, setSearchCount ] = useState(0);
    const [ loading, setLoading ] = useState(false);
    const [ error, setError ] = useState("");

    const handleSearch = async (location: string) => {
        setLoading(true);
        setError("");

        try {
            const [weatherData, forecastData] = await Promise.all([
                getWeather(location),
                getForecast(location),
            ]);

            setWeather(mapWeatherData(weatherData));
            setForecast(mapForecastData(forecastData));
            setSearchCount((prev) => prev + 1);
        } catch {
            setWeather(null);
            setForecast([]);
            setError(
                "We couldn't find that location. Please check the spelling and try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const clearError = () => {
        setError("");
    };

    return {
        weather,
        forecast,
        searchCount,
        loading,
        error,
        handleSearch,
        clearError,
    };
}