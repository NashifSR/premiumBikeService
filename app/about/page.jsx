import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className="min-h-screen bg-zinc-50">

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              About Us
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-zinc-900 md:text-7xl">
              More Than A Workshop.
              <br />
              A Passion For Motorcycles.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-zinc-600">
              We are a motorcycle workshop built on passion, experience, and
              attention to detail. Every bike that enters our garage receives
              the same care and dedication we would give our own.
            </p>
          </div>
        </div>
      </section>


      {/* Story */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">

          <div className="relative h-[500px] overflow-hidden rounded-3xl">
            <Image
              src="https://res.cloudinary.com/dcwouacgz/image/upload/v1785299449/WhatsApp_Image_2026-07-28_at_10.22.54_AM_on2xng.jpg"
              alt="Workshop"
              fill
              className="object-cover"
            />
          </div>


          <div className="flex flex-col justify-center">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Our Story
            </p>

            <h2 className="mt-4 text-4xl font-bold text-zinc-900">
              Built With Experience And Dedication
            </h2>

            <p className="mt-6 leading-8 text-zinc-600">
              What started as a passion for motorcycles grew into a workshop
              where riders can trust their machines are in capable hands.
              Over the years, we have worked on different types of motorcycles,
              solving problems, restoring bikes, and helping riders keep their
              machines performing at their best.
            </p>

            <p className="mt-5 leading-8 text-zinc-600">
              Our approach is simple: honest diagnosis, quality workmanship,
              and respect for every motorcycle that comes through our doors.
            </p>
          </div>

        </div>
      </section>


      {/* Philosophy */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Our Philosophy
          </p>

          <h2 className="mt-4 text-4xl font-bold text-zinc-900">
            Quality Over Quantity
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">

            <div className="rounded-3xl bg-white p-8">
              <h3 className="text-xl font-semibold">
                Attention To Detail
              </h3>

              <p className="mt-4 text-zinc-600">
                Every repair, adjustment, and finishing touch is done with
                precision.
              </p>
            </div>


            <div className="rounded-3xl bg-white p-8">
              <h3 className="text-xl font-semibold">
                Honest Service
              </h3>

              <p className="mt-4 text-zinc-600">
                We believe in transparent communication and fair solutions.
              </p>
            </div>


            <div className="rounded-3xl bg-white p-8">
              <h3 className="text-xl font-semibold">
                Rider First
              </h3>

              <p className="mt-4 text-zinc-600">
                We focus on keeping your motorcycle safe, reliable, and ready.
              </p>
            </div>

          </div>

        </div>
      </section>


      {/* Stats */}
      <section className="bg-zinc-900 py-24 text-white">
        <div className="mx-auto grid max-w-5xl gap-10 px-6 text-center md:grid-cols-3">

          <div>
            <h3 className="text-5xl font-bold">
              10+
            </h3>
            <p className="mt-3 text-zinc-400">
              Years Experience
            </p>
          </div>


          <div>
            <h3 className="text-5xl font-bold">
              1000+
            </h3>
            <p className="mt-3 text-zinc-400">
              Bikes Serviced
            </p>
          </div>


          <div>
            <h3 className="text-5xl font-bold">
              100%
            </h3>
            <p className="mt-3 text-zinc-400">
              Dedication
            </p>
          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">

          <h2 className="text-4xl font-bold text-zinc-900">
            Have A Motorcycle That Needs Care?
          </h2>

          <p className="mt-5 text-lg text-zinc-600">
            Visit our workshop and experience professional motorcycle service.
          </p>

          <button className="mt-8 rounded-lg bg-zinc-900 px-8 py-4 text-white transition hover:bg-zinc-800">
            Contact Us
          </button>

        </div>
      </section>

    </main>
  );
};

export default About;