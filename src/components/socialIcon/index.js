import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import posed from 'react-pose';

export default class SocialIcon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity: 0.5
        }
        this.selectIcon = this.selectIcon.bind(this);
    }

    selectIcon() {
        switch (this.props.type) {
            case 'facebook': return faFacebook;
            case 'linkedin': return faLinkedin;
            case 'github': return faGithub;
        }
    }

    render() {
        const Animated = posed.div({
            hoverable: true,
            init: { opacity: 0.5, scale: 1.0 },
            hover: { opacity: 1.0, scale: 1.1 }
        });
        return (
            <Animated>
                <a href={this.props.link} target="_blank">
                    <FontAwesomeIcon
                        icon={this.selectIcon()}
                        color="white"
                        size="2x"
                        style={{ padding: '10px', margin: '10px' }} />
                </a>
            </Animated>
        )
    }
}