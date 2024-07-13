"use client";

import { useState, useEffect } from "react";

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

import CountUp from "react-countup";

import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";

export default function Home() {
  const [host, setHost] = useState<string>();

  useEffect(() => {
    setHost(window.location.host);
  }, []);

  const converted = 100000000;
  const divisor = 1000000;

  const center = {
    lat: -36.9175320111918,
    lng: 145.24824718298692,
  };

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "?",
  });

  return (
    <main>
      <section className="h-dvh">
        <video
          className="object-cover w-full h-full brightness-50"
          preload="none"
          autoPlay
          muted
          loop
        >
          <source src="/banner.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 w-full h-full">
          <div className="flex w-full h-full justify-center items-center">
            <div className="flex flex-col md:space-y-2 space-y-1">
              <div className="flex items-center md:space-x-8 space-x-4">
                <CountUp
                  className="md:text-6xl text-4xl"
                  start={converted - converted / divisor}
                  end={converted}
                  duration={3}
                />

                <p className="md:text-lg text-sm">kg(s) converted.</p>
              </div>

              <p className="md:text-xs text-[.5rem] opacity-25">
                * Statistic for illustrative purposes only.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 w-full">
          <div className="flex w-full md:flex-row flex-col md:justify-between md:p-16 p-8">
            <h1 className="md:text-lg text-sm opacity-50">{host}</h1>

            <h1 className="md:text-lg text-sm opacity-50">
              Composting today, for tomorrow.
            </h1>
          </div>
        </div>
      </section>

      <section>
        <div className="flex md:h-[50dvh] h-[75dvh] justify-center items-center">
          {isLoaded ? (
            <div className="relative w-full h-full">
              <div className="absolute flex w-full h-full justify-center items-center lg:space-x-64 md:space-x-32 space-x-8">
                <div className="flex md:space-x-6 space-x-4">
                  <h1 className="lg:text-2xl md:text-xl">Location</h1>

                  <h1 className="lg:text-2xl md:text-xl">→</h1>
                </div>

                <div className="md:max-w-md max-w-48">
                  <p className="lg:text-lg">
                    The location of our biofertiliser production plant.
                  </p>

                  <p className="md:text-xs text-[.5rem] opacity-25">
                    * Location/marker for illustrative purposes only.
                  </p>
                </div>
              </div>

              <GoogleMap
                mapContainerClassName="w-full h-full blur-sm hover:blur-none opacity-15 hover:opacity-100 transition duration-100"
                center={center}
                zoom={10}
              >
                <Marker position={center} />
              </GoogleMap>
            </div>
          ) : (
            <HourglassTopRoundedIcon className="animate-spin" />
          )}
        </div>
      </section>
    </main>
  );
}
