
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData';
import { Blog } from '../types';

const BlogDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Blog | null | undefined>(undefined);

  useEffect(() => {
    // Simulate fetching data
    const foundPost = blogData.find(p => p.slug === slug);
    setPost(foundPost);
    window.scrollTo(0, 0);
  }, [slug]);

  if (post === undefined) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold">Loading post...</h1>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <p className="mt-4 text-gray-600">Sorry, we couldn't find the blog post you're looking for.</p>
        <Link to="/blog" className="mt-8 inline-block px-8 py-3 text-base font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">{post.title}</h1>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <img className="h-12 w-12 rounded-full" src={post.author_avatar} alt={post.author_name} />
              </div>
              <div className="ml-4">
                <p className="text-base font-medium text-gray-900">{post.author_name}</p>
                <time dateTime={post.published_date} className="text-sm text-gray-500">
                  {new Date(post.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
              </div>
            </div>
          </header>

          <div className="aspect-w-16 aspect-h-9 mb-8">
            <img 
              src={post.main_image} 
              alt={post.title} 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          <div 
            className="prose prose-lg max-w-none" 
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 border-t border-gray-200 pt-8 text-center">
            <Link to="/blog" className="text-blue-600 hover:text-blue-800 font-semibold">
              &larr; Back to all posts
            </Link>
          </div>

        </article>
      </div>
      <style>{`
        .prose h3 {
            font-size: 1.5em;
            font-weight: 700;
            margin-top: 1.5em;
            margin-bottom: 0.5em;
        }
        .prose p {
            margin-bottom: 1.25em;
            line-height: 1.75;
        }
        .prose ul, .prose ol {
            margin-left: 1.5em;
            margin-bottom: 1.25em;
        }
        .prose li {
            margin-bottom: 0.5em;
        }
        .prose strong {
            font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default BlogDetailPage;
