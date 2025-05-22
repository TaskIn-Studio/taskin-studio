import Link from "next/link";
import Image from "next/image";
import { format } from "date-fns";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block overflow-hidden rounded-lg bg-white shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg dark:bg-gray-800"
    >
      {/* Image */}
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
        {/* Category Badge */}
        <div className="absolute left-4 top-4 rounded-full bg-purple-500 px-3 py-1 text-sm font-medium text-white">
          {post.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Metadata */}
        <div className="mb-2 flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
          <time dateTime={post.date}>
            {format(new Date(post.date), "MMM d, yyyy")}
          </time>
          <span>•</span>
          <span>{post.readTime || "5 min read"}</span>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-gray-100">
          {post.title}
        </h3>

        {/* Description */}
        <p className="mb-4 text-gray-600 line-clamp-2 dark:text-gray-400">
          {post.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs text-gray-700 dark:bg-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="text-xs text-gray-500 dark:text-gray-400">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Author */}
        <div className="mt-4 flex items-center">
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
              {post.author}
            </p>
          </div>
          <span className="text-purple-500 group-hover:translate-x-1 transition-transform duration-300">
            →
          </span>
        </div>
      </div>
    </Link>
  );
}
