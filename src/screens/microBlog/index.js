import React from 'react';
import Grid from '@material-ui/core/Grid';
import BlogPost from './components/blogPost';
import styles from './styles.css.js';

class MicroBlogScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        blogEntries: [
            {
                title: 'The Martian',
                date: 'August 2, 2017',
                text: 'Consisting of five crosses, four smaller crosses around a larger central cross, the Jerusalem Cross is a heraldry symbol for the Kingdom of Jerusalem and arose around the 11th century. Appearing as gold crosses atop of a silver shield, the Jerusalem Cross was not only displayed on the shields of Christian crusaders (sometimes red crosses), but it was also displayed on the arms of the King of Jerusalem and was flown as the cities flag. When Christ was crucified the Gospels claim Jesus endured five wounds, these famous “Five Wounds of Christ” are the basis for the symbolic meaning of the five crosses. Credited with the creation of the Jerusalem Cross, ',
            },
            {
                title: 'Becoming Steve Jobs',
                date: 'September 3, 2017',
                text: 'Chnoubis is a hybrid creature that is composed of the head of a lion, body of a serpent, and usually has seven rays emanating from around his head. Chnoubis is often associated with the Egyptian Gnostic Archon and demiurge, Yaldabaoth, and is believed to be related to the deity Abraxas. Chnoubis was mostly found on small coins, inscribed on gnostic gems, talismans made from precious stones, and was used as a medical amulet to protect from disease and infection; the earliest inscribings of Chnoubis date to around the first century. The lion head of Chnoubis is symbolic of enlightenment and represents his solar forces, the serpent body symbolizes the lower impulses and earthly desires, the seven rays around the head are symbolic of the seven visible planets, the seven days of the week, the seven visible colors, and the seven Greek vowels. Despite originally being seen as a protecting figure and defender against demonic energies, Chnoubis is now often associated with satanic and demonic forces due to misconceptions related to his serpentine body.',
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
          {this.state.blogEntries.map(blog => <BlogPost blog={blog} />)}
      </Grid>
    );
  }
}

export default MicroBlogScreen;
