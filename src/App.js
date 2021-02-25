import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import {Container, Row, Col} from 'react-bootstrap';
import List from './components/list.js';
import Edit from './components/edit.js';
import Delete from './components/delete.js';
import New from './components/new.js';
import Sidebar from './components/sidebar.js';
import Images from './components/images.js';

const sidebar_style = {marginTop: 100};

function App() {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="d-md-block col-md-3 d-lg-block col-lg-2">
            <Sidebar style={sidebar_style}/>
          </div>
          <div className="d-md-block col-md-9 d-lg-block col-lg-10">
            <Switch>
              <Route path="/" exact component={List} />
              <Route path="/edit/:id" exact component={Edit} />
              <Route path="/delete/:id" exact component={Delete} />
              <Route path="/new" exact component={New} />
              <Route path="/images" exact component={Images} />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;