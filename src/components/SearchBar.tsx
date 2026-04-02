"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchBar() {

    const [location, setLocation] = useState("");
    const router = useRouter();

    const handleSearch = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(!location.trim()) return;

        const cleanedSearch = location
                                .split(",")
                                .map((part,i) =>
                                    i === 1 ? part.trim().toUpperCase() : part.trim()
                                )
                                .join(",");

        router.push(`/?location=${encodeURIComponent(cleanedSearch)}`);
    };

    return (
        <form onSubmit={handleSearch} className="mb-8 flex justify-center">
            <input 
                type="text" 
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Enter town, country (e.g. London, UK)"
                className="px-4 py-2 rounded-l-full bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-white/60 outline-none w-64"
            />
            <button
                type="submit"
                className="px-4 py-2 rounded-r-full bg-white/20 hover:bg-white/30 border border-white/20 transition">
                Search
            </button>
        </form>
    );
}
