export default [
    {
        title: 'Deploying serverless on the AWS ecosystem',
        date: 'August 2, 2017',
        text: 'In this tutorial, I will walk you through the process of creating a serverless project and configuring it to be deployed on AWS. Tech stack glossary: AWS cloudformation, AWS lambda, Serveless Framework...',
        image: 'http://msoliman.me/wp-content/uploads/2018/02/aws.png',
    },
    {
        title: 'Observations about react lifecycle',
        date: 'September 3, 2017',
        text: 'The react lifecycle was originally designed to be flexible enough to accomodate a lot of use cases. But with this freedom comes the responsibility of using these lifecycle hooks wisely. I often find myself in the situtation where it seems obvious to use the lifecycle methods to maybe fix a re-render issue, or to add an animation that your cllient wants on an unusual event. I suggest, think twice code once. I hate to use the lifecycle methods a they provide a place for ugly code to be written :D. I have often found that rethinking your component breakdown structure, can help avoid an shouldComponentUpdate() call and so forth. I you need an event listener used repeatedly throughout your app, it is necessary to make sure you release the listener at componentWillUnmount, this could be avoided with a listener at root component. I hope you get the idea, avoid using lifecycle unless very necessary. Cheers!',
        image: 'https://blog.algolia.com/wp-content/uploads/2015/11/React_illo_final_720x400.png',
    },
    {
        title: 'You’re Missing Out on a Better Mac Terminal Experience',
        date: 'February 3, 2018',
        text: `Mac command line apps, plugins, tweaks, and tips to make your terminal exactly what you want it to be: functional, minimal, aesthetic, or all of the above- everyone will find something here.
        When I left the world of Linux and made the full-time switch to OS X a little over a year ago, what I missed most was the robust community and plethora of options surrounding customizations, tweaks, and personalizations of the operating system and workstation. What follows is a guide outlining the quest to build my perfect OS X shell — a command line experience both functional and beautiful, without sacrificing one for the other. I hope my footsteps will save some likeminded travelers some time and frustration on their journey towards a perfect terminal experience.`,
        image: 'https://cdn-images-1.medium.com/max/2600/1*7NEV9zL2zFt9QgUwZ3p8Kw.png',
    },
    {
        title: 'Revisiting React Testing in 2019',
        date: 'April 21, 2018',
        text: `This guide will explain step-by-step how to test react-apollo code. The following examples use the Jest testing framework, but most concepts should be reusable with other libraries. These examples aim to use as simple of a toolset as possible, so React’s test renderer will be used in place of React-specific tools like Enzyme and react-testing-library.`,
        image: 'https://cdn-images-1.medium.com/max/1600/1*8M8eNLyZCkFXCwnCog_zsg.jpeg',
    }
];
