"use server";

// actions/createPost.ts
// "actions" folder is named arbitarily and can be named anything.

import { prisma } from "@/db";

export default async function createPost(title: string, content: string) {
  const postSlug = title.toLowerCase().replace(/ /g, "-");

  const newPost = await prisma.post.create({
    data: {
      title,
      content,
      slug: postSlug,
    },
  });

  return newPost;
}
