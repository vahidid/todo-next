export async function POST(request: Request) {
  return new Response(JSON.stringify(await request.json()), {
    status: 200,
  });
}
