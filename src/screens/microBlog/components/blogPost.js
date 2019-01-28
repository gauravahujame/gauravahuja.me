import React from 'react';
import styles from './styles.css.js';

const BlogPost = ({ blog }) => (
    <div style={styles.blogEntry}>
        <h3 style={styles.entryTitle}>{blog.title}</h3>
        <div style={{ height: '3px', marginTop: '10px', width: '20%', backgroundColor: '#e1e1e1' }} />
        <img src={blog.image} style={styles.entryImage}></img>
        <p style={styles.entryText}>{blog.text}</p>
        <h4 style={styles.entryDate}>{blog.date}</h4>
    </div>
);

export default BlogPost;
