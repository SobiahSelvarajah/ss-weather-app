import { getWeather } from "@/lib/getWeather";
import WeatherDisplay from "@/components/WeatherDisplay";

export default async function Home() {

  const weather = await getWeather("Cambridge,UK");

  return (
    <main className="flex min-h-screen items-center 
                     justify-center bg-slate-900 
                     text-white">
      <div>
        <h1 className="text-5xl font-light 
                       text-center mb-6">
          Weather Forecast
        </h1>
        <WeatherDisplay weather={weather} />
      </div>
    </main>
  );
}