

export async function POST(req: Request) {
    try {
        const { weather, mood, temp } = await req.json();

        const prompt = `
            The current weather is ${weather},
            temperture is ${temp}°C, 
            and the mood is ${mood}.
            Suggest a stylish and practical outfit.
            Keep it short, modern, and helpful.
        `;

        const res = await fetch("https://api.openai.com/v1/responses", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                model: "gpt-4.1-mini",
                input: prompt,
            }),
        });

        const data = await res.json();

        console.log("FULL API RESPONSE:", data);

        const outfit = 
            data.output?.[0]?.content?.[0]?.text ?? 
            "Sorry, could not generate outfit right now.";

        return Response.json({
            outfit
        })        
    } catch (error) {
        return Response.json({
            outfit: "Something went wrong, try again.",
        });
    }
} 
