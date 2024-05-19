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

      <div className="absolute w-full bottom-0">
        <div className="flex md:flex-row flex-col md:justify-between md:p-16 p-8">
          <h1 className="md:text-xl text-md opacity-50">{host}</h1>

          <h1 className="md:text-xl text-md opacity-50">
            Composting today, for tomorrow.
          </h1>
        </div>
      </div>
    </main>
  );
}
