export async function POST(req: Request) {
    const {
        apiKey,
        api,
    }: { apiKey: string; api: string } = await req.json();
    console.log(apiKey, api);
    return Response.json({ message: "API Key saved" });
}