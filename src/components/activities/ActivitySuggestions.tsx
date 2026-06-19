type ActivitySuggestionsProps = {
    condition: string;
};

export default function ActivitySuggestions ({
    condition,
}: ActivitySuggestionsProps) {
    const activities: Record<string, string[]> = {
        Clear: [
            "Go for a walk",
            "Visit a local park",
            "Have a picnic",
        ],
        Clouds: [
            "Visit a cafe",
            "Read a book",
            "Explore a museum",
        ],
        Rain: [
            "Have a cozy movie night in",
            "Try a new recipe",
            "Visit an indoor attraction",
        ],
        Snow: [
            "Build a snowman",
            "Make snow angels",
            "Enjoy a hot chocolate",
        ],
    };

    const suggestions = 
        activities[condition] ?? [
            "Enjoy your day!",
            "Try something new",
            "Stay active",
        ];

    return (
        <section className="mt-6 w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-lg font-medium">
                Suggested Activities
            </h3>
            <ul className="mt-4 space-y-2">
                {suggestions.map((activity) => (
                    <li key={activity}>
                         • {activity}
                    </li>
                ))}
            </ul>
        </section>
    )
}
