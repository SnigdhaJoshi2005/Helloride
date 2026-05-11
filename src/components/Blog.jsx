import React from 'react';
import Header from "./Header";
import { Link } from 'react-router-dom';
import './Blog.css'; 

export const blogPosts = [
  {
    id: 1,
    title: "How HelloRide is Changing Kathmandu's Commute",
    category: "News",
    date: "May 10, 2026",
    image: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500",
    excerpt: "Traffic in Kathmandu is getting worse, but HelloRide is finding new ways to get you there faster..."
  },
  {
    id: 2,
    title: "Safety First: 5 Tips for Every Ride",
    category: "Safety",
    date: "May 08, 2026",
    image: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=500",
    excerpt: "From helmet checks to app features, here is how we ensure every trip is a safe trip."
  },
  {
    id: 3,
    title: "Why Our Partners Love Driving with Us",
    category: "Partners",
    date: "May 05, 2026",
    image: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=500",
    excerpt: "Flexible hours and better earnings. Hear from the people behind the handlebars."
  },
   {
    id: 4,
    title: "Why Our Partners Love Driving with Us",
    category: "Partners",
    date: "May 05, 2026",
    image: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=500",
    excerpt: "Flexible hours and better earnings. Hear from the people behind the handlebars."
  },
  
   {
    id: 4,
    title: "Why Our Partners Love Driving with Us",
    category: "Partners",
    date: "May 05, 2026",
    image: "https://images.unsplash.com/photo-1444491741275-3747c53c99b4?w=500",
    excerpt: "Flexible hours and better earnings. Hear from the people behind the handlebars."
  },
  
  
];

const Blog = ({ preview = false, showBackButton = false }) => {
  const visiblePosts = preview ? blogPosts.slice(0, 2) : blogPosts;

  return (
    <section className={`blog-section ${preview ? 'blog-section-preview' : ''}`}>
      <div className="blog-container">
        {showBackButton && (
          <Link className="blog-back-button" to="/">
            Back
          </Link>
        )}

        <div className="blog-header-row">
          <div className="blog-header">
            <h2>Latest Updates</h2>
            <div className="title-underline"></div>
          </div>
          {preview && (
            <Link className="blog-view-more" to="/Blog">
              View All
            </Link>
          )}
        </div>

        <div className="blog-grid">
          {visiblePosts.map((post, index) => (
            <article key={`${post.id}-${index}`} className="blog-card">
              <div className="blog-image-wrapper">  
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              <Link to={`/blog/${post.id}`} className="read-more-btn">
  Read More
</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
