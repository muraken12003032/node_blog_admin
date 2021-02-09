import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {withRouter} from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const url = 'https://tn3li7pzjj.execute-api.ap-northeast-1.amazonaws.com/dev/blogs';

class BlogForm extends Component {
  constructor(props){
    super(props);
    console.log(this.props.blog);
    this.state = {
      content: this.props.blog.content, 
      title: this.props.blog.title,
      description: this.props.blog.description
    };
  }

  save(e){
    e.preventDefault();
    console.log(this.state);

    const Blog = {
      content: this.state.content, 
      title: this.state.title,
      description: this.state.description
    }

    axios.post(url, Blog)
      .then(res=>{window.alert('ブログを投稿しました')})
      .catch(err=>{window.alert(err)})

    this.props.history.push('/');
  }


  render(){
    return(
      <Form>
        <Form.Group controlId="title">
          <Form.Label>title</Form.Label>
          <Form.Control size="lg" type="text" onChange={(e)=>{this.setState({title: e.target.value})}}/>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>descirption</Form.Label>
          <Form.Control size="lg" type="text"  onChange={(e)=>{this.setState({description: e.target.value})}}/>
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>content</Form.Label>
          <Form.Control as="textarea" rows={30}  onChange={(e)=>{this.setState({content: e.target.value})}}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e)=>{this.save(e)}}>送信</Button>
      </Form>
    )
  }
}

export default withRouter(BlogForm);