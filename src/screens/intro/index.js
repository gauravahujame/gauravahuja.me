import React from 'react';
import Grid from '@material-ui/core/Grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

import styles from './styles.css.js';

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: `I am a fullstack JS developer with a heartfelt inclination towards beautiful design.\nI love to build software soutions around everyday problems.`,
      name: 'Gaurav Ahuja',
    }
  }

  render() {
    return (
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        style={styles.screen}>
        <div style={{ display: 'flex', flex: 1, flexDirection: 'column', fontFamily: 'Raleway', margin: '25px', alignItems: 'center', justifyContent: 'center' }}>
          <img src={require('./gaurav.png')}
            style={{ marginBottom: '20px', width: '100px', height: '100px', borderRadius: 200, border: '3px solid white' }} />
          <h1 style={styles.introName}>{`Hello, my name is ${this.state.name}.`}</h1>
          <p style={styles.introDescription}>
            {this.state.description}
          </p>
          <div style={{ padding: '40px' }}>
            <a href="https://www.facebook.com/gauravahujame">
              <FontAwesomeIcon icon={faFacebook} color="white" size="2x" style={{ padding: '10px', margin: '10px' }} />
            </a>
            <a href="https://www.linkedin.com/in/gauravahujame">
              <FontAwesomeIcon icon={faLinkedin} color="white" size="2x" style={{ padding: '10px', margin: '10px' }} />
            </a>
            <a href="https://github.com/gauravahujame">
              <FontAwesomeIcon icon={faGithub} color="white" size="2x" style={{ padding: '10px', margin: '10px' }} />
            </a>
          </div>
        </div>
      </Grid>
    );
  }
}

export default IntroScreen;
