export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <div>
      <h2>Total Revenue</h2>
      <p>Rp. 5.000.000.000</p>
    </div>
  );
}
