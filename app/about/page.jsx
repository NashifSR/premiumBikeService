import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="min-h-screen bg-zinc-50 text-zinc-900">

      {/* =========================================================
          HERO
      ========================================================= */}
      <section className="relative overflow-hidden bg-zinc-950 text-white">
        <div className="mx-auto flex min-h-[75vh] max-w-7xl items-center px-6 py-24">

          <div className="max-w-4xl">

            <p className="text-sm uppercase tracking-[0.35em] text-zinc-400">
              About Our Workshop
            </p>

            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-8xl">
              Built For
              <br />
              <span className="text-zinc-400">
                Riders Who Care.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
              More than a motorcycle workshop. A place built on practical
              experience, honest work, and a straightforward approach to
              keeping your bike running.
            </p>

          </div>

        </div>
      </section>


      {/* =========================================================
          OWNER / FOUNDER
      ========================================================= */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid items-center gap-16 lg:grid-cols-[0.85fr_1.15fr]">

            {/* Owner Image */}
            <div className="relative">

              <div className="relative aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-full bg-zinc-100 shadow-lg">

                <Image
                  src="https://res.cloudinary.com/dcwouacgz/image/upload/v1787213231/WhatsApp_Image_2026-08-20_at_1_LE_upscale_prime_edilft.jpg"
                  alt="Md. Ashraf Uddin - Founder of the motorcycle workshop"
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />

              </div>

              {/* Name Card */}
              <div className="absolute -bottom-6 left-6 right-6 rounded-2xl bg-zinc-950 p-6 text-white shadow-xl sm:left-10 sm:right-10">

                <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
                  Workshop Owner
                </p>

                <h2 className="mt-2 text-2xl font-semibold">
                  Md. Ashraf Uddin
                </h2>

              </div>

            </div>


            {/* Owner Story */}
            <div className="lg:pl-8">

              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                The Person Behind The Workshop
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                An Interest That Turned Into Business.
              </h2>

              <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-600">

                <p>
                  For Md. Ashraf Uddin, getting into the motorcycle space started out
                  as an interest that made sense to pursue as a business venture.
                </p>

                <p>
                  Instead of other industries, he chose to set up a proper workshop environment,
                  bringing together skilled mechanics and the right tools to serve local riders.
                </p>

                <p>
                  Today, he manages the workshop with a straightforward goal: ensuring
                  every customer gets honest service and reliable results.
                </p>

              </div>

              <div className="mt-10 h-px w-full bg-zinc-200" />

              <p className="mt-8 max-w-xl text-base leading-7 text-zinc-500">
                "We keep things practical. Clear communication, fair business,
                and getting you safely back on the road."
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          OUR STORY
      ========================================================= */}
      <section className="bg-zinc-100 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            {/* Story */}
            <div>

              <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                Our Story
              </p>

              <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
                Built Up
                <br />
                Over Time.
              </h2>

              <div className="mt-8 space-y-5 text-lg leading-8 text-zinc-600">

                <p>
                  The workshop started from a simple decision to open a reliable
                  space where local riders could get straightforward mechanical help.
                </p>

                <p>
                  Over the years, we have built a capable team to handle a wide range
                  of motorcycles, diagnose issues, and perform routine maintenance
                  without unnecessary complications.
                </p>

                <p>
                  Our approach has stayed consistent: deal with customers honestly,
                  work carefully, and get the job done right.
                </p>

              </div>

            </div>


            {/* Workshop Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">

              <Image
                src="https://res.cloudinary.com/dcwouacgz/image/upload/v1785299449/WhatsApp_Image_2026-07-28_at_10.22.54_AM_on2xng.jpg"
                alt="Our motorcycle workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">

          <div className="max-w-2xl">

            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              How We Operate
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
              The Way We Work.
            </h2>

          </div>


          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-zinc-200 md:grid-cols-3">

            {/* Card 1 */}
            <div className="bg-white p-8 md:p-10">

              <span className="text-sm font-medium text-zinc-400">
                01
              </span>

              <h3 className="mt-12 text-2xl font-semibold">
                Honest Diagnosis
              </h3>

              <p className="mt-5 leading-7 text-zinc-600">
                We figure out what is actually wrong before recommending a fix.
                No unnecessary repairs or hidden charges.
              </p>

            </div>


            {/* Card 2 */}
            <div className="bg-white p-8 md:p-10">

              <span className="text-sm font-medium text-zinc-400">
                02
              </span>

              <h3 className="mt-12 text-2xl font-semibold">
                Solid Workmanship
              </h3>

              <p className="mt-5 leading-7 text-zinc-600">
                Every service and repair is done with attention to detail so
                your motorcycle remains dependable.
              </p>

            </div>


            {/* Card 3 */}
            <div className="bg-white p-8 md:p-10">

              <span className="text-sm font-medium text-zinc-400">
                03
              </span>

              <h3 className="mt-12 text-2xl font-semibold">
                Rider First
              </h3>

              <p className="mt-5 leading-7 text-zinc-600">
                Our main goal is making sure you leave with a safe machine
                that is ready for daily riding or long trips.
              </p>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          STATS
      ========================================================= */}
      <section className="bg-zinc-950 py-24 text-white md:py-28">
        <div className="mx-auto max-w-6xl px-6">

          <div className="grid gap-12 text-center md:grid-cols-3">

            <div>
              <p className="text-5xl font-bold md:text-7xl">
                10+
              </p>

              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Years Experience
              </p>
            </div>


            <div>
              <p className="text-5xl font-bold md:text-7xl">
                1000+
              </p>

              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Bikes Serviced
              </p>
            </div>


            <div>
              <p className="text-5xl font-bold md:text-7xl">
                100%
              </p>

              <p className="mt-4 text-sm uppercase tracking-[0.25em] text-zinc-500">
                Commitment
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================
          CTA
      ========================================================= */}
      <section className="bg-zinc-100 py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Need Service?
          </p>

          <h2 className="mt-5 text-4xl font-bold tracking-tight md:text-6xl">
            Ready To Get Your Bike Back On The Road?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600">
            Bring your motorcycle by for an honest checkup and reliable mechanical work.
          </p>

          <button
            type="button"
            className="mt-10 rounded-full bg-zinc-950 px-8 py-4 text-sm font-medium text-white transition hover:bg-zinc-800"
          >
            Contact Us
          </button>

        </div>
      </section>

    </main>
  );
};

export default About;