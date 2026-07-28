import {
  Image,
  Package,
  FileText,
  Eye,
  Upload,
  Plus,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const stats = [
  {
    title: "Gallery Photos",
    value: "128",
    icon: Image,
  },
  {
    title: "Products",
    value: "42",
    icon: Package,
  },
  {
    title: "Projects",
    value: "18",
    icon: FileText,
  },
  {
    title: "Monthly Views",
    value: "2,430",
    icon: Eye,
  },
];

const activities = [
  "Uploaded Yamaha R15 service photos",
  "Added LS2 Helmet",
  "Updated Engine Oil price",
  "Published Honda Hornet project",
];

export default function AdminDashboard() {
  return (
    <div className="space-y-10">
      {/* Heading */}
      <div>
        <h1 className="text-4xl font-bold text-zinc-900">
          Dashboard
        </h1>

        <p className="mt-2 text-zinc-500">
          Welcome back. Here's what's happening today.
        </p>
      </div>

      {/* Stats */}
      <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-xl bg-zinc-100 p-3">
                  <Icon className="h-6 w-6 text-zinc-700" />
                </div>

                <span className="text-3xl font-bold">
                  {stat.value}
                </span>
              </div>

              <p className="mt-5 text-sm text-zinc-500">
                {stat.title}
              </p>
            </div>
          );
        })}
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="mb-6 text-2xl font-semibold">
          Quick Actions
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <Link
            href="/admin/gallery"
            className="group rounded-3xl bg-zinc-900 p-8 text-white transition hover:-translate-y-1"
          >
            <Upload className="mb-8 h-10 w-10" />

            <h3 className="text-2xl font-semibold">
              Upload Photos
            </h3>

            <p className="mt-2 text-zinc-300">
              Add today's workshop photos.
            </p>

            <ArrowRight className="mt-8 h-5 w-5 transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="/admin/products"
            className="group rounded-3xl border border-zinc-200 bg-white p-8 transition hover:-translate-y-1"
          >
            <Package className="mb-8 h-10 w-10" />

            <h3 className="text-2xl font-semibold">
              Add Product
            </h3>

            <p className="mt-2 text-zinc-500">
              Create a new store item.
            </p>

            <ArrowRight className="mt-8 h-5 w-5 transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="/admin/projects"
            className="group rounded-3xl border border-zinc-200 bg-white p-8 transition hover:-translate-y-1"
          >
            <Plus className="mb-8 h-10 w-10" />

            <h3 className="text-2xl font-semibold">
              New Project
            </h3>

            <p className="mt-2 text-zinc-500">
              Showcase a completed repair.
            </p>

            <ArrowRight className="mt-8 h-5 w-5 transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="rounded-3xl border border-zinc-200 bg-white p-8">
        <h2 className="text-2xl font-semibold">
          Recent Activity
        </h2>

        <div className="mt-6 space-y-4">
          {activities.map((activity) => (
            <div
              key={activity}
              className="flex items-center justify-between rounded-xl border border-zinc-100 px-5 py-4"
            >
              <span className="text-zinc-700">
                {activity}
              </span>

              <span className="text-sm text-zinc-400">
                Today
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}