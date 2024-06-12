import Link from "next/link";

export default function Logo({ className }) {
  return (
    <Link href={"/"}>
      <h1 className={`${className} text-center`}>
        Full
        <span className="font-bold">Belly</span>
      </h1>
    </Link>
  );
}
