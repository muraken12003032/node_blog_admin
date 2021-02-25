import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button } from 'react-bootstrap';
import axios from 'axios';

const get_signed_url = 'https://tn3li7pzjj.execute-api.ap-northeast-1.amazonaws.com/dev/signedurl';
var params = new FormData();

class Images extends Component {

  upload(event){
    event.preventDefault();
    params.append('file',event.target[0].files[0]);

    //署名付きURLの取得
    axios.post(get_signed_url,{filename: event.target[0].files[0].name})
      .then(res=>{
        const headers = {headers: {"Content-Type": "image/*"}};
        console.log(res);
        axios.put(res.data.url,params,headers)
          .then(res=>{console.log(res)})
          .catch(err=>{console.log(err)})
      }).catch(err=>{console.log(err)})
  }

  render(){
    return(
      <div>
        <h1>画像を管理するページ</h1>
        <form method="post" encType="multipart/form-data" onSubmit={(e)=>{this.upload(e)}}>
          <input type="file" name="pic" accept="image/*" />
          <Button type="submit" variant="primary">アップロード</Button>
        </form>
      </div>
    )
  }
}

export default withRouter(Images);