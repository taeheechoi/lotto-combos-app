/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { Context } from '../contexts/Provider'
import getTopOccurs from '../services/getTopOccurs'
import NavBar from '../components/NavBar'
import WinNumsCombosList from '../components/WinNumsCombosList'
import Footer from '../components/Footer'


const OccursPage = () => {
    const { topOccursState, topOccursDispatch, winNumsCombosState, game, search } = useContext(Context)
 
    const searchNumbersValid = !!search

    useEffect(() => {
        getTopOccurs(game)(topOccursDispatch) 
    }, [game]);

    return (
        <>
            <NavBar />
            {searchNumbersValid ? <WinNumsCombosList {...winNumsCombosState}  /> : <WinNumsCombosList {...topOccursState} />}
            <div id="footer">
                <Footer />
            </div>
        </>
    )
}

export default OccursPage
