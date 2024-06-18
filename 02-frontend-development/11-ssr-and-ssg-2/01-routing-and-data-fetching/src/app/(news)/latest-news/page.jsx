export default async function LatestNews() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return <h1>Latest, news!</h1>;
}
