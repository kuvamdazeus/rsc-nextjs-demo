// app/server-actions/api/route.ts

import getPostBySlug from "@/actions/getPostBySlug";

// define POST method for the http endpoint at /server-actions/api
export async function POST(request: Request) {
  const { slug } = await request.json();

  if (!slug) return new Response("No slug provided", { status: 400 });

  const post = await getPostBySlug(slug);
  return new Response(JSON.stringify(post), { status: 200 });
}
