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
        <section className="h-full w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl md:flex md: flex-col">
            <h3 className="pb-3 text-lg font-medium">
                Suggested Activities
            </h3>
            <ul className="mt-4 space-y-2 md:flex md:flex-1 md:flex-col md:justify-center md:space-y-0 md:gap-3">
                {suggestions.map((activity) => (
                    <li 
                        key={activity.text}
                        className="flex items-center rounded-xl border border-white/10 bg-white/5 p-3 md:p-4 lg:p-5"
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
