import { BlogCard } from "@/components/blog/BlogCard";
import { CategoryFilter } from "@/components/blog/CategoryFilter";
import { Pagination } from "@/components/blog/Pagination";
import { SearchBar } from "@/components/blog/SearchBar";
import { Metadata } from "next";
import { getAllBlogPosts, getCategories } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — TaskIn Studio",
  description:
    "Read our latest articles about AI tools, productivity, and technology.",
  keywords: [
    "AI tools",
    "productivity",
    "technology",
    "tutorials",
    "tech insights",
    "product updates",
  ],
  openGraph: {
    title: "Blog — TaskIn Studio",
    description:
      "Read our latest articles about AI tools, productivity, and technology.",
    type: "website",
    images: [
      {
        url: "/taskin-logo.png", // Update this with your actual OG image path
        width: 1200,
        height: 630,
        alt: "TaskIn Studio Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — TaskIn Studio",
    description:
      "Read our latest articles about AI tools, productivity, and technology.",
    images: ["/taskin-logo.png"], // Update this with your actual OG image path
  },
  alternates: {
    canonical: "https://taskin.studio/blog",
    types: {
      "application/rss+xml": "https://taskin.studio/blog/feed.xml",
    },
  },
};

const ITEMS_PER_PAGE = 9;

interface Props {
  searchParams: {
    category?: string;
    page?: string;
    q?: string;
  };
}

export default async function BlogPage({ searchParams }: Props) {
  const params = await Promise.resolve(searchParams);
  const query = params.q;
  const category = params.category;
  const page = params.page;

  try {
    const [posts, categories] = await Promise.all([
      getAllBlogPosts(),
      getCategories(),
    ]);

    // Filter posts by search query
    let filteredPosts = posts;
    if (query) {
      const searchQuery = query.toLowerCase();
      filteredPosts = posts.filter((post) => {
        const searchableContent =
          `${post.title} ${post.description} ${post.content}`.toLowerCase();
        return searchableContent.includes(searchQuery);
      });
    }

    // Filter posts by category if selected
    if (category) {
      filteredPosts = filteredPosts.filter(
        (post) => post.category === category
      );
    }

    // Get featured post
    const featuredPost = filteredPosts.find((post) => post.featured);
    const regularPosts = filteredPosts.filter((post) => !post.featured);

    // Calculate pagination
    const currentPage = Number(page) || 1;
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    const paginatedPosts = regularPosts.slice(startIndex, endIndex);

    // Generate JSON-LD for blog listing
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: "TaskIn Studio Blog",
      description:
        "Read our latest articles about AI tools, productivity, and technology.",
      url: "https://taskin.studio/blog",
      publisher: {
        "@type": "Organization",
        name: "TaskIn Studio",
        logo: {
          "@type": "ImageObject",
          url: "/logo.png", // Update with your actual logo path
        },
      },
      blogPosts: paginatedPosts.map((post) => ({
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: post.image,
        datePublished: post.date,
        author: {
          "@type": "Person",
          name: post.author,
        },
        url: `https://taskin.studio/blog/${post.slug}`,
      })),
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <div className="container mx-auto px-4 py-12">
          <header className="mb-12">
            <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
              Blog
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Insights, tutorials, and updates from the TaskIn Studio team
            </p>
          </header>

          {/* Search */}
          <SearchBar />

          {/* Categories */}
          <CategoryFilter categories={categories} activeCategory={category} />

          {/* Featured Post */}
          {featuredPost && currentPage === 1 && (
            <section className="mb-16">
              <h2 className="mb-6 text-2xl font-semibold text-gray-900 dark:text-gray-100">
                Featured Post
              </h2>
              <BlogCard post={featuredPost} />
            </section>
          )}

          {/* Regular Posts */}
          {paginatedPosts.length > 0 ? (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {paginatedPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
              <Pagination
                totalItems={regularPosts.length}
                itemsPerPage={ITEMS_PER_PAGE}
                currentPage={currentPage}
              />
            </>
          ) : (
            <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
              {query
                ? `No posts found matching "${query}"`
                : "No posts found in this category."}
            </div>
          )}
        </div>
      </>
    );
  } catch (error) {
    console.error("Error loading blog posts:", error);
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
          Blog
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Loading blog posts...
        </p>
      </div>
    );
  }
}
