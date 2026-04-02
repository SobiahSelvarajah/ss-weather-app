"use client";

import { useState } from "react";

type OutfitProps = {
    weather: string;
    mood: string;
    temp: number;
};

export default function OutfitDisplay({ weather, mood, temp }: OutfitProps) {

    const [outfit, setOutfit] = useState<string>("");
    const [loading, setLoading] = useState(false);
    const [hasGenerated, setHasGenerated] = useState(false);

    const generateOutfit = async() => {
        setLoading(true);
        setHasGenerated(true);

        try {
            const res = await fetch("/api/outfit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ weather, mood, temp }),
            });

            const data = await res.json();
            setOutfit(data.outfit);
        } catch (error) {
            setOutfit("Something went wrong, try again.")
        }

        setLoading(false);
    };

    return (
        <div>
            <button
                onClick={generateOutfit}
                className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition duration-300 text-sm font-light"
            >
                {hasGenerated ? "Regenerate Outfit" : "Get Outfit Suggestion"}
            </button>
            {hasGenerated && (
                <div className="mt-6 w-full max-w-md p-6 rounded-2xl 
                                bg-white/10 backdrop-blur-lg border 
                                border-white/20 shadow-xl 
                                transition-all duration-500">
                    {loading ? (
                        <p className="text-center text-sm opacity-70">
                            Generating outfit ideas
                        </p>
                    ) : (
                        <p className="text-center text-sm leading-relaxed">
                            {outfit}
                        </p>
                    )}
                </div>
            )}
        </div>
    )
}