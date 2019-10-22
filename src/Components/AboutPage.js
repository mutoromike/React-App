import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <React.Fragment> 
            {/* React Fragment Wont render anything to the screen */}
                <h2> About </h2>
                <p> This application is built with React. </p>
            </React.Fragment>
        )
    }
}

export default AboutPage;