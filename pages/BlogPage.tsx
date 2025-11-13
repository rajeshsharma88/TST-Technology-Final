
import React from 'react';
import { blogData } from '../data/blogData';
import BlogCard from '../components/blog/BlogCard';

const BlogPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">From Our Blog</h1>
          <p className="mt-4 text-lg text-gray-600">
            Stay updated with the latest industry news, insights, and articles from our experts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map(post => (
            <BlogCard key={post.id} blog={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
