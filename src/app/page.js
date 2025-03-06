import Hero from "./sections/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Hero/>
      </main>
      <footer className="">
      </footer>
    </div>
  );
}
