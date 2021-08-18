import React from 'react'
import { Grid, Icon } from 'semantic-ui-react'

const Footer = () => {
    return (
        <Grid divided='vertically' style={{ marginTop: 5 }}>
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


    )
}

export default Footer
