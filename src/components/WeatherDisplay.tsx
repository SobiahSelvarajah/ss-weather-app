
type WeatherProps = {
    weather: any;
};


export default function WeatherDisplay({ weather }: WeatherProps) {
    return (
        <div className="text-center space-y-4">
            <p className="text-xl">
                {weather.name}
            </p>
            <p className="text-5xl font-semibold">
                {Math.round(weather.main.temp)}°C
            </p>
            <p className="capitalize text-lg">
                {weather.weather[0].description}
            </p>
        </div>
    )
}