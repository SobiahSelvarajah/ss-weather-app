import { useMemo } from "react";
import { activities, defaultActivities } from "@/data/activities";


type ActivitySuggestionsProps = {
    condition: string;
    searchCount: number;
};

export default function ActivitySuggestions ({
    condition,
    searchCount,
}: ActivitySuggestionsProps) {

    const suggestions = useMemo(() => {
        return [...(activities[condition] ?? defaultActivities)]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
    }, [condition, searchCount]);


    return (
        <section className=" fade-in-up mt-6 w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-lg font-medium pb-3">
                Suggested Activities
            </h3>
            <ul className="mt-4 space-y-2">
                {suggestions.map((activity) => (
                    <li 
                        key={activity.text}
                        className="flex items-center rounded-xl border border-white/10 bg-white/5 p-3"
                    >
                        <span className="mr-2 text-lg">
                            {activity.icon}
                        </span>
                        <span>
                            {activity.text}
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}
