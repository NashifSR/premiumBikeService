import React from "react";

const Contact = () => {
  return (
    <main className="min-h-screen bg-zinc-50">

      {/* Hero */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
              Contact
            </p>

            <h1 className="mt-5 text-5xl font-bold tracking-tight text-zinc-900 md:text-6xl">
              Let's Talk About Your Bike.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-zinc-600">
              Need a service, repair, or want to discuss a project? Visit our
              workshop or get in touch with us directly.
            </p>
          </div>
        </div>
      </section>


      {/* Contact Information */}
      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

          {/* Left */}
          <div className="space-y-10">

            <div>
              <h3 className="text-sm uppercase tracking-widest text-zinc-500">
                Phone
              </h3>

              <p className="mt-3 text-2xl font-semibold text-zinc-900">
                +880 1XXX-XXXXXX
              </p>
            </div>


            <div>
              <h3 className="text-sm uppercase tracking-widest text-zinc-500">
                Email
              </h3>

              <p className="mt-3 text-2xl font-semibold text-zinc-900">
                hello@garage.com
              </p>
            </div>


            <div>
              <h3 className="text-sm uppercase tracking-widest text-zinc-500">
                Workshop Address
              </h3>

              <p className="mt-3 text-lg leading-relaxed text-zinc-600">
                Your Workshop Address
                <br />
                Dhaka, Bangladesh
              </p>
            </div>


            <div>
              <h3 className="text-sm uppercase tracking-widest text-zinc-500">
                Opening Hours
              </h3>

              <p className="mt-3 text-lg text-zinc-600">
                Saturday - Thursday
                <br />
                9:00 AM - 8:00 PM
              </p>
            </div>

          </div>


          {/* Right */}
          <div className="rounded-3xl bg-zinc-900 p-10 text-white">

            <h2 className="text-3xl font-bold">
              Visit Our Workshop
            </h2>

            <p className="mt-4 leading-relaxed text-zinc-400">
              Bring your motorcycle to us and let our experienced team take
              care of it.
            </p>


            <div className="mt-8 space-y-4">

              <a
                href="#"
                className="block rounded-xl bg-white px-6 py-4 text-center font-medium text-zinc-900 transition hover:bg-zinc-200"
              >
                Get Directions
              </a>


              <a
                href="#"
                className="block rounded-xl border border-zinc-700 px-6 py-4 text-center font-medium transition hover:bg-zinc-800"
              >
                WhatsApp Us
              </a>

            </div>

          </div>

        </div>
      </section>


      {/* Map Placeholder */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">

          <div className="flex h-[400px] items-center justify-center rounded-3xl bg-zinc-200">
            <p className="text-zinc-500">
              Google Maps Location
            </p>
          </div>

        </div>
      </section>


      {/* Social */}
      <section className="border-t border-zinc-200 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">

          <h2 className="text-3xl font-bold text-zinc-900">
            Follow Our Work
          </h2>

          <p className="mt-4 text-zinc-600">
            See our latest projects and motorcycle builds on social media.
          </p>

          <div className="mt-8 flex justify-center gap-4">

            <a
              href="#"
              className="rounded-lg border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100"
            >
              Facebook
            </a>

            <a
              href="#"
              className="rounded-lg border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100"
            >
              Instagram
            </a>

          </div>

        </div>
      </section>

    </main>
  );
};

export default Contact;