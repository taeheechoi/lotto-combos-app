/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Context } from '../contexts/Provider'
import getWinNums from '../services/getWinNums'
import NavBar from '../components/NavBar'
import WinNumsList from '../components/WinNumsList'
import Footer from '../components/Footer'
import WinNumsCombosList from '../components/WinNumsCombosList'

const WinNumsPage = () => {
    const { winNumsState, winNumsDispatch, winNumsCombosState } = useContext(Context)
    const { data: winNumsData } = winNumsState
    const { data: winNumsCombosData } = winNumsCombosState

    const titleWinNumsCombos = "Mega Millions - Winning Numbers Combinations"
    const titleWinNums = "Mega Millions - Winning Numbers"

    useEffect(() => {

        if (winNumsData.length === 0) {
            getWinNums(winNumsDispatch);
        }
    }, []);

    return (
        <>
            <NavBar />
            {winNumsCombosData.count > 0 ? <WinNumsCombosList {...winNumsCombosState} title={titleWinNumsCombos} /> : <WinNumsList {...winNumsState} title={titleWinNums} />}
            <div id="footer">
                <Footer />
            </div>
        </>
    )
}

export default WinNumsPage
