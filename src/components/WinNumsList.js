import React from 'react'
import { Container, Header, Message, Placeholder, Table } from 'semantic-ui-react'

const WinNumsList = (state) => {
    const { loading, data } = state

    return (
        <div>
            <Container>
                <Header>Winning Numbers</Header>
                {loading && (
                    <div>
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
                    </div>
                )}

                {!loading && data.count === 0 ?
                    <Message content="No winning numbers" /> 
                    :
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Draw Date</Table.HeaderCell>
                                <Table.HeaderCell>Winning Numbers</Table.HeaderCell>
                                <Table.HeaderCell>Mega Number</Table.HeaderCell>
                                <Table.HeaderCell>Multiplier</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {data && data.results?.map((nums) => (
                                <Table.Row key={nums.draw_date}>

                                    <Table.Cell>{nums.draw_date.split('T')[0]}</Table.Cell>
                                    <Table.Cell>{nums.winning_numbers}</Table.Cell>
                                    <Table.Cell>{nums.mega_ball}</Table.Cell>
                                    <Table.Cell>{nums.multiplier}</Table.Cell>
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
