import React from "react";

const Contact = () => {
  return (
    <section className="bg-zinc-900 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2">
        {/* Left */}
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight">
            Visit the Workshop
          </h2>

          <p className="max-w-lg leading-relaxed text-zinc-300">
            Whether you need routine servicing, repairs, or just want to discuss
            your motorcycle, we're always happy to help. Stop by the workshop or
            get in touch using the information below.
          </p>
        </div>

        {/* Right */}
        <div className="space-y-8">
          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Phone
            </h3>
            <p className="text-lg">+880 1XXX-XXXXXX</p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Email
            </h3>
            <p className="text-lg">info@garage.com</p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Address
            </h3>
            <p className="text-lg">
              Your Workshop Address
              <br />
              City, Bangladesh
            </p>
          </div>

          <div>
            <h3 className="mb-2 text-sm font-semibold uppercase tracking-widest text-zinc-400">
              Working Hours
            </h3>
            <p className="text-lg">
              Saturday – Thursday
              <br />
              9:00 AM – 8:00 PM
            </p>
          </div>

          <a
            href="#"
            className="inline-flex rounded-lg bg-white px-6 py-3 font-medium text-zinc-900 transition hover:bg-zinc-200"
          >
            Get Directions
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;