import React from 'react';

interface Post {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
  slug: string;
}

interface BlogPostListProps {
  posts?: Post[];
  baseUrl?: string;
}

const BlogPostList = ({ 
  posts = [], 
  baseUrl = '/blog' 
}: BlogPostListProps) => {
  // If posts is null/undefined, use empty array
  const safePosts = posts || [];
  
  if (safePosts.length === 0) {
    return (
      <div className="p-6 text-center text-gray-500">
        No posts available
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {safePosts.map((post) => (
        <div 
          key={post.id} 
          className="p-6 border rounded-lg hover:shadow-lg transition-shadow duration-300 bg-white"
        >
          <h2 className="text-xl font-semibold text-gray-900">
            {post.title}
          </h2>
          
          <div className="mt-2 text-sm text-gray-600">
            {`By ${post.author} • ${new Date(post.date).toLocaleDateString()}`}
          </div>
          
          <a
            href={`${baseUrl}/${post.slug}`}
            className="text-blue-500 hover:text-blue-700 mt-4 inline-flex items-center group"
          >
            Read more
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      ))}
    </div>
  );
};

// Add default example posts for development/preview
const defaultPosts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with DevOps',
    content: 'Learn the basics of DevOps and cloud technologies...',
    date: '2025-01-13',
    author: 'John Doe',
    slug: 'getting-started-with-devops'
  },
  {
    id: '2',
    title: 'Setting Up Your Development Environment',
    content: 'A complete guide to installing VS Code, Git, and Terraform...',
    date: '2025-01-14',
    author: 'Jane Smith',
    slug: 'dev-environment-setup'
  }
];

// Export the component with default props for preview
export default function PreviewBlogPostList() {
  return <BlogPostList posts={defaultPosts} />;
}