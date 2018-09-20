import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default class SocialIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0.5
        }
        this.selectIcon = this.selectIcon.bind(this);
    }

    selectIcon() {
        switch(this.props.type){
            case 'facebook': return faFacebook;
            case 'linkedin': return faLinkedin;
            case 'github': return faGithub;
        }
    }

    render() {
        return (
            <a href={this.props.link}>
                <FontAwesomeIcon
                    icon={this.selectIcon()}
                    color="white"
                    size="2x"
                    onMouseEnter={() => this.setState({ opacity: 1.0 })}
                    onMouseLeave={() => this.setState({ opacity: 0.5 })}
                    style={{ padding: '10px', margin: '10px', opacity: this.state.opacity }} />
            </a>
        )
    }
}