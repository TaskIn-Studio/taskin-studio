import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  alternates: {
    types: {
      "application/rss+xml": [
        {
          url: "/blog/feed.xml",
          title: "Taskin Studio Blog RSS Feed",
        },
      ],
    },
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex justify-end p-4">
        <Link
          href="/blog/feed.xml"
          className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-orange-500"
          >
            <path d="M4 11a9 9 0 0 1 9 9" />
            <path d="M4 4a16 16 0 0 1 16 16" />
            <circle cx="5" cy="19" r="1" />
          </svg>
          RSS Feed
        </Link>
      </div>
      {children}
    </div>
  );
}
