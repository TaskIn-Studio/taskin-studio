"use client";

import { useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";

interface CategoryFilterProps {
  categories: string[];
  activeCategory?: string;
}

export function CategoryFilter({
  categories,
  activeCategory,
}: CategoryFilterProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (category: string | null) => {
      const params = new URLSearchParams(searchParams.toString());

      if (category) {
        params.set("category", category);
      } else {
        params.delete("category");
      }

      return params.toString();
    },
    [searchParams]
  );

  const handleCategoryClick = (category: string | null) => {
    const query = createQueryString(category);
    router.push(`/blog${query ? `?${query}` : ""}`);
  };

  return (
    <nav className="mb-12 overflow-x-auto">
      <ul className="flex space-x-4">
        <li>
          <button
            onClick={() => handleCategoryClick(null)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              !activeCategory
                ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100"
                : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
            }`}
          >
            All
          </button>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <button
              onClick={() => handleCategoryClick(category)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeCategory === category
                  ? "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100"
                  : "text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              }`}
            >
              {category}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
