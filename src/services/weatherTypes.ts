

export type WeatherData = {
    city: string;
    temperature: number;
    condition: string;
    feelsLike: number,
    humidity: number,
    windSpeed: number,
    icon: string,
    lastUpdated: string;
};


export type ForecastDay = {
    date: string;
    day: string;
    condition: string;
    icon: string;
    minTemperature: number;
    maxTemperature: number;
};
