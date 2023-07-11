"use server";

// actions/getPostBySlug.ts

import { prisma } from "@/db";

export default async function getPostBySlug(slug: string) {
  const post = await prisma.post.findUnique({
    where: {
      slug,
    },
  });

  return post;
}
