import Link from "next/link";

export const tools = [
  {
    name: "Currency Converter",
    description: "Convert currencies with real-time exchange rates",
    icon: "💱",
    url: "https://converter.taskin.studio",
  },
  {
    name: "Content Creator",
    description: "Generate engaging content with AI assistance",
    icon: "✍️",
    url: "https://creator.taskin.studio",
  },
  {
    name: "VeoVerse",
    description: "Generate short videos with google's veo models",
    icon: "📺",
    url: "https://veoverse.taskin.studio"
  }
  // Add more tools as they become available
];

export const metadata = {
  title: "Tools — TaskIn Studio",
  description:
    "Discover our suite of AI-powered tools designed to boost your productivity.",
};

export default function ToolsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-gray-100">
        Our Tools
      </h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <Link
            key={tool.name}
            href={tool.url}
            className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="mb-4 text-4xl">{tool.icon}</div>
            <h2 className="mb-2 text-xl font-semibold text-gray-900 group-hover:text-purple-600 dark:text-gray-100 dark:group-hover:text-purple-400">
              {tool.name}
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {tool.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
