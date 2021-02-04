import React, {Component} from 'react';
import {Container, Table, Button} from 'react-bootstrap';
class Edit extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }

  render(){
    return(
      <Container>
        <h1>編集ページだよ</h1>
        <Table striped hover>
          <thead>
            <td>id</td>
            <td>title</td>
            <td>content</td>
            <td>description</td>
          </thead>
          <tbody>
            <tr>
              <td>{this.props.location.state.blog.id}</td>
              <td>{this.props.location.state.blog.title}</td>
              <td>{this.props.location.state.blog.content}</td>
              <td>{this.props.location.state.blog.description}</td>
            </tr>
          </tbody>
        </Table>
        <Button onClick={(()=>{this.props.history.push('/')})}>戻る</Button>
      </Container>
    )
  }
}

export default Edit;