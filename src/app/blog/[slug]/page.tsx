import { getBlogPostBySlug } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import { format } from "date-fns";
import { Metadata } from "next";
import { ShareButton } from "@/components/blog/ShareButton";
import { SaveButton } from "@/components/blog/SaveButton";

interface Props {
    params: {
        slug: string;
    };
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
        return {
            title: "Post Not Found - TaskIn Studio",
            description: "The requested blog post could not be found.",
        };
    }

    return {
        title: `${post.title} - TaskIn Studio Blog`,
        description: post.description,
        keywords: post.metaKeywords,
        authors: [{ name: post.author }],
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            publishedTime: post.date,
            authors: [post.author],
            images: [
                {
                    url: post.image,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: Props) {
    const post = await getBlogPostBySlug(params.slug);

    if (!post) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        image: post.image,
        datePublished: post.date,
        author: {
            "@type": "Person",
            name: post.author,
        },
        publisher: {
            "@type": "Organization",
            name: "TaskIn Studio",
            logo: {
                "@type": "ImageObject",
                url: "/logo.png", // Update this with your actual logo path
            },
        },
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article className="container mx-auto px-4 py-12">
                {/* Header */}
                <header className="mb-8 text-center">
                    <div className="mb-4 flex items-center justify-center space-x-2 text-sm text-gray-600 dark:text-gray-400">
                        <span>{format(new Date(post.date), "MMMM d, yyyy")}</span>
                        <span>•</span>
                        <span>{post.readTime || "5 min read"}</span>
                        <span>•</span>
                        <span>{post.category}</span>
                    </div>
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
                        {post.title}
                    </h1>
                    <p className="mb-8 text-xl text-gray-600 dark:text-gray-400">
                        {post.description}
                    </p>
                    <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-lg">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-contain"
                            priority
                        />
                    </div>
                </header>

                {/* Content */}
                <div
                    className="prose prose-lg mx-auto dark:prose-invert"
                    dangerouslySetInnerHTML={{ __html: post.htmlContent || "" }}
                />

                {/* Footer */}
                <footer className="mx-auto mt-12 max-w-2xl border-t pt-8">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                    <div className="mt-8 flex items-center justify-between">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                                About the author
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400">{post.author}</p>
                        </div>
                        <div className="flex space-x-4">
                            <ShareButton
                                url={`https://taskin.studio/blog/${post.slug}`}
                                title={post.title}
                            />
                            <SaveButton postId={post.slug} title={post.title} />
                        </div>
                    </div>
                </footer>
            </article>
        </>
    );
}
