import { getMood } from "@/lib/getMood";

type MoodDisplayProps = {
    weatherMain: string;
};

export default function MoodDisplay({ weatherMain }: MoodDisplayProps) {

    const { mood, activity } = getMood(weatherMain);

    return (
        <div className="text-center space-y-2 mt-6">
            <p className="text-xl capitalize">
                Mood: {mood}
            </p>
            <p className="text-lg">
                {activity}
            </p>
        </div>
    );
}