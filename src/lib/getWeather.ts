

export async function getWeather(city: string) {
    
    // get api key
    const apiKey = process.env.NEXT_PUBLIC_OPENWEATHER_KEY;

    // prevents broken api calls
    if (!apiKey) {
        throw new Error("Missing OpenWeather API key");
    }
    
    // fetch request
    const res = await fetch(
        // openweather endpoint
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`,
        // always get live data
        { cache: "no-store", }
    );

    // response check
    if (!res.ok) {
        throw new Error("Failed to fetch weather data");
    }

    // convert to json
    const data = await res.json();

    return data;
}