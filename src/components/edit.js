import React, {Component} from 'react';
import {Container, Button} from 'react-bootstrap';
import BlogForm from './form.js';
class Edit extends Component {
  constructor(props){
    super(props);
    console.log(props);
    this.state = {blog: this.props.location.state.blog}
  }

  render(){
    return(
      <Container>
        <h1>編集ページだよ</h1>
        <BlogForm blog={this.state.blog} type="update" /><br />
        <Button onClick={(()=>{this.props.history.push('/')})}>戻る</Button>
      </Container>
    )
  }
}

export default Edit;