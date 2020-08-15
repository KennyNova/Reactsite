import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{width: '100%', margin: 'auto'}}>
                
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img 
                            src="https://i.pinimg.com/564x/cc/8c/ea/cc8cea11db6fa7fb170387c0cf87c280.jpg"
                            alt="alt"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Portfolio</h1>

                        <hr/>
                        
                            <div className="social-links">
                                {/*Linkedin */}
                                <a href="https://www.linkedin.com/in/navid-madani/" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square"  aria-hidden="true"/>
                                </a>

                                {/*Github */}
                                <a href="https://github.com/NavidMadani" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-github-square"  aria-hidden="true"/>
                                </a>

                                {/*Youtube */}
                                <a href="https://www.youtube.com/channel/UCqUB7mPrIxDMMSVq2wU1bWQ?view_as=subscriber" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-youtube-square"  aria-hidden="true"/>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;