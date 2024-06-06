"use client";

import { useRouter } from "next/navigation";

export default function RegistrationForm() {
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    router.push("/");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <button type="submit">Register</button>
    </form>
  );
}
