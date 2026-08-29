import { useMemo } from "react";
import { 
    musicRecommendations, 
    defaultSongs, 
} from "@/data/musicRecommendations";

type MusicRecommendationsProps = {
    condition: string;
    searchCount: number;
};

const getSpotifyEmbedURL = (spotifyUrl: string) => {
    return spotifyUrl.replace(
        "https://open.spotify.com/",
        "https://open.spotify.com/embed/"
    );
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
        <section className="w-full rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <h3 className="text-lg font-medium">
                Music for the vibe
            </h3>

            {/* Mobile version */}
            <ul className="mt-5 space-y-3 md:hidden">
                {songs.map((song) => (
                    <li key={`${song.title}-${song.artist}`}>
                        <a 
                            href={song.spotifyUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block rounded-xl border border-white/10 bg-white/5 p-4 transition hover:border-white/20 hover:bg-white/10"
                        >
                            <p className="font-medium">
                                🎵 {song.title}
                            </p>
                            <p className="mt-1 text-sm text-slate-300">
                                {song.artist}
                            </p>
                            <p className="mt-3 text-xs text-slate-400">
                                Open in Spotify →
                            </p>
                        </a>
                    </li>
                ))}
            </ul>

            {/* Tablet and Desktop versions */}
            <ul className="mt-6 hidden grid-cols-1 gap-3 md:grid lg:grid-cols-3">
                {songs.map((song) => (
                    <li 
                        key={`${song.title}-${song.artist}`}
                        className="min-w-0 overflow-hidden rounded-xl"
                    >
                        <iframe
                            src={getSpotifyEmbedURL(song.spotifyUrl)}
                            width="100%"
                            height="152"
                            loading="lazy"
                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                            title={`${song.title} by ${song.artist}`}
                            className="block h-20 w-full rounded-xl border-0 lg:h-38"
                        />
                    </li>
                ))}
            </ul>
        </section>
    );
}