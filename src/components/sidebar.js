import React, { Component } from 'react';
import { withRouter } from 'react-router';
import {Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Logo from '../blog_logo.png'


class Sidebar extends Component {
  link_to(e,path){
    e.preventDefault();
    this.props.history.push(path);
  }

  render(){
    return(
      <div style={this.props.style}>
        <img src={Logo} style={{width: "100%"}} alt='logo'/>
        <Table hover>
          <tbody>
            <tr><td><a href="/" onClick={((e)=>{this.link_to(e,'/')})}>記事一覧</a></td></tr>
            <tr><td><a href="/new" onClick={((e)=>{this.link_to(e,'/new')})}>新規作成</a></td></tr>
            <tr><td><a href="/images" onClick={((e)=>{this.link_to(e,'/images')})}>画像</a></td></tr>
            <tr><td><a href="/logout" onClick={((e)=>{this.link_to(e,'/logout')})}>ログアウト</a></td></tr>
          </tbody>
        </Table>
      </div>
    )
  }
}
export default withRouter(Sidebar);