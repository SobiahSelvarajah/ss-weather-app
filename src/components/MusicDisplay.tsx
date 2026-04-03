import { getMusic } from "@/lib/getMusic";

type MusicDisplayProps = {
    mood: string;
};

export default function MusicDisplay({ mood }: MusicDisplayProps) {

    const { song, artist, embedUrl } = getMusic(mood);

    return (
        <div className="space-y-5 flex flex-col items-center md:items-end">
            <p className="text-lg">
                🎵 Song of the moment
            </p>
            <p className="text-xl font-semibold text-center md:text-right">
                {song} — {artist}
            </p>
            {embedUrl && (
            <iframe
                src={embedUrl}
                width="300"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="rounded-lg"
            />
            )}
        </div>
    )
}