

export type Song = {
    title: string;
    artist: string;
};


export const musicRecommendations: Record<string, Song[]> = {
    Clear: [
        {
            title: "Walking on Sunshine",
            artist: "Katrina and the Waves",
        },
        {
            title: "Mr Blue Sky",
            artist: "Electric Light Orchestra",
        },
        {
            title: "Good Day Sunshine",
            artist: "The Beatles",
        },
        {
            title: "Island in the Sun",
            artist: "Weezer",
        },
        {
            title: "Here Comes the Sun",
            artist: "The Beatles",
        },
        {
            title: "Sway",
            artist: "Michael Bublé",
        },
    ],
    Clouds: [
        {
            title: "A Sunday kind of Love",
            artist: "Etta James",
        },
        {
            title: "Autumn Leaves",
            artist: "Cannonball Adderley",
        },
        {
            title: "Street of Dreams",
            artist: "Grant Green",
        },
        {
            title: "I'm A Fool to Want You",
            artist: "Billie Holiday",
        },
        {
            title: "Corcovado (Quiet Nights of Quiet Stars)",
            artist: "Stan Getz & João Gilberto",
        },
        {
            title: "Dreams",
            artist: "Fleetwood Mac",
        },
    ],
    Rain: [
        {
            title: "Blue",
            artist: "Hoody",
        },
        {
            title: "Chihiro",
            artist: "Billie Eilish",
        },
        {
            title: "Come Rain or Come Shine",
            artist: "Margaret Whiting",
        },
        {
            title: "Ocean",
            artist: "Elsa & Emilie",
        },
        {
            title: "When It Rains It Pours",
            artist: "Pee Wee Crayton",
        },
        {
            title: "lovely",
            artist: "Billie Eilish feat. Khalid",
        },
    ],
    Snow: [
        {
            title: "Let It Snow",
            artist: "Dean Martin",
        },
        {
            title: "White Winter Hymnal",
            artist: "Fleet Foxes",
        },
        {
            title: "Winter",
            artist: "The Rolling Stones",
        },
        {
            title: "Angel in the Snow",
            artist: "Elliott Smith",
        },
        {
            title: "Amid the Falling Snow",
            artist: "Enya",
        },
        {
            title: "Wintertime Love",
            artist: "The Doors",
        },
    ],
};


export const defaultSongs: Song[] = [
    {
        title: "Good as Hell",
        artist: "Lizzo",
    },
    {
        title: "On Top of the World",
        artist: "Imagine Dragon",
    },
    {
        title: "Adventure of a Lifetime",
        artist: "Coldplay",
    },
]; 