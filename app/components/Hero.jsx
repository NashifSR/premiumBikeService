import React from "react";

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center bg-zinc-50">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-12 px-6 py-20 lg:flex-row lg:justify-between">
        {/* Left Content */}
        <div className="max-w-xl space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Premium Bike Service
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-tight text-zinc-900 md:text-6xl">
            We treat every bike like it's our own.
          </h1>

          <p className="text-lg leading-relaxed text-zinc-600">
            From routine servicing to complete engine rebuilds, we take pride in
            delivering reliable workmanship and honest service.
          </p>

          <div className="flex gap-4 pt-4">
            <button className="rounded-lg bg-zinc-900 px-6 py-3 text-white transition hover:bg-zinc-800">
              View Gallery
            </button>

            <button className="rounded-lg border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100">
              Contact Us
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full max-w-2xl">
          <img
            src="https://res.cloudinary.com/dcwouacgz/image/upload/v1785234161/WhatsApp_Image_2026-07-28_at_4.20.52_PM_1_y5wewe.jpg"
            alt="Motorcycle in workshop"
            className="h-[600px] w-full rounded-2xl object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
    
  );
};

export default Hero;