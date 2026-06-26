import type { WeatherData } from "./weatherTypes";


export function mapWeatherData(data: any): WeatherData {
    return {
        city: data.name,
        temperature: data.main.temp,
        condition: data.weather[0].main,
        feelsLike: data.main.feels_like,
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        icon: data.weather[0].icon,
        lastUpdated: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
        }),        
    }
};
