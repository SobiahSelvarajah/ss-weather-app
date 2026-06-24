

export default function Header() {
    return (
        <section className="px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
            <div className="mx-auto max-w-6xl lg:text-center">
                <h1 className="text-4xl font-light tracking-tight md:text-5xl lg:text-6xl">
                    Weather Forecast
                </h1>
                <p className="mt-3 max-w-md text-sm font-medium text-slate-400 md:text-base lg:mx-auto">
                    Weather, activities and music tailored to your day.
                </p>
            </div>
        </section>
    ) 
};
