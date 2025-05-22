import { getAllBlogPosts } from "@/lib/blog";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = await getAllBlogPosts();
  const baseUrl = "https://taskin.studio";

  const rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:wfw="http://wellformedweb.org/CommentAPI/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
        <title>TaskIn Studio Blog</title>
        <link>${baseUrl}</link>
        <description>AI-powered tools for productivity and automation</description>
        <language>en</language>
        ${posts
          .map(
            (post) => `
            <item>
                <title>${post.title}</title>
                <link>${baseUrl}/blog/${post.slug}</link>
                <pubDate>${new Date(post.date).toUTCString()}</pubDate>
                <guid>${baseUrl}/blog/${post.slug}</guid>
                <description>${post.description}</description>
                <category>${post.category}</category>
                ${post.tags
                  .map((tag) => `<category>${tag}</category>`)
                  .join("")}
            </item>
        `
          )
          .join("")}
    </channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=1200, stale-while-revalidate=600",
    },
  });
}
