import React, { useContext } from 'react'
import { Container, Header } from 'semantic-ui-react'
import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import WinNumsCombosList from '../components/WinNumsCombosList'
import { Context } from '../contexts/Provider'

const AboutPage = () => {
    const { winNumsCombosState } = useContext(Context)
    const { data: winNumsCombosData } = winNumsCombosState
    const titleWinNumsCombos = "Mega Millions - Winning Numbers Combinations"
    return (
        <>
            <NavBar />
            {winNumsCombosData.count > 0 ? 
                <WinNumsCombosList {...winNumsCombosState} title={titleWinNumsCombos} /> :
                <Container text textAlign='justified'>
                    <Header>About Lotto Combos</Header>
                    <p>
                        Lotto Combos analyzes the number of occurrences from combinations of lottery winning numbers. <br /><br />
                        Occurrences are updated daily based on data from https://data.ny.gov/. <br /><br />
                        This app does neither promote playing the games nor predicting future winning numbers, so use it at your own risk.
                    </p>
                </Container>


            }


            <div id="footer">
                <Footer />
            </div>

        </>

    )
}

export default AboutPage
