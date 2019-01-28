import React from 'react';

export default ({ onPress }) => (
    <a onClick={() => onPress()} style={styles.nextButton} />
);

const styles = ({
    nextButton: {
        height: '90px',
        width: '43px',
        opacity: 0.6,
        cursor: 'pointer',
        alignSelf: 'center',
        right: 0,
        backgroundColor: '#000',
        backgroundImage: `url(https://lh4.googleusercontent.com/-JN1IZLtuToI/UUoZnMG3C_I/AAAAAAAAAE8/SEbJ9nqXGnY/s226/sprite.png)`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '-167px 25px'
    }
});
