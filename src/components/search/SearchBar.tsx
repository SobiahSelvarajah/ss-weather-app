"use client";

import { useState } from "react";


type SearchBarProps = {
    onSearch: (location: string) => Promise<void>;
    loading: boolean;
};

export default function SearchBar({
    onSearch, 
    loading,
}: SearchBarProps) {

    const [location, setLocation] = useState("");

    const handleSubmit = async (e: {preventDefault: () => void}) => {
        e.preventDefault();

        if (loading) return;
        if (!location.trim()) return;

        try {
            await onSearch(location);
            setLocation("");
        } catch (error) {
            console.error(error);
        }
    };


    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full max-w-md gap-3 md:flex-row md:gap-0"
        >
            <input
                value={location}
                onChange={(e)=> setLocation(e.target.value)}
                disabled={loading}
                type="text"
                placeholder="Enter town, country (e.g. London, UK)"
                className="w-full rounded-full border border-white/20 bg-white/10 p-3 text-white placeholder-white/60 outline-none backdrop-blur-md disabled:cursor-not-allowed disabled:opacity-50 md:rounded-r-none"
            />
            <button
                type="submit"
                disabled={loading}
                className="w-full rounded-full border border-white/20 bg-white/20 p-3 transition hover:bg-white/30 disabled:cursor-not-allowed disabled:opacity-50 md:w-auto md:rounded-l-none"
            >
                {loading ? "Searching..." : "Search"}
            </button>
        </form>
    )
};
