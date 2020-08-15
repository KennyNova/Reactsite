import React, { Component } from 'react';
import { Card, CardActions, CardTitle, Button, CardMenu, CardText, IconButton } from 'react-mdl'


class Projects extends Component {
    render() {
        return (
            <div style={{position: 'fixed', margin: "5em"}}>
                <Card shadow={0} style={{width:'512px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background:'url(https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1-1024x512.png) center / cover'}}>Pandam Tests</CardTitle>
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
                <Card  shadow={0} style={{width: '512px', margin: 'auto'}}>
                    <CardTitle className="Card" style={{color: '#fff', height: '176px', background:'url(https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1-1024x512.png) center / cover'}}>Cypress</CardTitle>
                        <CardText >
                            First time trying out Cypress
                        </CardText>
                    <CardActions border>
                        <Button colored href="https://github.com/NavidMadani/cypress" target="_blank">Github</Button>
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