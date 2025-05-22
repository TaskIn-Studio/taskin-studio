import { getAllBlogPosts } from '@/lib/blog';
import { BlogCard } from '@/components/blog/BlogCard';

export const metadata = {
    title: 'Blog — Taskin Studio',
    description: 'Read our latest articles about AI tools, productivity, and technology.',
};

export default async function BlogPage() {
    const posts = await getAllBlogPosts();

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
                Blog
            </h1>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {posts.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </div>
    );
} 