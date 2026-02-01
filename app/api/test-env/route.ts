import { NextResponse } from "next/server";

export async function GET() {
    return NextResponse.json({
        hasGroqKey: !!process.env.GROQ_API_KEY,
        hasOpenAiKey: !!process.env.OPENAI_API_KEY,
        groqKeyLength: process.env.GROQ_API_KEY?.length || 0,
        nodeEnv: process.env.NODE_ENV,
        // Don't expose actual keys, just check if they exist
    });
}
