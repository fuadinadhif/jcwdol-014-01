export default function Layout({ children, conversion, revenue, visitor }) {
  return (
    <>
      {children}
      {conversion}
      {revenue}
      {visitor}
    </>
  );
}
