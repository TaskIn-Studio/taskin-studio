"use client";

import { useState, useEffect } from "react";

interface SaveButtonProps {
  postId: string;
  title: string;
}

export function SaveButton({ postId, title }: SaveButtonProps) {
  const [isSaved, setIsSaved] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Check if post is saved in localStorage
    const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "{}");
    setIsSaved(!!savedPosts[postId]);
  }, [postId]);

  const handleSave = () => {
    try {
      const savedPosts = JSON.parse(localStorage.getItem("savedPosts") || "{}");

      if (isSaved) {
        // Remove from saved posts
        delete savedPosts[postId];
      } else {
        // Add to saved posts
        savedPosts[postId] = {
          title,
          savedAt: new Date().toISOString(),
        };
      }

      // Update localStorage
      localStorage.setItem("savedPosts", JSON.stringify(savedPosts));

      // Update state and show tooltip
      setIsSaved(!isSaved);
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 2000);
    } catch (error) {
      console.error("Error saving post:", error);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={handleSave}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={isSaved ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
        {isSaved ? "Saved" : "Save"}
      </button>
      {showTooltip && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-gray-900 px-2 py-1 text-xs text-white">
          {isSaved ? "Post saved!" : "Post removed!"}
        </div>
      )}
    </div>
  );
}
