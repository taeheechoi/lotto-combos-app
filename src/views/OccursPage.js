/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Context } from '../contexts/Provider'
import getTopOccurs from '../services/getTopOccurs'
import NavBar from '../components/NavBar'
import WinNumsCombosList from '../components/WinNumsCombosList'
import Footer from '../components/Footer'


const OccursPage = () => {
    const { topOccursState, topOccursDispatch, winNumsCombosState } = useContext(Context)
    const { data: topOccusData } = topOccursState
    const { data: winNumsCombosData } = winNumsCombosState

    const titleWinNumsCombos = "Mega Millions - Winning Numbers Combinations"
    const titleTopOccurs = "Mega Millions - Top Occurrence"

    useEffect(() => {
        if (topOccusData.length === 0) {
            getTopOccurs(topOccursDispatch)
        }
    }, []);

    return (
        <>
            <NavBar />
            {winNumsCombosData.count > 0 ? <WinNumsCombosList {...winNumsCombosState} title={titleWinNumsCombos} /> : <WinNumsCombosList {...topOccursState} title={titleTopOccurs} />}
            <div id="footer">
                <Footer />
            </div>
        </>
    )
}

export default OccursPage
