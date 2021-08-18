/* eslint-disable react-hooks/exhaustive-deps */
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

    useEffect(() => {

        if (!search) {
            winNumsCombosDispatch({
                type: CLEAR_SEARCH
            })
        }
    }, [search])

    return (
        
        <Menu secondary pointing style={{ marginBottom: 20 }}>
            <Menu.Item as={Link} to="/" style={{ fontSize: 30 }} position="left">
                Lotto Combos
            </Menu.Item>
            <Menu.Item>
                <Form>
                    <Form.Group>
                        <Form.Input style={{ width: 350 }} name="combos Search" placeholder="Enter numbers to search. 10 20" onChange={onFieldChange} />
                        <Button type="submit" primary onClick={onFormSubmit}>Search</Button>
                    </Form.Group>
                </Form>
            </Menu.Item>
            <Menu.Item position="right" >
                How to search
            </Menu.Item>
        </Menu>


    )
}

export default NavBar
