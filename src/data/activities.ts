

export type Activity = {
    icon: string;
    text: string;
};


export const activities: Record<string, Activity[]> = {
    Clear: [
        {icon: "🚶", text: "Go for a walk"},
        {icon: "🌳", text: "Visit a local park"},
        {icon: "🧺", text: "Have a picnic"},
        {icon: "🦜", text: "Go bird watching"},
        {icon: "🌱", text: "Do some gardening"},
        {icon: "🍖", text: "Put the barbecue on"}
    ],
    Clouds: [
        {icon: "☕", text: "Visit a cafe"},
        {icon: "📚", text: "Read a book"},
        {icon: "🏛️", text: "Explore a museum"},
        {icon: "🧩", text: "Piece together jigsaw puzzles"},
        {icon: "🎙️", text: "Catch up on a podcast"},
        {icon: "✍🏻", text: "Do some journalling"}
    ],
    Rain: [
        {icon: "🍿", text: "Have a cozy movie night in"},
        {icon: "👨‍🍳", text: "Try a new recipe"},
        {icon: "🎲", text: "Play some board games"},
        {icon: "🗺", text: "Visit an indoor attraction"},
        {icon: "🔍", text: "Host an indoor treasure hunt"},
        {icon: "🕵️", text: "Play a mystery murder game"}
    ],
    Snow: [
        {icon: "⛄", text: "Build a snowman"},
        {icon: "❄️", text: "Make snow angels"},
        {icon: "🍫", text: "Enjoy a hot chocolate"},
        {icon: "🖱️", text: "Make toasted marshmallows"},
        {icon: "🛷", text: "Sled the day away"}
    ],
};


export const defaultActivities: Activity[] = [
    {icon: "😊", text: "Enjoy your day"},
    {icon: "✨", text: "Try something new"},
    {icon: "🏃", text: "Stay active"},
    {icon: "🌍", text: "Explore somewhere new"}
];
