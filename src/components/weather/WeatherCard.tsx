import type { WeatherData } from "@/services/weatherTypes";


type WeatherCardProps = {
    weather: WeatherData;
};

export default function WeatherCard({
    weather,
}: WeatherCardProps) {
    return (
        <article className="fade-in-up mt-6 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <header className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-light tracking-tight">
                        {weather.city}
                    </h2>
                    <p className="mt-1 text-slate-400">
                        {weather.condition}
                    </p>                    
                </div>

                <img 
                    src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
                    alt={weather.condition}
                    className="h-20 w-20 md:h-25 md:w-25"
                />                
            </header>

            <p className="mt-4 text-6xl font-extralight tracking-tight">
                {Math.round(weather.temperature)}°
            </p>            
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {[
                    ["Feels like", `${Math.round(weather.feelsLike)}°`],
                    ["Humidity", `${weather.humidity}%`],
                    ["Wind", `${weather.windSpeed} m/s`],
                ].map(([label, value]) => (
                    <article key={label} className="text-center">
                        <p className="text-sm uppercase tracking-wider text-slate-500">
                            {label}
                        </p>
                        <p className="mt-2 text-lg font-medium">
                            {value}
                        </p>
                    </article>
                ))}
            </div>
        </article>
    )
};
