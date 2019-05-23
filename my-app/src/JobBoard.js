import React from 'react'
import { Button, Card, Image, Form, Icon } from 'semantic-ui-react'

const CardExampleGroups = () => (
  <Card.Group>

    <Card>
      <Card.Content>
        <Image floated='right' size='mini' src='https://react.semantic-ui.com/images/avatar/large/jenny.jpg' />
        <Card.Meta>Jenny Lawrence</Card.Meta>
        <Card.Header>Title of Job Posting</Card.Header>
        <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed sed orci tristique, volutpat velit sit amet, laoreet libero.</Card.Description>
      </Card.Content>
      <Card.Content extra>
     <a>
       <Icon
       name='comments'
       iconPosition="right"
       />
       3 Comments
     </a>
   </Card.Content>


    </Card>
  </Card.Group>
)

export default CardExampleGroups
