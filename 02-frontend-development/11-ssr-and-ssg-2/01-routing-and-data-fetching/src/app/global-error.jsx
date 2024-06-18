"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html>
      <body>
        <h1>{error.message}</h1>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
