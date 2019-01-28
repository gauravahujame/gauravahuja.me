import React from 'react';
import posed from 'react-pose';

import SocialIcon from './socialIcon';

export default class SocialBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { animated = true } = this.props;

        const Animated = posed.div({
            hidden: { y: 100 },
            visible: { y: -50, transition: { duration: 1000, ease: 'backOut' } },
        });
        return (
            <Animated initialPose={animated && "hidden"} pose={animated && "visible"}>
                <div style={{ padding: '40px', flexDirection: 'row', display: 'flex' }}>
                    <SocialIcon type="facebook" link="https://www.facebook.com/gauravahujame" />
                    <SocialIcon type="linkedin" link="https://www.linkedin.com/in/gauravahujame" />
                    <SocialIcon type="github" link="https://github.com/gauravahujame" />
                </div>
            </Animated>
        );
    }
}