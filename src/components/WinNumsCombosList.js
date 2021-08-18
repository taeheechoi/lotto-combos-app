import React from 'react'
import { Container, Header, Message, Placeholder, Table } from 'semantic-ui-react'

const WinNumsCombosList = (state) => {
    const { loading, data, gameName } = state
    
    return (
        <div>
            <Container>
                <Header>{gameName} - Winning Numbers Combinations</Header>
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
                    <Message content="No combinations." /> 
                    :
                    <Table celled>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell textAlign="center" >Combinations</Table.HeaderCell>
                                <Table.HeaderCell textAlign="center" >Occurrences / {data.results[0]?.number_of_draws} plays</Table.HeaderCell>
                                <Table.HeaderCell textAlign="center" >%</Table.HeaderCell>
                                
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {data.results?.map((nums) => (
                                <Table.Row key={nums.winning_numbers_combination}>
                                    <Table.Cell textAlign="center" >{nums.winning_numbers_combination}</Table.Cell>
                                    <Table.Cell textAlign="center" >{nums.winning_numbers_combination_occurrence}</Table.Cell>
                                    <Table.Cell textAlign="center" >{nums.possibility}</Table.Cell>
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

export default WinNumsCombosList
