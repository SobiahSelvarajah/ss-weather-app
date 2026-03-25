
type Music = {
    song: string;
    artist: string;
    embedUrl: string;
};


export function getMusic(mood: string): Music {

    // pick relevant block of case code
    // depending on mood
    switch (mood.toLowerCase()) {

        case "energetic":
            return {
                song: "Another Day Of Sun",
                artist: "La La Land Cast",
                embedUrl: "https://open.spotify.com/embed/track/5kRBzRZmZTXVg8okC7SJFZ?si=f29370c78acd4e9c",
            };

        case "calm":
            return {
                song: "Blue",
                artist: "Hoody",
                embedUrl: "https://open.spotify.com/embed/track/75jyO0tWZ6wSFdhk4y8Spr?si=719d414fc4804936",
            };
        
        case "reflective":
            return {
                song: "La petite fille de la mer - Remastered",
                artist: "Vangelis",
                embedUrl: "https://open.spotify.com/embed/track/2lB8swV3T9yiXyU6OnZ3tY?si=7265992cf5654cbb",
            };

        case "cozy":
            return {
                song: "Nadhiyae Nadhiyae",
                artist: "Unni Menon",
                embedUrl: "https://open.spotify.com/embed/track/6oAMvvfm6kQhADxsfTC9Ah?si=6a64b3857b5e4ba0",
            };

        case "intense":
            return {
                song: "Blizzard",
                artist: "Thomas Bergersen, Two Steps From Hell",
                embedUrl: "https://open.spotify.com/embed/track/5Bo4UGQit7a6hivXOjoM2t?si=ab10bd9a528a4baf",
            };

        case "peaceful":
            return {
                song: "The Well-Tempered Clavier, Book 1: Prelude No.1 in C Major, BWV 846/1",
                artist: "Johann Sebastian Bach, Maurizio Pollini",
                embedUrl: "https://open.spotify.com/embed/track/2w2FzZKSwudBZjOsCei9Qz?si=f51ec7ce395b468d",
            };
    }

    // return fallback if all other cases fail
    return {
        song: "Idea 15",
        artist: "Gibran Alcocer",
        embedUrl: "https://open.spotify.com/embed/track/7MJ8g0egEkhvGu44IamrDE?si=cb8bab95f1b14857",    
    }
}