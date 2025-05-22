import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/blog';

interface BlogCardProps {
    post: Omit<BlogPost, 'content'>;
}

export function BlogCard({ post }: BlogCardProps) {
    return (
        <Link href={`/blog/${post.slug}`} className="group">
            <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900">
                <div className="relative h-48 w-full">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="p-6">
                    <h2 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
                        {post.title}
                    </h2>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                        {post.description}
                    </p>
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
                </div>
            </article>
        </Link>
    );
} 