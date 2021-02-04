import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
class Delete extends Component {
  render(){
    return(
      <div>
        <h1>削除ページだよ</h1>
        <Button onClick={(()=>{this.props.history.push('/')})}>戻る</Button>
      </div>
    )
  }
}
export default Delete;