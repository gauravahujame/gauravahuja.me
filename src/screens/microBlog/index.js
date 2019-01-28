import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './styles.css.js';
import NextButton from './components/nextButton.js';
import PrevButton from './components/prevButton.js';
import BlogGrid from './components/blogGrid';
import blogEntries from '../../data/blogEntries';

class MicroBlogScreen extends React.Component {
  constructor(props) {
    super(props);
    this.incrementPage = this.incrementPage.bind(this);
    this.decrementPage = this.decrementPage.bind(this);
    this.state = {
        currentPage: 1,
        itemsPerPage: 2,
        animType: 'enterRight',
    }
  }

  incrementPage() {
    this.setState({
      animType: 'enterRight',
      currentPage: this.state.currentPage + this.state.itemsPerPage,
    }); 
  }

  decrementPage() {
    this.setState({
      animType: 'enterLeft',
      currentPage: this.state.currentPage - this.state.itemsPerPage,
    });
  }

  render() {
    const { currentPage, animType } = this.state;
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
            <BlogGrid key={currentPage} posts={currentPosts} animType={animType} />
          {currentPage < blogEntries.length-1 && (
            <NextButton onPress={() => this.incrementPage()} />
          )}
      </Grid>
    );
  }
}

export default MicroBlogScreen;
