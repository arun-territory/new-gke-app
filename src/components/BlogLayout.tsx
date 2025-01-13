// components/BlogLayout.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface BlogLayoutProps {
  title: string;
  content: string;
  date: string;
  author: string;
}

export function BlogLayout({ title, content, date, author }: BlogLayoutProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="prose lg:prose-xl"
      >
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="text-gray-600 mb-8">
          <span>{date}</span> • <span>{author}</span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </motion.article>
    </div>
  );
}