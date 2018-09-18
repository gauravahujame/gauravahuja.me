import React, { Component } from 'react';
import IntroScreen from './screens/intro';
import WorkScreen from './screens/work';

class App extends Component {
  render() {
    return (
      <div>
        <IntroScreen />
        {/* <WorkScreen /> */}
      </div>
    );
  }
}

export default App;
