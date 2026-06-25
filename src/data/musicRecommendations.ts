

export type Song = {
    title: string;
    artist: string;
    spotifyUrl: string;
};


export const musicRecommendations: Record<string, Song[]> = {
    Clear: [
        {
            title: "Walking on Sunshine",
            artist: "Katrina and the Waves",
            spotifyUrl: "https://open.spotify.com/track/05wIrZSwuaVWhcv5FfqeH0?si=d03d2a722b0d4c6e",
        },
        {
            title: "Mr Blue Sky",
            artist: "Electric Light Orchestra",
            spotifyUrl: "https://open.spotify.com/track/2RlgNHKcydI9sayD2Df2xp?si=19a1f90d3f4843ee",
        },
        {
            title: "Good Day Sunshine",
            artist: "The Beatles",
            spotifyUrl: "https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2?si=44930c2e3f334d8e",
        },
        {
            title: "Island in the Sun",
            artist: "Weezer",
            spotifyUrl: "https://open.spotify.com/track/0AxdJGlXJjEUsNONDuT2pe?si=09eeb87014f343a4",
        },
        {
            title: "Here Comes the Sun",
            artist: "The Beatles",
            spotifyUrl: "https://open.spotify.com/track/6dGnYIeXmHdcikdzNNDMm2?si=993d419900c546ee",
        },
        {
            title: "Sway",
            artist: "Michael Bublé",
            spotifyUrl: "https://open.spotify.com/track/2ajUl8lBLAXOXNpG4NEPMz?si=6698e38d01324b90",
        },
    ],
    Clouds: [
        {
            title: "A Sunday kind of Love",
            artist: "Etta James",
            spotifyUrl: "https://open.spotify.com/track/0zGLlXbHlrAyBN1x6sY0rb?si=f1bfde0b685141d6",
        },
        {
            title: "Autumn Leaves",
            artist: "Cannonball Adderley",
            spotifyUrl: "https://open.spotify.com/track/2AoSArkYqh7G9BVPETOkEV?si=1c8903fbe7dc4e6e",
        },
        {
            title: "Street of Dreams",
            artist: "Grant Green",
            spotifyUrl: "https://open.spotify.com/album/43UCKQPN2pDxnqmrI8XxGR?si=8a43a3a6895b4b7e",
        },
        {
            title: "I'm A Fool to Want You",
            artist: "Billie Holiday",
            spotifyUrl: "https://open.spotify.com/track/6Rvz1jM5eUqzNs2Pi8RMTG?si=c60a687b55224b9b",
        },
        {
            title: "Corcovado (Quiet Nights of Quiet Stars)",
            artist: "Stan Getz & João Gilberto",
            spotifyUrl: "https://open.spotify.com/track/5nU7dvOfzYs9QVVL7YVNPE?si=915c1ba360fa4f9c",
        },
        {
            title: "Dreams",
            artist: "Fleetwood Mac",
            spotifyUrl: "https://open.spotify.com/track/0ofHAoxe9vBkTCp2UQIavz?si=63a53754f61747e0",
        },
    ],
    Rain: [
        {
            title: "Blue",
            artist: "Hoody",
            spotifyUrl: "https://open.spotify.com/track/75jyO0tWZ6wSFdhk4y8Spr?si=84ebb48cb26c4a99",
        },
        {
            title: "Chihiro",
            artist: "Billie Eilish",
            spotifyUrl: "https://open.spotify.com/track/7BRD7x5pt8Lqa1eGYC4dzj?si=22ffa186a46144e6",
        },
        {
            title: "Come Rain or Come Shine",
            artist: "Margaret Whiting",
            spotifyUrl: "https://open.spotify.com/track/3iKc5J8l2yfTH5GihfNfhh?si=54b4e158faff4905",
        },
        {
            title: "Ocean",
            artist: "Elsa & Emilie",
            spotifyUrl: "https://open.spotify.com/track/2W3Z4r19OwBPHqEcD042QB?si=f2de5bc5b42a48f5",
        },
        {
            title: "When It Rains It Pours",
            artist: "Pee Wee Crayton",
            spotifyUrl: "https://open.spotify.com/track/5vwexJnSZNlx8UGGkL2viC?si=7ad8a60433134837",
        },
        {
            title: "lovely",
            artist: "Billie Eilish feat. Khalid",
            spotifyUrl: "https://open.spotify.com/track/0u2P5u6lvoDfwTYjAADbn4?si=ff28a68f7f304262",
        },
    ],
    Snow: [
        {
            title: "Let It Snow",
            artist: "Dean Martin",
            spotifyUrl: "https://open.spotify.com/track/2uFaJJtFpPDc5Pa95XzTvg?si=9417f9c8a934431e",
        },
        {
            title: "White Winter Hymnal",
            artist: "Fleet Foxes",
            spotifyUrl: "https://open.spotify.com/track/2c6FPsa8Omk4XuG2iCiirz?si=1ca635abe9d44542",
        },
        {
            title: "Winter",
            artist: "The Rolling Stones",
            spotifyUrl: "https://open.spotify.com/track/5BquOJwWEEJMGqXsUNWjHu?si=3a5c751d1adc4ecd",
        },
        {
            title: "Angel in the Snow",
            artist: "Elliott Smith",
            spotifyUrl: "https://open.spotify.com/track/5ajxIVMf6INoeHqkNjvQ73?si=ce62af2247254ca2",
        },
        {
            title: "Amid the Falling Snow",
            artist: "Enya",
            spotifyUrl: "https://open.spotify.com/track/69BSguYY4m6b1yibQdUBst?si=0b0dddf5547e4344",
        },
        {
            title: "Wintertime Love",
            artist: "The Doors",
            spotifyUrl: "https://open.spotify.com/track/5XZKjnMgqL4fHTS5at7657?si=4479201966be4774",
        },
    ],
};


export const defaultSongs: Song[] = [
    {
        title: "Good as Hell",
        artist: "Lizzo",
        spotifyUrl: "https://open.spotify.com/track/6KgBpzTuTRPebChN0VTyzV?si=bc3c3173d1f849bd",
    },
    {
        title: "On Top of the World",
        artist: "Imagine Dragons",
        spotifyUrl: "https://open.spotify.com/track/213x4gsFDm04hSqIUkg88w?si=7ff5ade7fc4f4cf3",
    },
    {
        title: "Adventure of a Lifetime",
        artist: "Coldplay",
        spotifyUrl: "https://open.spotify.com/track/69uxyAqqPIsUyTO8txoP2M?si=bb4fea7740c64d74",
    },
]; 