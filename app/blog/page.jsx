import Image from "next/image";
import Link from "next/link";
import React from "react";

const projects = [
  {
    id: 1,
    title: "Honda CBR150R Engine Rebuild",
    category: "Engine Work",
    date: "June 12, 2026",
    image:
      "https://images.pexels.com/photos/4489703/pexels-photo-4489703.jpeg",
    slug: "honda-cbr150-engine-rebuild",
  },
  {
    id: 2,
    title: "Yamaha R15 Complete Service",
    category: "Maintenance",
    date: "May 28, 2026",
    image:
      "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg",
    slug: "yamaha-r15-complete-service",
  },
  {
    id: 3,
    title: "Custom Bike Detailing",
    category: "Detailing",
    date: "May 10, 2026",
    image:
      "https://images.pexels.com/photos/1715193/pexels-photo-1715193.jpeg",
    slug: "custom-bike-detailing",
  },
  {
    id: 4,
    title: "Suzuki Gixxer Restoration",
    category: "Restoration",
    date: "April 22, 2026",
    image:
      "https://images.pexels.com/photos/2611690/pexels-photo-2611690.jpeg",
    slug: "suzuki-gixxer-restoration",
  },
];

const Blog = () => {
  return (
    <main className="min-h-screen bg-zinc-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* Header */}
        <div className="mb-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Projects
          </p>

          <h1 className="mt-3 text-5xl font-bold tracking-tight text-zinc-900">
            Our Latest Work
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-zinc-600">
            Explore our recent motorcycle builds, repairs, restorations, and
            service projects.
          </p>
        </div>


        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              href={`/projects/${project.slug}`}
              key={project.id}
              className="group overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={`${project.image}?auto=compress&cs=tinysrgb&w=1200`}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="text-sm uppercase tracking-wider text-zinc-500">
                  {project.category}
                </p>

                <h2 className="mt-3 text-2xl font-semibold text-zinc-900">
                  {project.title}
                </h2>

                <p className="mt-3 text-sm text-zinc-500">
                  {project.date}
                </p>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
};

export default Blog;