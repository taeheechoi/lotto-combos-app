/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Context } from '../contexts/Provider'
import getWinNums from '../services/getWinNums'
import NavBar from '../components/NavBar'
import WinNumsList from '../components/WinNumsList'
import Footer from '../components/Footer'
import WinNumsCombosList from '../components/WinNumsCombosList'

const WinNumsPage = () => {
    const { winNumsState, winNumsDispatch, winNumsCombosState, game } = useContext(Context)
    const { data: winNumsCombosData } = winNumsCombosState

    useEffect(() => {
        getWinNums(game)(winNumsDispatch);
    }, [game]);

    return (
        <>
            <NavBar />
            {winNumsCombosData && winNumsCombosData.count > 0 ? <WinNumsCombosList {...winNumsCombosState} /> : <WinNumsList {...winNumsState} />}
            <div id="footer">
                <Footer />
            </div>
        </>
    )
}

export default WinNumsPage
