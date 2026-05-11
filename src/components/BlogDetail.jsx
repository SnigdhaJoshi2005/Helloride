import React from 'react' ;
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from './Blog';
import './Blog.css';

const BlogDetail = () => {
    const { id } = useParams();
    const post = blogPosts.find((item) => item.id === parseInt(id));

    if (!post) {
        return <div className = "error-msg"> Post not Found</div>;
    }

    return (
        <article className="blog-detail-page">
            <div>
                <Link to = "/blog" className="back-link"> ← Back to Blogs </Link>

                <header className="detail-heade">
                    <span className="detail-category">{post.category}</span>
                    <h1>{post.title}</h1>
                    <p className="detail-date">Publish on {post.date}</p>
                </header>
                <img src={post.image} alt={post.title} className="detail-her-image" />

                <div className="detail-content">
                    <p className="lead-text">{post.excerpt}</p>
                    <p>
                        HelloRide is committed to providing the best transportation experience in Nepal. 
            In this article, we dive deeper into how our services are evolving to meet the 
            needs of our users and partners alike.
                    </p>

                    <h3>Why it Matters</h3>
                    <p>
                        Understanding the landscape of urban mobility is key to reducing traffic 
            and improving efficiency for everyone on the road.
                    </p>
                </div>
            </div>
        </article>
    );
       
    
};

export default BlogDetail;