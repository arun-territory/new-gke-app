import React, { useState, useEffect } from 'react';

// Define types for GitHub API response
interface GitHubFile {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  download_url: string;
}

export function BlogListing() {
  const [posts, setPosts] = useState<GitHubFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/arun-territory/blog-content/contents/content/blog'
        );
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const files: GitHubFile[] = await response.json();
        setPosts(files);
      } catch (err) {
        // Handle error with proper type checking
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-center">Loading blog posts...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.sha} className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold">
              {post.name.replace('.md', '').replace(/-/g, ' ')}
            </h2>
            <a 
              href={`/blog/${post.name.replace('.md', '')}`}
              className="text-blue-500 hover:text-blue-700 mt-4 inline-flex items-center gap-2"
            >
              Read more 
              <span>→</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogListing;