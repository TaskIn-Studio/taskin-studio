import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    date: string;
    author: string;
    image: string;
    metaKeywords: string;
    content: string;
}

export async function getAllBlogPosts(): Promise<Omit<BlogPost, 'content'>[]> {
    const fileNames = fs.readdirSync(blogDirectory);
    const allPostsData = fileNames.map((fileName) => {
        const slug = fileName.replace(/\.md$/, '');
        const fullPath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug,
            ...(data as Omit<BlogPost, 'slug' | 'content'>),
        };
    });

    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost> {
    const fullPath = path.join(blogDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);
    const processedContent = await remark()
        .use(html)
        .process(content);

    return {
        slug,
        content: processedContent.toString(),
        ...(data as Omit<BlogPost, 'slug' | 'content'>),
    };
}

export async function getPostsByKeyword(keyword: string): Promise<Omit<BlogPost, 'content'>[]> {
    const posts = await getAllBlogPosts();
    return posts.filter((post) =>
        post.metaKeywords.toLowerCase().split(',').includes(keyword.toLowerCase())
    );
}

export async function getAllKeywords(): Promise<string[]> {
    const posts = await getAllBlogPosts();
    const keywords = new Set<string>();

    posts.forEach((post) => {
        const postKeywords = post.metaKeywords.toLowerCase().split(',');
        postKeywords.forEach((keyword) => {
            keywords.add(keyword.trim());
        });
    });

    return Array.from(keywords).sort();
} 