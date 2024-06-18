import Link from "next/link";

export default function Page() {
  // const indexError = Math.round(Math.random());

  // if (indexError === 0) {
  //   throw new Error("Artificial error!");
  // }

  return (
    <>
      <h1>Hot, news!</h1>
      <div>
        <Link href="/hot-news/1">
          <h2>Hot 1</h2>
        </Link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          vitae voluptas. Dignissimos dolorum voluptate totam quaerat cum
          dolores officia quas quia placeat laboriosam. Tempore rerum in ipsam
          consequatur qui sunt?
        </p>
      </div>
      <div>
        <Link href="/hot-news/2">
          <h2>Hot 2</h2>
        </Link>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus,
          vitae voluptas.
        </p>
      </div>
      <div>
        <Link href="/hot-news/3">
          <h2>Hot 3</h2>
        </Link>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </>
  );
}
