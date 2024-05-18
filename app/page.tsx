export default function Home() {
  return (
    <main>
      <video
        className="object-cover w-dvw h-dvh"
        preload="none"
        autoPlay
        muted
        loop
      >
        <source src="/banner.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </main>
  );
}
