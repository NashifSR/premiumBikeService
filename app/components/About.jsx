import React from "react";

const About = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">
        {/* Image */}
        <div>
          <img
            src="https://res.cloudinary.com/dcwouacgz/image/upload/v1785296179/premiumBikeService/gallery/rexnh2lm24j100ypy8uh.jpg"
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
            Built on Practical Experience. Driven by Results.
          </h2>

          <p className="text-lg leading-relaxed text-zinc-600">
            We built this workshop to provide local riders with a reliable, 
            straightforward place to get their motorcycles serviced and repaired properly. 
            From routine maintenance to complex engine work, our focus is always on 
            honest diagnosis and solid mechanics.
          </p>

          <p className="leading-relaxed text-zinc-600">
            Over the years, we have built a capable team and handled hundreds of bikes, 
            earning the trust of riders who want dependable work without the runaround. 
            Every project in our gallery reflects our commitment to getting the job done right.
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