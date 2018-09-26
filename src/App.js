import React, { Component } from 'react';
import IntroScreen from './screens/intro';
import WorkScreen from './screens/work';
import BlogScreen from './screens/blog';

class App extends Component {
  render() {
    return (
      <div>
        <IntroScreen />
        <BlogScreen />
        {/* <WorkScreen /> */}
      </div>
    );
  }
}

export default App;
