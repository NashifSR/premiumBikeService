import React from "react";

const About = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Image */}
        <div>
          <img
            src="/about-workshop.jpg"
            alt="Inside the workshop"
            className="h-[500px] w-full rounded-2xl object-cover"
          />
        </div>

        {/* Content */}
        <div className="space-y-6">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            About Us
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
            Built on Trust. Driven by Passion.
          </h2>

          <p className="text-lg leading-relaxed text-zinc-600">
            We believe every motorcycle deserves expert care. Whether it's a
            routine service, engine repair, or a complete restoration, we
            approach every project with attention to detail and genuine passion
            for motorcycles.
          </p>

          <p className="leading-relaxed text-zinc-600">
            Over the years, we've worked on hundreds of bikes and built lasting
            relationships with riders who trust us to keep their motorcycles in
            top condition. Every project in our gallery represents our
            commitment to quality craftsmanship.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <h3 className="text-3xl font-bold text-zinc-900">10+</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Years of Experience
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-zinc-900">1000+</h3>
              <p className="mt-1 text-sm text-zinc-500">
                Bikes Serviced
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;