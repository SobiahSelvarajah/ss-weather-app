
type WeatherProps = {
    weather: any;
};


export default function WeatherDisplay({ weather }: WeatherProps) {
    return (
        <div className="space-y-5">
            <p className="text-5xl font-semibold">
                {Math.round(weather.main.temp)}°C
            </p>
            <p className="capitalize text-lg">
                {weather.weather[0].description}
            </p>
        </div>
    )
}