export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  console.log(id);
  return new Response(JSON.stringify({ success: true }), {
    status: 200,
  });
}
