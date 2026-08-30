import type { ForecastDay } from "./weatherTypes";

type ForecastEntry = {
    dt: number;
    main: {
        temp_min: number;
        temp_max: number;
    };
    weather: {
        main: string;
        icon: string;
    }[];
};

type ForecastResponse = {
    list: ForecastEntry[];
    city: {
        timezone: number;
    };
};


export function mapForecastData(
    data: ForecastResponse
): ForecastDay[] {
    const groupedDays = new Map<string, ForecastEntry[]>();

    data.list.forEach((entry) => {
        const localTimestamp =
            (entry.dt + data.city.timezone) * 1000;
        
        const date = new Date(localTimestamp)
        .toISOString()
        .split("T")[0];

        const existingEntries = groupedDays.get(date) ?? [];

        groupedDays.set(date, [...existingEntries, entry]);
    });

    return Array.from(groupedDays.entries())
        .slice(0, 5)
        .map(([date, entries]) => {

            const temperatures = entries.flatMap((entry) => [
                entry.main.temp_min,
                entry.main.temp_max,
            ]);

            const middayEntry = entries.reduce((closest, entry) => {
                const localHour = new Date(
                    (entry.dt + data.city.timezone) * 1000
                ).getUTCHours();

                const closestHour = new Date(
                    (closest.dt + data.city.timezone) * 1000
                ).getUTCHours();

                return Math.abs(localHour - 12)<
                    Math.abs(closestHour-12)
                    ? entry
                    : closest;
            });

            const localDate = new Date(`${date}T12:00:00Z`);

            return {
                date,
                day: localDate.toLocaleDateString("en-GB", {
                    weekday: "short",
                    timeZone: "UTC",
                }),
                condition: middayEntry.weather[0].main,
                icon: middayEntry.weather[0].icon,
                minTemperature: Math.min(...temperatures),
                maxTemperature: Math.max(...temperatures),
            };
        });
}
