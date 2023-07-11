"use client";

import { useState } from "react";

export default function ClientComponent({ serverComponent }: { serverComponent?: any }) {
  const [counter, setCounter] = useState(0);
  return (
    <section className="my-3">
      <p>This is a counter: {counter}</p>
      <button onClick={() => setCounter((count) => count + 1)}>increment</button>

      <hr />
      <p>children of this client component render below:</p>
      {serverComponent}
      <hr />
    </section>
  );
}
