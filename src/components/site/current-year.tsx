"use client";

import { useState, useEffect } from "react";

export function CurrentYear() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    // Deferred to an effect so the build year isn't read during static prerendering.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setYear(new Date().getFullYear());
  }, []);

  return <>{year ?? ""}</>;
}
