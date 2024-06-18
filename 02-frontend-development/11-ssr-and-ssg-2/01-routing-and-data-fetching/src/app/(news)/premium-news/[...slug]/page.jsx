export default function Page({ params }) {
  console.log(params);
  return <h1>Catch All Segments Page {params.slug.join(" ")}</h1>;
}
