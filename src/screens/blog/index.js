import React from 'react';
import styles from './styles.css.js';
import _ from 'lodash';

class BlogScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [
        {
          title: 'Google Cloud Functions goes GA: what it means for Serverless',
          subtitle: 'Serverless, Inc. has a Component available to use for Google Cloud Functions right now. The Serverless Framework has supported Google Cloud Functions for over a year now, and we are already moving to release an update to work with Google’s new APIs.',
          date: 'March 11, 2018',
        },
        {
          title: 'Deploying a Graphql service with AWS Lambda in under 15 mins.',
          subtitle: 'The graphql module makes it easy to rapidly create a GraphQL service that validates queries. We use GraphQL at Serverless.com to query our backend services, and we love how well it fits into the serverless paradigm.',
          date: 'June 05, 2018',          
        },
        {
          title: 'Next.js 7: A Framework for Server-Rendered React Apps',
          subtitle: 'Significant upgrades in performance, key dependency upgrades (to webpack 4 and Babel 7), an all new homepage, and more. Certainly worth learning if you want to take React server-side.',
          date: 'October 18, 2018',          
        },
        {
          title: 'Immutability in React and Redux: The Complete Guide ',
          subtitle: 'Learn about side effects and how to avoid them, how to use immutability with objects and arrays in Redux reducers, and an easy way to update state with Immer.',
          date: 'September 21, 2018',          
        },
      ]
    }
  }

  renderBlogTile({ title, subtitle, date }) {
    return (
      <div style={styles.blogTile}>
        <h1 style={styles.tileTitle}>{title}</h1>
        <h1 style={styles.tileDate}>{date}</h1>
        <div style={{ height: '25px' }} />
        <h1 style={styles.tileSubtitle}>{subtitle}</h1>
      </div> 
    );
  }

  render() {
    return (
      <div style={styles.blogScreen}>
        {this.state.blogs.map(blog => this.renderBlogTile(blog))}
      </div>
    );
  }
}

export default BlogScreen;
