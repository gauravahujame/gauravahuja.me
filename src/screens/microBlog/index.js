import React from 'react';
import Grid from '@material-ui/core/Grid';
import BlogPost from './components/blogPost';
import styles from './styles.css.js';
import NextButton from './components/nextButton.js';

class MicroBlogScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        blogEntries: [
            {
                title: 'Deploying serverless on the AWS ecosystem',
                date: 'August 2, 2017',
                text: 'In this tutorial, I will walk you through the process of creating a serverless project and configuring it to be deployed on AWS. Tech stack glossary: AWS cloudformation, AWS lambda, Serveless Framework...',
                image: 'http://msoliman.me/wp-content/uploads/2018/02/aws.png',
            },
            {
                title: 'Observations about react lifecycle',
                date: 'September 3, 2017',
                text: 'The react lifecycle was originally designed to be flexible enough to accomodate a lot of use cases. But with this freedom comes the responsibility of using these lifecycle hooks wisely. I often find myself in the situtation where it seems obvious to use the lifecycle methods to maybe fix a re-render issue, or to add an animation that your cllient wants on an unusual event. I suggest, think twice code once. I hate to use the lifecycle methods a they provide a place for ugly code to be written :D. I have often found that rethinking your component breakdown structure, can help avoid an shouldComponentUpdate() call and so forth. I you need an event listener used repeatedly throughout your app, it is necessary to make sure you release the listener at componentWillUnmount, this could be avoided with a listener at root component. I hope you get the idea, avoid using lifecycle unless very necessary. Cheers!',
                image: 'https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png',
              },
        ]
    }
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        style={styles.screen}>
          <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', paddingRight: '100px', paddingLeft: '100px' }}>
            {this.state.blogEntries.map(blog => <BlogPost blog={blog} />)}
          </div>
          <NextButton />
      </Grid>
    );
  }
}

export default MicroBlogScreen;
