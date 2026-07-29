import React from "react";

const projects = [
  {
    id: 1,
    title: "Sample Bike",
    category: "Maintenance",
    image: "https://res.cloudinary.com/dcwouacgz/image/upload/v1785299877/WhatsApp_Image_2026-07-28_at_4.21.05_PM_wamblc.jpg",
  },
  {
    id: 2,
    title: "Sample Bike",
    category: "Engine Repair",
    image: "https://res.cloudinary.com/dcwouacgz/image/upload/v1785299877/WhatsApp_Image_2026-07-28_at_4.20.55_PM_fhuhe1.jpg",
  },
  {
    id: 3,
    title: "Sample Bike",
    category: "Detailing",
    image: "https://res.cloudinary.com/dcwouacgz/image/upload/v1785234161/WhatsApp_Image_2026-07-28_at_4.20.53_PM_de2g3q.jpg",
  },
];

const LatestProjects = () => {
  return (
    <section className="bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-14 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
              Latest Work
            </p>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900">
              Recent Projects
            </h2>

            <p className="mt-4 max-w-2xl text-zinc-600">
              A selection of motorcycles we've recently serviced, repaired, and
              restored.
            </p>
          </div>

          <button className="hidden rounded-lg border border-zinc-300 px-5 py-3 transition hover:bg-zinc-100 md:block">
            View All
          </button>
        </div>

        {/* Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              <div className="space-y-2 p-6">
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  {project.category}
                </p>

                <h3 className="text-xl font-semibold text-zinc-900">
                  {project.title}
                </h3>
              </div>
            </article>
          ))}
        </div>

        {/* Mobile Button */}
        <div className="mt-12 text-center md:hidden">
          <button className="rounded-lg border border-zinc-300 px-6 py-3 transition hover:bg-zinc-100">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default LatestProjects;