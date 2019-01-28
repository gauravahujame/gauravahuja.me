import React from 'react';
import Grid from '@material-ui/core/Grid';
import { SocialIcon, SocialBar, NavControl, TypedComponent } from '../../components';

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
          <TypedComponent leadingText="I build" changingTexts={['cool websites.', 'mobile apps.', 'the matrix.']} />
          <p style={styles.introDescription}>
            {this.state.description}
          </p>
          <SocialBar animated={false}/>
        </div>
        <NavControl />
      </Grid>
    );
  }
}

export default IntroScreen;
