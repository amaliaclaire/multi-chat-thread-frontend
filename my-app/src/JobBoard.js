
import React, {Component} from 'react'
import {Grid, Table, Header, Image, Container} from 'semantic-ui-react'

const Leaderboard = () => {
  return (
    <Container>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <h1>Job Board - Beaze Board</h1>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell width={2}>Committer</Table.HeaderCell>
                  <Table.HeaderCell width={5}>Message</Table.HeaderCell>
                  <Table.HeaderCell width={1}>Likes</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>

              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default Leaderboard
