import React from 'react';
import styles from './styles.css.js';

class WorkScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="screen" style={styles.workScreen}>
        <div style={styles.heroContent}>
          <div>
          <h1 style={styles.screenTitle}>Work</h1>
          <h1 style={styles.screenSubtitle}>No project is too small.</h1>
          </div>
          <img src={require('./designergif.gif')}
            style={{ marginBottom: '20px', width: '50%' }} />
        </div>
      </div>
    );
  }
}

export default WorkScreen;
