import React from 'react'
import { Container, Header, Message, Placeholder, Table } from 'semantic-ui-react'

const WinNumsList = (state) => {
    const { loading, data, gameName } = state
    return (
        <div>
            <Container>
                <Header >{gameName} - Winning Numbers</Header>
                {loading && (
                    <div>
                        <Placeholder>
                            <Placeholder.Header image>
                                <Placeholder.Line />
                                <Placeholder.Line />re
                            </Placeholder.Header>
                            <Placeholder.Paragraph>
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                                <Placeholder.Line />
                            </Placeholder.Paragraph>
                        </Placeholder>
                    </div>
                )}

                {!loading && data.count === 0 ?
                    <Message content="No winning numbers" /> 
                    :
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

                                    <Table.Cell textAlign="center" >{nums.draw_date.split('T')[0]}</Table.Cell>
                                    <Table.Cell textAlign="center" >{nums.winning_numbers}</Table.Cell>
                                    <Table.Cell textAlign="center" >{nums.mega_ball}</Table.Cell>
                                    <Table.Cell textAlign="center" >{nums.multiplier}</Table.Cell>
                                </Table.Row>
                            ))
                            }


                        </Table.Body>
                    </Table>
                }

            </Container>


        </div>
    )
}

export default WinNumsList
