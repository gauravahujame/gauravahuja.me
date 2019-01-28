import React from 'react';
import posed from 'react-pose';
import BlogPost from './blogPost';

const AnimateEnterRight = posed.div({
    enterLeft: { x: -200 },
    enterRight: { x: 200 },
    visible: { x: 50, transition: { duration: 1000, ease: 'backOut' } },
});

export default ({ posts, animType }) => (
    <AnimateEnterRight initialPose={animType} pose="visible" style={{ display: 'flex', flex: 1, flexDirection: 'row', justifyContent: 'center', paddingRight: '100px', paddingLeft: '100px' }}>
        {posts.map(blog => <BlogPost blog={blog} />)}
    </AnimateEnterRight>
);
