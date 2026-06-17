
type WeatherCardProps = {
    city: string;
    temperature: number;
    condition: string;
};

export default function WeatherCard({
    city,
    temperature,
    condition
}: WeatherCardProps) {
    return (
        <div className="mt-6 w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <h2 className="text-2xl font-semibold">
                {city}
            </h2>
            <p className="mt-4 text-5xl font-light">
                {Math.round(temperature)}°
            </p>
            <p className="mt-2 text-slate-300">
                {condition}
            </p>
        </div>
    )
}

