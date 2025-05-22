import Link from "next/link";
import { getAllBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog/BlogCard";
import { AdComponent } from "@/components/AdComponent";

export const metadata = {
  title: "TaskIn Studio — Simple AI Tools for Builders",
  description:
    "Discover a suite of minimal AI-powered tools built to save time and boost productivity. Currency converter, content generators, and more.",
};

export default async function HomePage() {
  const posts = await getAllBlogPosts();
  const featuredPosts = posts.slice(0, 3);

  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-6 text-5xl font-bold text-gray-900 dark:text-gray-100 md:text-6xl">
          Tools that do{" "}
          <span className="text-purple-600 dark:text-purple-400">
            one thing
          </span>
          . <br /> Exceptionally well.
        </h1>
        <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 dark:text-gray-400">
          Discover a suite of minimal AI-powered tools built to save time,
          automate work, and unlock creativity.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/tools"
            className="rounded-full bg-purple-600 px-6 py-3 text-white transition-colors hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600"
          >
            Explore Tools
          </Link>
          <Link
            href="/blog"
            className="rounded-full border border-gray-300 px-6 py-3 text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800"
          >
            Read Blog
          </Link>
        </div>
      </section>

      {/* Featured Tools Section */}
      <section className="container mx-auto px-4">
        <h2 className="mb-8 text-3xl font-bold text-gray-900 dark:text-gray-100">
          Featured Tools
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Link
            href="https://converter.taskin.studio"
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="mb-4 text-4xl">💱</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
              Currency Converter
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Convert currencies with real-time exchange rates
            </p>
          </Link>
          <Link
            href="https://creator.taskin.studio"
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="mb-4 text-4xl">✍️</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
              Content Creator
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Generate engaging content with AI assistance
            </p>
          </Link>
          <Link
            href="/tools"
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="mb-4 text-4xl">🚀</div>
            <h3 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
              More Tools
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Explore our full suite of productivity tools
            </p>
          </Link>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="container mx-auto px-4 mb-8">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
            Latest from Blog
          </h2>
          <Link
            href="/blog"
            className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
          >
            View all posts →
          </Link>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
