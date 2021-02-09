import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import BlogForm from './form.js';
import Blog from '../classes/blog.js';

class New extends Component {
  constructor(props){
    super(props);
    this.state = {blog: new Blog()};
  }

  render(){
    return(
      <div>
        <h1>新規記事作成</h1>
        <BlogForm blog={this.state.blog}/><br />
        <Button onClick={(()=>{this.props.history.push('/')})}>戻る</Button>
      </div>
    )
  }
}
export default New;