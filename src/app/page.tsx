import { getWeather } from "@/lib/getWeather";
import { getMood } from "@/lib/getMood";
import SearchBar from "@/components/SearchBar";
import WeatherDisplay from "@/components/WeatherDisplay";
import MoodDisplay from "@/components/MoodDisplay";
import MusicDisplay from "@/components/MusicDisplay";
import OutfitDisplay from "@/components/OutfitDisplay";


export default async function Home({
  searchParams,
} : {
  searchParams: Promise<{ location?: string }>;
}) {

  const params = await searchParams;
  
  const rawLocation = params.location || "Cambridge,UK";
  const location = decodeURIComponent(rawLocation);

  const weather = await getWeather(location);
  
  // extract main weather condition
  const weatherMain = weather.weather[0].main;
  const { mood } = getMood(weatherMain);
  const temp = Math.round(weather.main.temp);


  return (
    <main className="flex min-h-screen items-center 
                     justify-center bg-slate-900 
                     text-white">
      <div>
        <h1 className="text-5xl font-light 
                       text-center mb-6">
          Weather Forecast
        </h1>

        {/* search bar to access weather for location */}
        <SearchBar />

        {/* existing weather display */}
        <WeatherDisplay weather={weather} />

        {/* mood display based on weather */}
        <MoodDisplay weatherMain={weatherMain} />

        {/* music display based on mood */}
        <MusicDisplay mood={mood} />

        {/* outfit suggestion based on weather, mood and temp */}
        <OutfitDisplay
            weather={weatherMain}
            mood={mood}
            temp={temp}
        />
      </div>
    </main>
  );
}