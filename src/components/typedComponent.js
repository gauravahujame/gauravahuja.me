import React,{ Component } from 'react';
import Typed from 'react-typed';

export default ({ leadingText, followingText, changingTexts}) => (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
        <h1 style={styles.staticText}>{leadingText}</h1>
        <Typed 
            strings={changingTexts} 
            typeSpeed={40}
            backSpeed={50}
            style={styles.dynamicText}
            loop />
        <h1 style={styles.staticText}>{followingText}</h1>
    </div>
);

const styles = {
    staticText: {
        color: '#eef0f1',
        fontWeight: 700,
        fontSize: '1.6em',
        textAlign: 'center',
        marginBottom: '20px',
    },
    dynamicText: {
        color: '#eef0f1',
        fontWeight: 700,
        fontSize: '1.6em',
        textAlign: 'center',
        marginBottom: '20px',
        paddingLeft: '8px',
        paddingRight: '10px',
    },
}
