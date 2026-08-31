"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ForecastDay } from "@/services/weatherTypes";

type WeeklyForecastProps = {
    forecast: ForecastDay[];
};


export default function WeeklyForecast({
    forecast,
}: WeeklyForecastProps) {

    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollForecast = (direction: "left" | "right") => {
        scrollRef.current?.scrollBy({
            left: direction === "left" ? -140 : 140,
            behavior: "smooth",
        });
    };


    return (
        <section className="w-full rounded-3xl border border-white/10 bg-white/5 px-6 py-8 backdrop-blur-xl">
            <h3 className="text-lg font-medium">
                Forecast for the Week
            </h3>
            <div className="relative mt-6">
                <button
                    type="button"
                    onClick={() => scrollForecast("left")}
                    aria-label="Previous forecast days"
                    className="absolute left-0 top-11/20 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-700/80 backdrop-blur-md transition hover:bg-slate-600/80 md:hidden"
                >
                    <ChevronLeft className="h-3 w-3" />
                </button>
                <div 
                    ref={scrollRef}
                    className="min-w-0 flex-1 overflow-x-auto scroll-smooth"
                >
                    <ul className="flex min-w-max gap-3 md:grid md:min-w-0 md:grid-cols-5 lg:gap-8">
                        {forecast.map((day) => (
                            <li
                                key={day.date}
                                className="w-28 shrink-0 rounded-2xl border border-white/10 bg-white/20 p-4 text-center md:w-auto"
                            >
                                <p className="text-sm font-medium">
                                    {day.day}
                                </p>
                                <img 
                                    src={`https://openweathermap.org/img/wn/${day.icon}@2x.png`} 
                                    alt={day.condition}
                                    className="mx-auto my-2 h-14 w-14" 
                                />
                                <p className="text-xs text-slate-300">
                                    {day.condition}
                                </p>
                                <div className="mt-3 flex justify-center gap-3 text-sm">
                                    <span className="font-medium">
                                        {Math.round(day.maxTemperature)}°
                                    </span>
                                    <span className="text-slate-300">
                                        {Math.round(day.minTemperature)}°
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <button
                    type="button"
                    onClick={() => scrollForecast("right")}
                    aria-label="Next forecast days"
                    className="absolute right-0 top-11/20 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-slate-700/80 backdrop-blur-md transition hover:bg-slate-600/80 md:hidden"
                >
                    <ChevronRight className="h-3 w-3" />
                </button>
            </div>
        </section>
    )
}