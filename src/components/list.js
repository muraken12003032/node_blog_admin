import React, { Component } from 'react';
import axios from 'axios';
import {Container, Table, Button} from 'react-bootstrap';
import {withRouter} from 'react-router';
import "bootstrap/dist/css/bootstrap.min.css";

const url = 'https://tn3li7pzjj.execute-api.ap-northeast-1.amazonaws.com/dev/blogs';
const style_hidden = { display: 'none' };


class List extends Component {
  constructor(props) {
    super(props);
    this.state = {blogs: [], style: {}}
  }

  componentDidMount(){
    axios.get(url).then((res)=>{
      console.log(res.data);
      this.setState({blogs: res.data.blogs, style: style_hidden});
    })
    .catch((err)=>{
      console.log(err);
    })
  }

  blog_list() {
    return this.state.blogs.map((cur,index)=>{
      return(
        //このkeyを入れないとwarningが出る
        <tr key={index}>
          <td>{cur.title}</td>
          <td>{cur.content}</td>
          <td><Button variant="secondary" onClick={(()=>{this.props.history.push('/edit/' + cur.id, {blog: cur})})}>編集</Button></td>
          <td><Button variant="danger" onClick={(()=>{this.props.history.push('/delete/' + cur.id)})}>削除</Button></td>
          <td><Button variant="primary">公開</Button></td>
        </tr>
      )
    })
  }

  render(){
    return(
      <Container>
        <h1>ブログ記事一覧</h1>
        <img src="https://murakenmuraken-dev-blog-images.s3-ap-northeast-1.amazonaws.com/loading.gif" style={this.state.style}/>
        {
         // if文: blogsの中身がない(length===0)の場合は
         this.state.blogs.length ? 
          // 読み込まれた後の動作
          <Table striped hover>
            <thead>
              <td><b>件名</b></td>
              <td><b>本文</b></td>
              <td><b>編集</b></td>
              <td><b>削除</b></td>
              <td><b>公開</b></td>
            </thead>
            <tbody>{this.blog_list()}</tbody>
          </Table> :
          // 読み込まれる前の動作
          <h2>読み込み中....</h2>
        }
      </Container>
    )
  }
}

export default withRouter(List);