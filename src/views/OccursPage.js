/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Context } from '../contexts/Provider'
import getTopOccurs from '../services/getTopOccurs'
import NavBar from '../components/NavBar'
import WinNumsCombosList from '../components/WinNumsCombosList'
import Footer from '../components/Footer'


const OccursPage = () => {
    const { topOccursState, topOccursDispatch, winNumsCombosState, game } = useContext(Context)
    const { data: winNumsCombosData } = winNumsCombosState

    useEffect(() => {
        getTopOccurs(game)(topOccursDispatch) 
    }, [game]);

    return (
        <>
            <NavBar />
            {winNumsCombosData && winNumsCombosData.count > 0 ? <WinNumsCombosList {...winNumsCombosState}  /> : <WinNumsCombosList {...topOccursState} />}
            <div id="footer">
                <Footer />
            </div>
        </>
    )
}

export default OccursPage
