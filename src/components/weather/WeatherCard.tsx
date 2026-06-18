
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
        <div className="mt-6 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <div className="flex items-center justify-between">
                <>
                    <h2 className="text-2xl font-semibold">
                        {city}
                    </h2>
                    <p className="mt-2 text-slate-300">
                        {condition}
                    </p>                    
                </>
                <img 
                    src={`https://openweathermap.org/img/wn/${icon}@2x.png`} 
                    alt={condition}
                    className="h-20 w-20"
                />                
            </div>

            <p className="mt-4 text-5xl font-light">
                {Math.round(temperature)}°
            </p>            
            <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                {[
                    ["Feels like", `${Math.round(feelsLike)}°`],
                    ["Humidity", `${humidity}%`],
                    ["Wind", `${windSpeed} m/s`],
                ].map(([label, value]) => (
                    <article key={label}>
                        <p className="text-sm text-slate-400">
                            {label}
                        </p>
                        <p>
                            {value}
                        </p>
                    </article>
                ))}
            </div>
        </div>
    )
}

