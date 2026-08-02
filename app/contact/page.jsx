import React from "react";

const Contact = () => {
  // WhatsApp phone number format (country code + number without symbols or spaces)
  const whatsappNumber = "8801977200108";
  const whatsappMessage = encodeURIComponent(
    "Hello! I would like to inquire about bike servicing/repair at your workshop."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // Google Maps search query based on the address
  const googleMapsUrl =
    "https://www.google.com/maps/search/?api=1&query=Latifpur+Bazar+Mirzapur+Tangail+Bangladesh";

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
              <a
                href="tel:+8801711200108"
                className="mt-3 block text-2xl font-semibold text-zinc-900 transition hover:text-blue-600"
              >
                +880 1711 200108
              </a>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-zinc-500">
                Email
              </h3>
              <a
                href="mailto:ashraf_aps@garage.com"
                className="mt-3 block text-2xl font-semibold text-zinc-900 transition hover:text-blue-600"
              >
                ashraf_aps@yahoo.com
              </a>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-zinc-500">
                Address
              </h3>
              <p className="mt-3 text-lg leading-relaxed text-zinc-600">
                Latifpur Bazar, Latifpur
                <br />
                Mirzapur
                <br />
                Tangail, Bangladesh
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-widest text-zinc-500">
                Opening Hours
              </h3>
              <p className="mt-3 text-lg text-zinc-600">
                Saturday - Friday, 7 days a week
                <br />
                8:00 AM - 9:00 PM
              </p>
            </div>
          </div>

          {/* Right */}
          <div className="rounded-3xl bg-zinc-900 p-10 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold">Visit Our Workshop</h2>
              <p className="mt-4 leading-relaxed text-zinc-400">
                Bring your motorcycle to us and let our experienced team take
                care of it.
              </p>
            </div>
            <div className="mt-8 space-y-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-white px-6 py-4 text-center font-medium text-zinc-900 transition hover:bg-zinc-200"
              >
                Get Directions
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl border border-zinc-700 px-6 py-4 text-center font-medium transition hover:bg-zinc-800"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl bg-zinc-200 shadow-lg">
            <iframe
              title="Workshop Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.4!2d90.09!3d24.11!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDA2JzM2LjAiTiA5MMKwMDUnMjQuMCJF!5e0!3m2!1sen!2sbd!4v1650000000000!5m2!1sen!2sbd"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full grayscale contrast-125 opacity-90 hover:grayscale-0 transition duration-500"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Social */}
      <section className="border-t border-zinc-200 py-16">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold text-zinc-900">Follow Our Work</h2>
          <p className="mt-4 text-zinc-600">
            See our latest projects and motorcycle builds on social media.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
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