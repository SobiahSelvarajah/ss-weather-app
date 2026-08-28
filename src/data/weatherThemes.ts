

export const weatherThemes: Record<string, string> = {
    Clear: "from-sky-700 via-blue-800 to-blue-950",
    Clouds: "from-slate-600 via-slate-800 to-slate-950",
    Rain: "from-slate-700 via-blue-900 to-slate-950",
    Snow: "from-sky-600 via-slate-700 to-slate-900",
    Thunderstorm: "from-purple-900 via-slate-900 to-black",
};


export const defaultTheme = 
    "from-slate-800 via-slate-900 to-black";


export const getWeatherTheme = (condition?: string): string => {
    if (!condition) return defaultTheme;

    return weatherThemes[condition] ?? defaultTheme
};
