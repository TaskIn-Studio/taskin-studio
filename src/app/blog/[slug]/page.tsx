import { getBlogPostBySlug, getAllBlogPosts } from '@/lib/blog';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
    const posts = await getAllBlogPosts();
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
    const post = await getBlogPostBySlug(params.slug);
    return {
        title: `${post.title} — Taskin Studio`,
        description: post.description,
        openGraph: {
            title: post.title,
            description: post.description,
            images: [post.image],
        },
    };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
    const post = await getBlogPostBySlug(params.slug).catch(() => notFound());

    return (
        <article className="container mx-auto px-4 py-12">
            <div className="mx-auto max-w-3xl">
                <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-2xl">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <header className="mb-8">
                    <h1 className="mb-4 text-4xl font-bold text-gray-900 dark:text-gray-100">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                        <span>{post.author}</span>
                        <time dateTime={post.date}>
                            {new Date(post.date).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}
                        </time>
                    </div>
                </header>
                <div
                    className="prose prose-purple dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />
            </div>
        </article>
    );
} 