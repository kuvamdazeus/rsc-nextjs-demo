(async () => {
  const { PrismaClient } = require("@prisma/client");

  const client = new PrismaClient();

  await client.$connect();

  const sampleData = [
    {
      title: "My first post",
      slug: "my-first-post",
      content: "This is my first post",
    },
    {
      title: "My second post",
      slug: "my-second-post",
      content: "This is my second post",
    },
    {
      title: "My third post",
      slug: "my-third-post",
      content: "This is my third post",
    },
    {
      title: "My fourth post",
      slug: "my-fourth-post",
      content: "This is my fourth post",
    },
    { title: "My fifth post", slug: "my-fifth-post", content: "This is my fifth post" },
    {
      title: "My sixth post",
      slug: "my-sixth-post",
      content: "This is my sixth post",
    },
    {
      title: "My seventh post",
      slug: "my-seventh-post",
      content: "This is my seventh post",
    },
  ];

  await client.post
    .createMany({
      data: sampleData,
    })
    .then(() => {
      console.log("Sample data created");
    });
})();
