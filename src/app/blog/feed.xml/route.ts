import { getAllBlogPosts } from "@/lib/blog";
import RSS from "rss";

export async function GET() {
  const feed = new RSS({
    title: "TaskIn Studio Blog",
    description:
      "Read our latest articles about AI tools, productivity, and technology.",
    site_url: "https://taskin.studio",
    feed_url: "https://taskin.studio/blog/feed.xml",
    image_url: "https://taskin.studio/taskin-logo.png",
    language: "en",
    pubDate: new Date(),
    copyright: `All rights reserved ${new Date().getFullYear()}, TaskIn Studio`,
  });

  const posts = await getAllBlogPosts();

  posts.forEach((post) => {
    feed.item({
      title: post.title,
      description: post.description,
      url: `https://taskin.studio/blog/${post.slug}`,
      guid: post.slug,
      categories: [post.category],
      author: post.author,
      date: post.date,
      custom_elements: [
        { "content:encoded": post.htmlContent },
        { tags: post.tags.join(",") },
      ],
    });
  });

  return new Response(feed.xml({ indent: true }), {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "s-maxage=3600, stale-while-revalidate",
    },
  });
}
