// app/page.tsx

import ClientComponent from "@/components/ClientComponent";
import ServerComponent from "@/components/ServerComponent";
import { prisma } from "@/db";

export default async function Home() {
  const posts = await prisma.post.findMany({
    select: { id: true, title: true, slug: true, content: true },
  });

  return (
    <section className="p-3">
      <p className="text-xl mb-5">POSTS</p>

      {posts.map((post) => (
        <p key={post.id}>
          <strong>{post.title}</strong>
        </p>
      ))}

      <hr />
      <p>The below is a client component in this server component:</p>
      <ClientComponent serverComponent={<ServerComponent />} />
      <hr />
    </section>
  );
}
