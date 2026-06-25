import { useMemo } from "react";
import { musicRecommendations, defaultSongs } from "@/data/musicRecommendations";


type MusicRecommendationsProps = {
    condition: string;
    searchCount: number;
};

export default function MusicRecommendations ({
    condition,
    searchCount,
}: MusicRecommendationsProps) {

    const songs = useMemo(() => {
        return [...(musicRecommendations[condition] ?? defaultSongs)]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3);
    }, [condition, searchCount]);


    return (
        <section className="mt-6 w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-lg font-medium">
                Music for the vibe
            </h3>
            <ul className="mt-4 space-y-3">
                {songs.map((song) => (
                    <li
                        key={`${song.title}-${song.artist}`}
                        className="rounded-xl border border-white/10 bg-white/5 p-3"
                    >
                        <p className="font-medium">
                            🎵 {song.title}
                        </p>
                        <p className="mt-1 text-sm text-slate-300">
                            {song.artist}
                        </p>
                    </li>
                ))}
            </ul>
        </section>
    );
}