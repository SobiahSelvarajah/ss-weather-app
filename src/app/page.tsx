import { getWeather } from "@/lib/getWeather";
import WeatherDisplay from "@/components/WeatherDisplay";
import MoodDisplay from "@/components/MoodDisplay";

export default async function Home() {

  const weather = await getWeather("Cambridge,UK");

  // extract main weather condition
  const weatherMain = weather.weather[0].main;

  return (
    <main className="flex min-h-screen items-center 
                     justify-center bg-slate-900 
                     text-white">
      <div>
        <h1 className="text-5xl font-light 
                       text-center mb-6">
          Weather Forecast
        </h1>

        {/* existing weather display */}
        <WeatherDisplay weather={weather} />

        {/* mood display based on weather */}
        <MoodDisplay weatherMain={weatherMain} />
      </div>
    </main>
  );
}