/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Context } from '../contexts/Provider'
import getWinNums from '../services/getWinNums'
import NavBar from '../components/NavBar'
import WinNumsList from '../components/WinNumsList'
import WinNumsCombosList from '../components/WinNumsCombosList'
import { Container } from 'semantic-ui-react'
import Footer from '../components/Footer'

const MegaMillionsPage = () => {
    const { winNumsState, winNumsDispatch, winNumsCombosState } = useContext(Context)
    const { data: winNumsData } = winNumsState
    const { data: winNumsCombosData } = winNumsCombosState
    const gameName = "Mega Millions"

    useEffect(() => {
        if (winNumsData.length === 0) {
            getWinNums(winNumsDispatch);
        }
    }, []);

    return (
        <div>

            <NavBar />
            <Container>
                {winNumsCombosData.length === 0 ? <WinNumsList {...winNumsState} gameName={gameName} /> : <WinNumsCombosList {...winNumsCombosState} {...gameName} />}

            </Container>
            <Footer/>

        </div>
    )
}

export default MegaMillionsPage
