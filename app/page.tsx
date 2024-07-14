"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { useJsApiLoader, GoogleMap, Marker } from "@react-google-maps/api";

import CountUp from "react-countup";

import HourglassTopRoundedIcon from "@mui/icons-material/HourglassTopRounded";

export default function Home() {
  const [host, setHost] = useState<string>();

  useEffect(() => {
    setHost(window.location.host);
  }, []);

  const [converted, divisor] = [100000000, 1000000];

  const mapCenter = {
    lat: -36.9175320111918,
    lng: 145.24824718298692,
  };

  const mapTheme = [
    {
      featureType: "all",
      elementType: "labels",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.fill",
      stylers: [
        {
          saturation: 36,
        },
        {
          color: "#000000",
        },
        {
          lightness: 40,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.text.stroke",
      stylers: [
        {
          visibility: "on",
        },
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "all",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
        {
          weight: 1.2,
        },
      ],
    },
    {
      featureType: "administrative.country",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#319e4e",
        },
      ],
    },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#c4c4c4",
        },
      ],
    },
    {
      featureType: "administrative.neighborhood",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#319e4e",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 20,
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 21,
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi.business",
      elementType: "geometry",
      stylers: [
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#319e4e",
        },
        {
          lightness: "0",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#319e4e",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 18,
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry.fill",
      stylers: [
        {
          color: "#575757",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#ffffff",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "labels.text.stroke",
      stylers: [
        {
          color: "#2c2c2c",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 16,
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "labels.text.fill",
      stylers: [
        {
          color: "#999999",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 19,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          color: "#000000",
        },
        {
          lightness: 17,
        },
      ],
    },
  ];

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
            <div className="flex-col md:space-y-2 space-y-1">
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
          <div className="flex md:flex-row flex-col w-full md:justify-between md:p-16 p-8">
            <h1 className="md:text-lg text-sm opacity-50">{host}</h1>

            <h1 className="md:text-lg text-sm opacity-50">
              Composting today, for tomorrow.
            </h1>
          </div>
        </div>
      </section>

      <section className="md:h-[50dvh] h-[75dvh]">
        <div className="flex w-full h-full justify-center items-center">
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
                options={{ styles: mapTheme }}
                center={mapCenter}
                zoom={10}
              >
                <Marker position={mapCenter} />
              </GoogleMap>
            </div>
          ) : (
            <HourglassTopRoundedIcon className="animate-spin" />
          )}
        </div>
      </section>

      <section className="h-dvh">
        <div className="flex w-full h-full items-center bg-[url('/img/topography.png')] bg-no-repeat">
          <div className="flex md:flex-row flex-col">
            <div className="flex md:w-1/2 justify-center items-center">
              <Image
                className="md:w-5/6"
                src="/img/product.png"
                width={1732}
                height={1732}
                alt="Product"
              />
            </div>

            <div className="flex md:w-1/2 md:justify-normal justify-center items-center">
              <div className="md:p-0 p-10">
                <div className="flex-col space-y-3">
                  <p className="text-[.65rem] opacity-50">PRODUCT</p>

                  <h1 className="md:text-3xl text-2xl">
                    Premium Biofertiliser
                  </h1>

                  <p className="md:text-sm text-xs max-w-lg">
                    Our premium, performant and organic biofertiliser, with
                    essential growth-promoting microorganisms and nutrients.
                    Interested?
                  </p>

                  <p className="md:text-xs text-[.5rem] opacity-25">
                    * Image/preview for illustrative purposes only.
                  </p>
                </div>

                <button className="text-sm hover:text-black hover:bg-white border rounded-full px-10 py-2 my-5 transition duration-100">
                  <Link
                    href="https://mail.google.com/mail/?view=cm&to=mouradarchie@gmail.com"
                    target="_blank"
                  >
                    Contact Us
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
