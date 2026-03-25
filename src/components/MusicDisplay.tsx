import { getMusic } from "@/lib/getMusic";

type MusicDisplayProps = {
    mood: string;
};

export default function MusicDisplay({ mood }: MusicDisplayProps) {

    const { song, artist, embedUrl } = getMusic(mood);

    return (
        <div className="mt-6 text-center space-y-4">
            <p className="text-lg">
                🎵 Song of the moment
            </p>
            <p className="text-xl font-semibold">
                {song} — {artist}
            </p>
            {embedUrl && (
            <iframe
                src={embedUrl}
                width="300"
                height="80"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                className="mx-auto rounded-lg"
            />
            )}
        </div>
    )
}