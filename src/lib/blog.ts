import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";
import remarkGfm from "remark-gfm";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  category: string;
  readTime?: string;
  featured?: boolean;
  metaKeywords: string;
  content: string;
  htmlContent?: string;
}

async function processMarkdown(content: string): Promise<string> {
  const result = await remark().use(html).use(remarkGfm).process(content);
  return result.toString();
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  // Get all files in the blog directory
  const files = fs.readdirSync(BLOG_DIR);

  const posts = await Promise.all(
    files
      .filter((file) => file.endsWith(".md") && !file.startsWith("templates"))
      .map(async (file) => {
        const slug = file.replace(/\.md$/, "");
        const filePath = path.join(BLOG_DIR, file);
        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContent);
        const htmlContent = await processMarkdown(content);

        return {
          slug,
          title: data.title,
          description: data.description,
          date: data.date,
          author: data.author,
          image: data.image,
          tags: data.tags || [],
          category: data.category,
          readTime: data.readTime,
          featured: data.featured || false,
          metaKeywords: data.metaKeywords,
          content,
          htmlContent,
        };
      })
  );

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export async function getBlogPostBySlug(
  slug: string
): Promise<BlogPost | null> {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContent);
    const htmlContent = await processMarkdown(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author,
      image: data.image,
      tags: data.tags || [],
      category: data.category,
      readTime: data.readTime,
      featured: data.featured || false,
      metaKeywords: data.metaKeywords,
      content,
      htmlContent,
    };
  } catch (error) {
    return null;
  }
}

export async function getBlogPostsByCategory(
  category: string
): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.category === category);
}

export async function getBlogPostsByTag(tag: string): Promise<BlogPost[]> {
  const allPosts = await getAllBlogPosts();
  return allPosts.filter((post) => post.tags.includes(tag));
}

export async function getCategories(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  return Array.from(new Set(posts.map((post) => post.category)));
}

export async function getTags(): Promise<string[]> {
  const posts = await getAllBlogPosts();
  const allTags = posts.flatMap((post) => post.tags);
  return Array.from(new Set(allTags));
}
