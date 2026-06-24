
type WeatherCardProps = {
    city: string;
    temperature: number;
    condition: string;
    feelsLike: number;
    humidity: number;
    windSpeed: number;
    icon: string;
};

export default function WeatherCard({
    city,
    temperature,
    condition,
    feelsLike,
    humidity,
    windSpeed,
    icon
}: WeatherCardProps) {
    return (
        <article className="fade-in-up mt-6 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <header className="flex items-center justify-between">
                <div>
                    <h2 className="text-3xl font-light tracking-tight">
                        {city}
                    </h2>
                    <p className="mt-1 text-slate-400">
                        {condition}
                    </p>                    
                </div>

                <img 
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                    alt={condition}
                    className="h-20 w-20 md:h-25 md:w-25"
                />                
            </header>

            <p className="mt-4 text-6xl font-extralight tracking-tight">
                {Math.round(temperature)}°
            </p>            
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                {[
                    ["Feels like", `${Math.round(feelsLike)}°`],
                    ["Humidity", `${humidity}%`],
                    ["Wind", `${windSpeed} m/s`],
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
}

