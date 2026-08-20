import Link from "next/link";
import React from "react";

const Featured = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
            Featured Project
          </p>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-zinc-900">
            A Closer Look At Our Work
          </h2>
        </div>

        {/* Featured Card */}
        <article className="grid overflow-hidden rounded-3xl border border-zinc-200 bg-white lg:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden">
            <img
              src="https://res.cloudinary.com/dcwouacgz/image/upload/v1785299449/WhatsApp_Image_2026-07-28_at_10.22.54_AM_on2xng.jpg"
              alt="Featured motorcycle project"
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center p-8 md:p-12">
            <span className="mb-4 inline-block rounded-full bg-zinc-100 px-4 py-1 text-sm font-medium text-zinc-700">
              Engine Rebuild
            </span>

            <h3 className="text-4xl font-bold leading-tight text-zinc-900">
              Honda CBR150R Complete Engine Rebuild
            </h3>

            <p className="mt-3 text-sm text-zinc-500">
              June 12, 2026 · 18 Photos
            </p>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              A complete teardown, precise mechanical inspection, and rebuild of a
              Honda CBR150R engine handling internal wear. The project involved 
              replacing necessary components, careful tuning, and restoring dependable 
              performance for the road.
            </p>

            <Link
              href="/blog"
              className="mt-8 inline-flex w-fit items-center rounded-lg bg-zinc-900 px-6 py-3 font-medium text-white transition hover:bg-zinc-800"
            >
              Read Full Project →
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Featured;