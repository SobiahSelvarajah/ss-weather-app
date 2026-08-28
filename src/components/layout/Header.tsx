

export default function Header() {
    return (
        <section className="px-7 pt-12 pb-10 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <div className="mx-auto max-w-6xl text-center">
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                    Weather Forecast
                </h1>
                <p className="mx-auto mt-3 max-w-md text-sm font-medium text-slate-400 md:text-base">
                    Weather, activities and music tailored to your day.
                </p>
                <a 
                    href="https://github.com/SobiahSelvarajah/ss-weather-app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition hover:bg-white/10"
                >
                    View Source →
                </a>
            </div>
        </section>
    ) 
};
