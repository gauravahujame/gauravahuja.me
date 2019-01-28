import React from 'react';
import Grid from '@material-ui/core/Grid';
import BlogPost from './components/blogPost';
import styles from './styles.css.js';
import NextButton from './components/nextButton.js';
import PrevButton from './components/prevButton.js';
import blogEntries from '../../data/blogEntries';

class MicroBlogScreen extends React.Component {
  constructor(props) {
    super(props);
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.state = {
        currentPage: 1,
        itemsPerPage: 2,
    }
  }

  incrementPage() {
    this.setState({
      currentPage: this.state.currentPage + this.state.itemsPerPage,
    }); 
  }

  decrementPage() {
    this.setState({
      currentPage: this.state.currentPage - this.state.itemsPerPage,
    });
  }

  render() {
    const { currentPage } = this.state;
    const currentPosts = blogEntries.slice(currentPage - 1, currentPage + 1);
    return (
      <Grid
        container
        direction="row"
        justify="center"
        style={styles.screen}>
          {currentPage > 1 && (
            <PrevButton onPress={() => this.decrementPage()} />
          )}
            <div style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', paddingRight: '100px', paddingLeft: '100px' }}>
              {currentPosts.map(blog => <BlogPost blog={blog} />)}
            </div>
          {currentPage < blogEntries.length-1 && (
            <NextButton onPress={() => this.incrementPage()} />
          )}
      </Grid>
    );
  }
}

export default MicroBlogScreen;
