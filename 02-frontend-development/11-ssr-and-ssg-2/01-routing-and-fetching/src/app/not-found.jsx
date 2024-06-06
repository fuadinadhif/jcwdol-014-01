"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function NotFound() {
  const router = useRouter();
  const [remainingTime, setRemainingTime] = useState(3);

  useEffect(() => {
    const timerId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(timerId);
        router.back();
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, [remainingTime]);

  return (
    <h1>Oops.. There is nothing here. Go back in {remainingTime} seconds!</h1>
  );
}
