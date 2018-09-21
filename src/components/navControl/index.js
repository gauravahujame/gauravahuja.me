import React from 'react';
import './styles.css';

export default class NavControl extends React.Component {
    render() {
        return (
            <div style={{ position: 'absolute', bottom: 10 }}>
                <div className="mouse">
                    <div className="scroll"></div>
                </div>
            </div>
        );
    }
}