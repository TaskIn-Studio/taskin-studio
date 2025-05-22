# Taskin Studio

A minimal, fast, and SEO-friendly blog-first site built with Next.js and TailwindCSS. The platform features AI-powered tools and generates revenue through Google AdSense.

## 🌟 Features

- **Blog System**
  - Markdown-based content management
  - SEO-optimized blog posts
  - Responsive blog cards and layouts
  - Syntax highlighting for code blocks

- **Tools Integration**
  - Currency Converter (converter.taskin.studio)
  - Content Creator (creator.taskin.studio)
  - Extensible tool system for future additions

- **Modern Design**
  - Clean, professional typography using Inter font
  - Dark mode support
  - Responsive layout
  - Purple accent color scheme (#a855f7)
  - Rounded corners and soft shadows

- **SEO & Performance**
  - Next.js App Router for optimal performance
  - Automatic sitemap generation
  - OpenGraph metadata support
  - Google AdSense integration
  - Optimized images and assets

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/taskin-studio.git
   cd taskin-studio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_SITE_URL=https://taskin.studio
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

The site will be available at `http://localhost:9002`.

## 📁 Project Structure

```
taskin-studio/
├── content/
│   └── blog/           # Blog posts in markdown
├── public/
│   └── blog/          # Blog images and assets
├── src/
│   ├── app/           # Next.js app router pages
│   ├── components/    # React components
│   ├── lib/          # Utility functions
│   └── styles/       # Global styles
└── package.json
```

## 📝 Blog Posts

Blog posts are written in Markdown and stored in the `content/blog` directory. Each post should include frontmatter with the following fields:

```markdown
---
title: 'Post Title'
description: 'Post description'
date: 'YYYY-MM-DD'
author: 'Author Name'
image: '/blog/image.jpg'
---
```

## 🛠️ Development

### Adding a New Blog Post

1. Create a new markdown file in `content/blog/`
2. Add the required frontmatter
3. Write your content in markdown
4. Add any images to `public/blog/`

### Adding a New Tool

1. Add the tool details to the tools array in `src/app/tools/page.tsx`
2. Create the tool's subdomain (e.g., tool.taskin.studio)
3. Update the tools section on the homepage

### Building for Production

```bash
npm run build
```

This will:
- Build the Next.js application
- Generate the sitemap
- Optimize assets
- Create a production-ready bundle

## 🔧 Configuration

### Google AdSense

The site is configured to use Google AdSense. Update the AdComponent with your publisher ID:

```typescript
data-ad-client="ca-pub-YOUR_PUBLISHER_ID"
```

### SEO

Update the metadata in `src/app/layout.tsx` and individual pages to match your site's information.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Contact

For any questions or support, please contact:
- Email: support@taskin.studio
- Website: https://taskin.studio
