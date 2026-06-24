import type { WeatherData } from "./weatherTypes";


export const mapWeatherData = (data: any): WeatherData => ({
    city: data.name,
    temperature: data.main.temp,
    condition: data.weather[0].main,
    feelsLike: data.main.feels_like,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    icon: data.weather[0].icon
});
