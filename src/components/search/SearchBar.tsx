"use client";

import { useState } from "react";


export default function SearchBar() {

    const [location, setLocation] = useState("");

    const handleSubmit = (e: {preventDefault: () => void}) => {
        e.preventDefault();

        if(!location.trim()) return;

        console.log(location);
    };


    return (
        <form
            className="flex flex-col w-full max-w-md gap-3 md:flex-row md:gap-0"
            onSubmit={handleSubmit}
        >
            <input
                value={location}
                onChange={(e)=> setLocation(e.target.value)}
                type="text"
                placeholder="Enter town, country (e.g. London, UK)"
                className="w-full rounded-full border border-white/20 bg-white/10 p-3 text-white placeholder-white/60 outline-none backdrop-blur-md md:rounded-r-none"
            />
            <button
                type="submit"
                className="w-full rounded-full border border-white/20 bg-white/20 p-3 transition hover:bg-white/30 md:w-auto md:rounded-l-none"
            >
                Search
            </button>
        </form>
    )
}