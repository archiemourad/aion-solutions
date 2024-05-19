"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [host, setHost] = useState<string>();

  useEffect(() => {
    setHost(window.location.host);
  }, []);

  return (
    <main>
      <video
        className="object-cover w-dvw h-dvh brightness-50"
        preload="none"
        autoPlay
        muted
        loop
      >
        <source src="/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute bottom-0 left-0 p-16">
        <h1 className="md:text-3xl text-xl">{host}</h1>
      </div>
    </main>
  );
}
