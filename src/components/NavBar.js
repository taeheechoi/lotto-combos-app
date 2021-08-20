/* eslint-disable react-hooks/exhaustive-deps */
import { findByLabelText } from '@testing-library/react'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Form, Menu } from 'semantic-ui-react'
import { Context } from '../contexts/Provider'
import { CLEAR_SEARCH } from '../contexts/winnumscombo/winNumsCombosActions'
import getWinNumsCombos from '../services/getWinNumsCombos'
import { cleanedSearchNumbers } from '../utils/appUtils'

const NavBar = () => {
    const { winNumsCombosDispatch } = useContext(Context)

    const [search, setSearch] = useState('')

    const onFieldChange = (e, { value }) => {
        setSearch(value)
    }

    const onFormSubmit = () => {
        const searchNumbers = cleanedSearchNumbers(search)
        console.log('searchNumbers', searchNumbers)
        getWinNumsCombos(searchNumbers)(winNumsCombosDispatch)
    }

    const onMenuClick = () => {
        
        winNumsCombosDispatch({
            type: CLEAR_SEARCH
        })
        setSearch('')

    }


    const searchNumbersValid = !search?.length
    useEffect(() => {
        if (!search) {
            winNumsCombosDispatch({
                type: CLEAR_SEARCH
            })
        }
    }, [search])

    return (
        <Menu secondary pointing>
            <Menu.Item header as={Link} to="/" style={{ fontSize: 30 }} >
                Lotto Combos
            </Menu.Item>
            <Menu.Item/>
            <Menu.Item position="left"/>
            <Menu.Item id="comboSearch" name='combosSearch'>
                <Form>
                    <Form.Group>
                        <Form.Input style={{ width: 350 }} placeholder="Enter numbers to search. 10 20" onChange={onFieldChange} />
                        <Button type="submit" primary onClick={onFormSubmit} disabled={searchNumbersValid}>Search</Button>
                    </Form.Group>
                </Form>
            </Menu.Item>
            <Menu.Item as={Link} to="/" name='winningNumbers' position="right" onClick={onMenuClick}>
                Winning Numbers
            </Menu.Item>
            <Menu.Item as={Link} to="top-occurrence" name='top-occurrence' onClick={onMenuClick}>
                {/* <Menu.Item name='topOccurrence' as={Link} to="top-occurrence"  active={activeItem === 'topOccurrence'} onClick={onMenuClick} > */}
                Top Occurrence
            </Menu.Item>
            <Menu.Item as={Link} to="about" name='about' onClick={onMenuClick}>
                About
            </Menu.Item>
        </Menu>
    )
}

export default NavBar
