import React from 'react';
import Header from "./Header";
import { Link } from 'react-router-dom';
import './Blog.css';
import b1 from "../assets/b1.png";
import b2 from "../assets/b2.png";
import b3 from "../assets/b3.png";

export const blogPosts = [
  {
    id: 1,
    title: "How HelloRide is Changing Kathmandu's Commute",
    category: "News",
    date: "May 10, 2026",
    image: b1,
    excerpt: "Traffic in Kathmandu is getting worse, but HelloRide is finding new ways to get you there faster..."
  },
  {
    id: 2,
    title: "Safety First: 5 Tips for Every Ride",
    category: "Safety",
    date: "May 08, 2026",
    image: b2,
    excerpt: "From helmet checks to app features, here is how we ensure every trip is a safe trip."
  },
  {
    id: 3,
    title: "Why Our Partners Love Driving with Us",
    category: "Partners",
    date: "May 05, 2026",
    image: b3,
    excerpt: "Flexible hours and better earnings. Hear from the people behind the handlebars."
  },
];

const Blog = ({ preview = false }) => {
  const visiblePosts = preview ? blogPosts.slice(0, 2) : blogPosts;

  return (
    <section className={`blog-section ${preview ? 'blog-section-preview' : ''}`}>
      <div className="blog-container">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
