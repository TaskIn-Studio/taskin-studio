import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { AdSense } from '@/components/AdSense';
import Image from 'next/image';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
    const slug = params?.slug;
    if (!slug) {
        return {
            title: 'Post Not Found',
            description: 'The requested blog post could not be found.',
        };
    }

    try {
        const post = await getBlogPostBySlug(slug);

        if (!post) {
            return {
                title: 'Post Not Found',
                description: 'The requested blog post could not be found.',
            };
        }

        return {
            title: post.title,
            description: post.description,
            keywords: post.metaKeywords,
            openGraph: {
                title: post.title,
                description: post.description,
                type: 'article',
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
                card: 'summary_large_image',
                title: post.title,
                description: post.description,
                images: [post.image],
            },
        };
    } catch (error) {
        console.error('Error generating metadata:', error);
        return {
            title: 'Error',
            description: 'An error occurred while loading the post.',
        };
    }
}

export async function generateStaticParams() {
    const posts = await getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const slug = params?.slug;
    if (!slug) {
        notFound();
    }

    try {
        const post = await getBlogPostBySlug(slug);

        if (!post) {
            notFound();
        }

        return (
            <article className="container mx-auto px-4 py-8 max-w-4xl">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                        <span className="mr-4">By {post.author}</span>
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                    </div>
                    {post.image && (
                        <div className="relative w-full h-64 mb-8">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-contain rounded-lg"
                                priority
                            />
                        </div>
                    )}
                </header>

                <div
                    className="prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className="mt-8">
                    <AdSense />
                </div>
            </article>
        );
    } catch (error) {
        console.error('Error loading blog post:', error);
        notFound();
    }
} 