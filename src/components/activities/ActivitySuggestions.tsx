import { useMemo } from "react";


type ActivitySuggestionsProps = {
    condition: string;
    searchCount: number;
};

export default function ActivitySuggestions ({
    condition,
    searchCount,
}: ActivitySuggestionsProps) {
    const activities: Record<string, string[]> = {
        Clear: [
            "Go for a walk",
            "Visit a local park",
            "Have a picnic",
            "Go bird watching",
            "Do some gardening",
            "Put the barbecue on",
        ],
        Clouds: [
            "Visit a cafe",
            "Read a book",
            "Explore a museum",
            "Visit a greenhouse",
            "Piece together jigsaw puzzles",
            "Catch up on a podcast",
            "Do some journalling",

        ],
        Rain: [
            "Have a cozy movie night in",
            "Try a new recipe",
            "Play some board games",
            "Visit an indoor attraction",
            "Host an indoor treasure hunt",
            "Play a mystery murder game",
        ],
        Snow: [
            "Build a snowman",
            "Make snow angels",
            "Enjoy a hot chocolate",
            "Make toasted marshmallows",
            "Sled the day away",
        ],
    };

    const defaultActivities = [
        "Enjoy your day",
        "Try something new",
        "Stay active",
        "Explore somewhere new",
    ];

    const suggestions = useMemo(() => {
        return [...(activities[condition] ?? defaultActivities)]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
    }, [condition, searchCount]);

    // const suggestions = [
    //     ...(activities[condition] ?? defaultActivities)
    // ]
    //     .sort(() => 0.5 - Math.random())
    //     .slice(0, 3);

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
