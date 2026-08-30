"use client";

import { useState } from "react";

type SearchBarProps = {
    onSearch: (location: string) => Promise<void>;
    loading: boolean;
    clearError: () => void;
};

export default function SearchBar({
    onSearch, 
    loading,
    clearError,
}: SearchBarProps) {

    const [location, setLocation] = useState("");
    const [inputError, setInputError] = useState("");

    const handleSubmit = async (e: {preventDefault: () => void}) => {
        e.preventDefault();

        if (loading) return;

        clearError();

        const trimmedLocation = location.trim();

        if (!trimmedLocation) {
            setInputError("Please enter a location to search.");
            return;
        }

        setInputError("");

        await onSearch(trimmedLocation);
        setLocation("");
    };

    return (
        <div className="w-full max-w-md">
            <form
                onSubmit={handleSubmit}
                noValidate
                className="flex flex-col w-full gap-3 md:flex-row md:gap-0"
            >
                <input
                    value={location}
                    onChange={(e)=> {
                        setLocation(e.target.value);
                        setInputError("");
                        clearError();
                    }}
                    disabled={loading}
                    type="text"
                    placeholder="Enter town, country (e.g. London, UK)"
                    aria-invalid={Boolean(inputError)}
                    aria-describedby={inputError ? "location-error" : undefined}
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

            {inputError && (
                <p
                    id="location-error"
                    role="alert"
                    className="mt-5 px-5 text-sm text-rose-300"
                >
                    {inputError}
                </p>
            )}
        </div>

    )
};
