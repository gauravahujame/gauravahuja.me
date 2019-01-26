import React from 'react';
import styles from './styles.css.js';

const BlogPost = ({ blog }) => (
    <div style={styles.blogEntry}>
        <h4 style={styles.entryDate}>{blog.date}</h4>
        <h3 style={styles.entryTitle}>{blog.title}</h3>
        <img src={blog.image} style={styles.entryImage}></img>
        <p style={styles.entryText}>{blog.text}</p>
    </div>
);

export default BlogPost;
