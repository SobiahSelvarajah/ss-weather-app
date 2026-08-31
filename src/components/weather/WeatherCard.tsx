import type { WeatherData } from "@/services/weatherTypes";


type WeatherCardProps = {
    weather: WeatherData;
};

export default function WeatherCard({
    weather,
}: WeatherCardProps) {
    return (
        <article className="h-full w-full rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <header>
                <h2 className="wrap-break-word text-3xl font-light tracking-tight">
                    {weather.city}
                </h2>
                <div className="mt-3 flex items-center justify-between gap-4">
                    <div>
                        <p className="text-slate-400">
                            {weather.condition}
                        </p>   
                        <p className="mt-1 text-xs text-slate-400">
                            Last updated {weather.lastUpdated}
                        </p>                         
                    </div>    
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md md:h-20 md:w-20">
                        <img 
                            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`} 
                            alt={weather.condition}
                            className="h-14 w-14 sm:h-16 sm:w-16"
                        /> 
                    </div> 
                </div>           
            </header>
            <p className="mt-4 text-6xl font-extralight tracking-tight">
                {Math.round(weather.temperature)}°
            </p>            
            <div className="mt-8 grid grid-cols-1 gap-4 border-t border-white/10 pt-6 sm:grid-cols-3">
                {[
                    ["Feels like", `${Math.round(weather.feelsLike)}°`],
                    ["Humidity", `${weather.humidity}%`],
                    ["Wind", `${weather.windSpeed} m/s`],
                ].map(([label, value]) => (
                    <article 
                        key={label} 
                        className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-left sm:block sm:border-0 sm:bg-transparent sm:px-0 sm:py-0 sm:text-center"
                    >
                        <p className="text-sm uppercase tracking-wider text-slate-400">
                            {label}
                        </p>
                        <p className="mt-0 text-lg font-medium sm:mt-2">
                            {value}
                        </p>
                    </article>
                ))}
            </div>
        </article>
    )
};
