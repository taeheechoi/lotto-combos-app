import React from 'react'
import { Container, Header, Message, Placeholder, Table } from 'semantic-ui-react'

import { localDateTime } from '../utils/appUtils'

const WinNumsList = (state) => {
    const { loading, data } = state

    return (
        <Container style={{marginBottom: 10}}>
            <Header >Winning Numbers </Header>
            {loading && (

                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                    <Placeholder.Paragraph>
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Paragraph>
                </Placeholder>

            )}

            {!loading && data && data.count > 0 && (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell textAlign="center" >Draw Date</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center" >Winning Numbers</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center" >Mega Number</Table.HeaderCell>
                            <Table.HeaderCell textAlign="center" >Multiplier</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {data && data.results?.map((nums) => (
                            <Table.Row key={nums.draw_date}>

                                <Table.Cell textAlign="center" >{localDateTime(nums.draw_date)}</Table.Cell>
                                <Table.Cell textAlign="center" >{nums.winning_numbers}</Table.Cell>
                                <Table.Cell textAlign="center" >{nums.ball}</Table.Cell>
                                <Table.Cell textAlign="center" >{nums.multiplier.replace(/^0+/, '')} x</Table.Cell>
                            </Table.Row>
                        ))
                        }
                    </Table.Body>
                </Table>) }
            {!loading && data && data.count === 0 &&  <Message content="No winning numbers" />}
       </Container>
    )
}

export default WinNumsList
