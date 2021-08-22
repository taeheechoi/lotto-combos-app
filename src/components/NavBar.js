/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button, Dropdown, Form, Menu } from 'semantic-ui-react'
import { Context } from '../contexts/Provider'
import { CLEAR_SEARCH } from '../contexts/winnumscombo/winNumsCombosActions'
import getWinNumsCombos from '../services/getWinNumsCombos'
import { cleanedSearchNumbers } from '../utils/appUtils'

const NavBar = () => {
    const { winNumsCombosDispatch, game, setGame, search, setSearch} = useContext(Context)
  
    const gameOptions = [
        {key: 'megamillions', text: 'Mega Millions', value:'megamillions'},
        {key: 'powerball', text: 'Powerball', value:'powerball'},
    ]

    const onFieldChange = (e, { value }) => {
        setSearch(value)
        
    }

    const onFormSubmit = () => {
        const searchNumbers = cleanedSearchNumbers(search)
        getWinNumsCombos(game, searchNumbers)(winNumsCombosDispatch)
    }

    const onGameChange =(e, {value}) => {
        setGame(value)
        setSearch('')
    }
 
    const searchNumbersValid = !search?.length

    useEffect(() => {
        if (!!search) {
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
                        <Dropdown options={gameOptions} defaultValue={game} simple item onChange={onGameChange}/>
                        <Form.Input style={{ width: 350 }} placeholder="Enter numbers to search combinations. 10 20" onChange={onFieldChange} value={search}/>
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
