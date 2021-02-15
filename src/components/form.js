import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap';
import {withRouter} from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';

const url = 'https://tn3li7pzjj.execute-api.ap-northeast-1.amazonaws.com/dev/blogs';

class BlogForm extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: this.props.blog.content, 
      title: this.props.blog.title,
      description: this.props.blog.description,
    };
  }

  save(e){
    e.preventDefault();
    console.log(this.state);
    const now = new Date().toISOString();

    const Blog = {
      content: this.state.content, 
      title: this.state.title,
      description: this.state.description,
      updated_at: now
    }

    if(this.props.type==="new"){
      Blog.created_at = now;
      Blog.is_published = false;
      axios.post(url, Blog)
        .then(res=>{window.alert('ブログを投稿しました')})
        .catch(err=>{window.alert(err)})
    } else {
      Blog.created_at = this.props.blog.created_at;
      Blog.is_published = this.props.blog.is_published;
      axios.put(url + '/' + this.props.blog.id, Blog)
        .then(res=>{window.alert('ブログを更新しました')})
        .catch(err=>{console.log(err)})
    }

    this.props.history.push('/');
  }


  render(){
    return(
      <Form>
        <Form.Group controlId="title">
          <Form.Label>title</Form.Label>
          <Form.Control value={this.state.title} size="lg" type="text" onChange={(e)=>{this.setState({title: e.target.value})}}/>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label>descirption</Form.Label>
          <Form.Control value={this.state.description} size="lg" type="text"  onChange={(e)=>{this.setState({description: e.target.value})}}/>
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>content</Form.Label>
          <Form.Control value={this.state.content} as="textarea" rows={30}  onChange={(e)=>{this.setState({content: e.target.value})}}/>
        </Form.Group>
        <Button variant="primary" type="submit" onClick={(e)=>{this.save(e)}}>送信</Button>
      </Form>
    )
  }
}

export default withRouter(BlogForm);