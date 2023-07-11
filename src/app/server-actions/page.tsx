"use client";

import createPost from "@/actions/createPost";
import { useState } from "react";

export default function Page() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <section>
      <input
        className="border"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <br />

      <textarea
        className="border"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Content"
      />
      <br />

      <button onClick={() => createPost(title, content).then((post) => console.log(post))}>Submit</button>
    </section>
  );
}
