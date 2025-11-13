
import React from 'react';
import { Link } from 'react-router-dom';
import { Blog } from '../../types';

interface BlogCardProps {
  blog: Blog;
}

const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <Link to={`/blog/${blog.slug}`} className="group flex flex-col bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative aspect-w-16 aspect-h-9 overflow-hidden">
        <img
          src={blog.main_image}
          alt={blog.title}
          className="w-full h-full object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {blog.title}
        </h3>
        <p className="mt-3 text-sm text-gray-600 flex-grow">{blog.excerpt}</p>
        <div className="mt-6 flex items-center">
          <div className="flex-shrink-0">
            <img className="h-10 w-10 rounded-full" src={blog.author_avatar} alt={blog.author_name} />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">{blog.author_name}</p>
            <div className="flex space-x-1 text-sm text-gray-500">
              <time dateTime={blog.published_date}>{new Date(blog.published_date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</time>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
