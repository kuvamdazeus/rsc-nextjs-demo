import { prisma } from "@/db";

export default async function ServerComponent() {
  const firstPost = await prisma.post.findUnique({
    where: { slug: "my-first-post" },
  });

  return (
    <section className="my-3">
      <p>This is a server component that fetches some data on the server</p>
      <p>
        Sample Data:
        <br />
        <code>{JSON.stringify(firstPost, null, 2)}</code>
      </p>
    </section>
  );
}
