import React, { Component } from 'react';
import { Card, CardActions, CardTitle, Button, CardMenu, CardText, IconButton } from 'react-mdl'


class Projects extends Component {
    render() {
        return (
            <div className="Projects" style={{position: 'fixed', margin: "5em"}}>
                <Card  shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle className="Card" style={{color: '#fff', height: '176px'}}>Pandam Tests</CardTitle>
                        <CardText >
                            Cypress test files for testing Pandams ui
                        </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/NavidMadani/pandam-tests" target="_blank">Github</Button>
                    </CardActions>
                    <CardMenu style={{color: '#fff'}}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            </div>
        )
    }
}

export default Projects;