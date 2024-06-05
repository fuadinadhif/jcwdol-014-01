"use client";

import { useRouter } from "next/navigation";

export default function RegisterButton() {
  const router = useRouter();

  return (
    <button style={{ marginBottom: "16px" }} onClick={() => router.push("/")}>
      Register
    </button>
  );
}
