import React from 'react'
import { Divider, Grid, Header, Icon, Label, Segment } from 'semantic-ui-react'

const Footer = () => {
    return (
            <div>
            
            <Grid divided='vertically' style={{marginTop: 5}}>
                <Grid.Row columns={2}>
                    <Grid.Column textAlign="right" verticalAlign="middle">
                        Lotto Combo © {new Date().getFullYear()}
                    </Grid.Column>
                    <Grid.Column>
                        <Icon size="big" name="user circle"></Icon>
                        Tae Hee Choi
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>






    )
}

export default Footer
