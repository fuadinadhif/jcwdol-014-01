import { posts as originalPosts } from "@/data/data";

export async function GET() {
  return Response.json(originalPosts);
}

export async function POST(request) {
  const post = await request.json();
  const newPost = {
    ...post,
    userId: originalPosts.length + 1,
    id: originalPosts.length + 1,
    title: post.title,
    body: post.body,
  };

  originalPosts.push(newPost);

  return new Response(JSON.stringify(newPost), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
