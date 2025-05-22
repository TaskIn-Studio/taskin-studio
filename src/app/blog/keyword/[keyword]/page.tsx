import { getPostsByKeyword } from '@/lib/blog';
import { BlogCard } from '@/components/blog/BlogCard';
import { notFound } from 'next/navigation';

interface KeywordPageProps {
    params: {
        keyword: string;
    };
}

export async function generateMetadata({ params }: KeywordPageProps) {
    const keyword = decodeURIComponent(params.keyword);
    return {
        title: `Posts tagged with "${keyword}" — Taskin Studio Blog`,
        description: `Browse all blog posts tagged with "${keyword}" on Taskin Studio.`,
    };
}

export default async function KeywordPage({ params }: KeywordPageProps) {
    const keyword = decodeURIComponent(params.keyword);
    const posts = await getPostsByKeyword(keyword);

    if (posts.length === 0) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
                Posts tagged with "{keyword}"
            </h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
} 