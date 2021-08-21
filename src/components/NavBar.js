/* eslint-disable react-hooks/exhaustive-deps */
import { findByLabelText } from '@testing-library/react'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Form, Menu } from 'semantic-ui-react'
import { Context } from '../contexts/Provider'
import { CLEAR_SEARCH } from '../contexts/winnumscombo/winNumsCombosActions'
import getWinNumsCombos from '../services/getWinNumsCombos'
import { cleanedSearchNumbers } from '../utils/appUtils'

const NavBar = () => {
    const { winNumsCombosDispatch } = useContext(Context)

    const [search, setSearch] = useState('')
    const [activeItem, setActiveItem] = useState({})


    const onFieldChange = (e, { value }) => {
        setSearch(value)
    }

    const onFormSubmit = () => {
        const searchNumbers = cleanedSearchNumbers(search)
        console.log('searchNumbers', searchNumbers)
        getWinNumsCombos(searchNumbers)(winNumsCombosDispatch)
    }

    const onMenuClick = (e, { name }) => {

        setActiveItem({ activeItem: name })
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
            <Menu.Item header style={{ fontSize: 30 }}>
                Lotto Combos
            </Menu.Item>
            <Menu.Item />
            <Menu.Item position="left" />
            <Menu.Item id="comboSearch" name='combosSearch'>
                <Form>
                    <Form.Group>
                        <Form.Input style={{ width: 350 }} placeholder="Enter numbers to search combinations. 10 20" onChange={onFieldChange} />
                        <Button type="submit" primary onClick={onFormSubmit} disabled={searchNumbersValid}>Search</Button>
                    </Form.Group>
                </Form>
            </Menu.Item>
            <Menu.Item as={NavLink} to="/winning-numbers" position="right">
                Winning Numbers
            </Menu.Item>
            <Menu.Item as={NavLink} to="/top-occurrence" >
                Top Occurrence
            </Menu.Item>
            <Menu.Item as={NavLink} to="/about">

                About
            </Menu.Item>
        </Menu>
    )
}

export default NavBar
