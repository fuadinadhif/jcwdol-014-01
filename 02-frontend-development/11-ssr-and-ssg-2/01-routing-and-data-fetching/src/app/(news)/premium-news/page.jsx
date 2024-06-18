export default async function Page() {
  const response = await fetch("http://localhost:3000/premium-news/api");
  const posts = await response.json();

  return (
    <>
      {posts.map((post) => {
        return (
          <div style={{ marginTop: "32px", marginBottom: "48px" }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
}
