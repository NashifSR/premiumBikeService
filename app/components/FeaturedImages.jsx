"use client";

import Image from "next/image";
import Link from "next/link";
import useGallery from "../hooks/useGallery";

const FeaturedImages = () => {
    const { images, loading } = useGallery();
    const featured = images?.slice(0, 5) || [];

    if (loading || !featured.length) {
        return null;
    }

    return (
        <section className="bg-zinc-50 py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* Header */}
                <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
                    <div>
                        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
                            Featured
                        </p>
                        <h2 className="mt-3 text-5xl font-black text-zinc-900">
                            Latest Works
                        </h2>
                        <p className="mt-4 max-w-xl text-zinc-600">
                            A glimpse of motorcycles transformed in our workshop.
                        </p>
                    </div>

                    <Link
                        href="/gallery"
                        className="text-sm font-medium text-blue-500 transition hover:text-blue-600"
                    >
                        See more &rarr;
                    </Link>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-4 md:grid-rows-2">
                    {featured.map((image, index) => (
                        <div
                            key={image.asset_id}
                            className={`group relative overflow-hidden rounded-3xl bg-zinc-200 ${
                                index === 0
                                    ? "md:col-span-2 md:row-span-2 h-[520px]"
                                    : "h-[250px]"
                            }`}
                        >
                            <Image
                                src={image.secure_url}
                                alt={image.display_name || "Bike"}
                                fill
                                className="object-cover transition duration-700 group-hover:scale-105"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedImages;