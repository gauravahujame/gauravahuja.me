import React from 'react';
import Grid from '@material-ui/core/Grid';
import styles from './styles.css.js';

class IntroScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: `A fullstack JS developer with a heartfelt inclination towards beautiful design.\nI love to build software soutions around everyday problems.`,
      name: 'Gaurav Ahuja',
    }
  }

  render() {
    return (
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        style={{ display: 'flex', flex: 1, height: '100vh', backgroundColor: '#3a46a5' }}>
        
        <div style={{ fontFamily: 'Raleway' }}>
          <img src='https://media.licdn.com/dms/image/C5603AQHu0Vg78I7xpA/profile-displayphoto-shrink_100_100/0?e=1540425600&v=beta&t=4OHTqTNpwF41dqy4O242deIsfH4_ATe1upHqH1_q7h0'
            style={{ marginBottom: '20px', width: '100px', height: '100px', borderRadius: 200, border: '3px solid white' }} />
          <h1 style={styles.introHello}>Hello,</h1>
          <h1 style={styles.introName}>{`I'm ${this.state.name}`}</h1>
          <p style={styles.introDescription}>
            {this.state.description} <span className="resumeLink">Download my Resume</span>
          </p>
        </div>
        {/* <div style={styles.personalLinks}>
                <h1 style={styles.personalLink}>hello@gauravahuja.me</h1>
                <h1 style={styles.personalLink}>+91 8588885955</h1>
                <h1 style={styles.personalLink}>Facebook | Twitter | Linkedin</h1>
              </div> */}
      </Grid>
    );
  }
}

export default IntroScreen;
