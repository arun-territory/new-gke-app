import React, { useState, useEffect } from 'react';

interface BlogPost {
  name: string;
  download_url: string;
  content?: string;
}

// Basic Markdown renderer component
const MarkdownRenderer: React.FC<{ content: string }> = ({ content }) => {
  const renderMarkdown = (text: string) => {
    // Split content into lines
    const lines = text.split('\n');
    
    return lines.map((line, index) => {
      // Headers
      if (line.startsWith('# ')) {
        return <h1 key={index} className="text-4xl font-bold my-4">{line.slice(2)}</h1>;
      }
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-3xl font-bold my-4">{line.slice(3)}</h2>;
      }
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-bold my-3">{line.slice(4)}</h3>;
      }

      // Code blocks
      if (line.startsWith('```')) {
        return <pre key={index} className="bg-gray-100 p-4 rounded my-4 overflow-x-auto"><code>{line.slice(3)}</code></pre>;
      }

      // Lists
      if (line.startsWith('- ')) {
        return <li key={index} className="ml-4">{line.slice(2)}</li>;
      }
      if (line.match(/^\d+\. /)) {
        return <li key={index} className="ml-4">{line.slice(line.indexOf(' ') + 1)}</li>;
      }

      // Bold text
      const boldText = line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
      
      // Italics
      const italicText = boldText.replace(/\*(.*?)\*/g, '<em>$1</em>');

      // Links
      const linkedText = italicText.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-blue-500 hover:text-blue-700">$1</a>'
      );

      // Empty lines become paragraphs
      if (line.trim() === '') {
        return <br key={index} />;
      }

      // Regular paragraphs
      return (
        <p
          key={index}
          className="my-2"
          dangerouslySetInnerHTML={{ __html: linkedText }}
        />
      );
    });
  };

  return <div className="markdown-content">{renderMarkdown(content)}</div>;
};

export default function BlogViewer() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/repos/arun-territory/blog-content/contents/content/blog'
        );
        if (!response.ok) throw new Error('Failed to fetch blog posts');
        const data = await response.json();
        setPosts(data.filter((file: BlogPost) => file.name.endsWith('.md')));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const fetchPostContent = async (post: BlogPost) => {
    try {
      setLoading(true);
      const response = await fetch(post.download_url);
      if (!response.ok) throw new Error('Failed to fetch post content');
      const content = await response.text();
      setSelectedPost({ ...post, content });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-center text-gray-600">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto p-6">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {selectedPost ? (
        <div className="space-y-6">
          <button
            onClick={() => setSelectedPost(null)}
            className="mb-4 text-blue-500 hover:text-blue-700 flex items-center gap-2"
          >
            ← Back to posts
          </button>
          <article className="max-w-none">
            <h1 className="text-3xl font-bold mb-6">
              {selectedPost.name.replace('.md', '').replace(/-/g, ' ')}
            </h1>
            {selectedPost.content && (
              <MarkdownRenderer content={selectedPost.content} />
            )}
          </article>
        </div>
      ) : (
        <div className="space-y-6">
          <h1 className="text-3xl font-bold mb-8">Blog Posts</h1>
          {posts.map((post) => (
            <div
              key={post.name}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => fetchPostContent(post)}
            >
              <h2 className="text-xl font-semibold">
                {post.name.replace('.md', '').replace(/-/g, ' ')}
              </h2>
              <div className="text-blue-500 hover:text-blue-700 mt-4 inline-flex items-center gap-2">
                Read more →
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}