

export function getMood(weatherMain: string) {

    // pick relevant block of case code
    // depending on weather
    switch (weatherMain.toLowerCase()) {
        
        case "clear":
            return {
                mood: "energetic",
                activity: "Go for a walk, explore the city and get some fresh air",
            };

        case "clouds":
            return {
                mood: "calm",
                activity: "Perfect time for a coffee run or a bit of reading",
            };

        case "mist":
        case "haze":
        case "fog":
            return {
                mood: "reflective",
                activity: "Take it slow, enjoy a warm drink and take time for self-care",
            };

        case "rain":
        case "drizzle":
            return {
                mood: "cozy",
                activity: "Stay in, grab a drink and snuggle up with a movie",
            };

        case "thunderstorm":
            return {
                mood: "intense",
                activity: "Stay indoors if you can and relax with music or a film",
            };

        case "snow":
            return {
                mood: "peaceful",
                activity: "Enjoy the view or go jump in the snow",
            };

        default:
            return {
                mood: "neutral",
                activity: "Just go where the wind takes you today",
            };
    }
}