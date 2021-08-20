import React from 'react'
import { Container, Message, Grid, Header } from 'semantic-ui-react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'

const AboutPage = () => {
    return (
        <>
            <NavBar />
            <Container text textAlign='justified'>
                <Header as="h2">About Lotto Combos</Header>
                <p>
                    Lotto Combos analyzes the number of occurrences from combinations of lottery winning numbers. <br/><br/>
                    Occurrences are updated daily based on data from https://data.ny.gov/. <br /><br/>
                    This app does neither promote playing the games nor predicting future winning numbers, so use it at your own risk.
                </p>
            </Container>
       
            <div id="footer">
                <Footer />
            </div>

        </>

    )
}

export default AboutPage
