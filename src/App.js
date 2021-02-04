import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from './components/list.js';
import Edit from './components/edit.js';
import Delete from './components/delete.js'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/edit/:id" exact component={Edit} />
        <Route path="/delete/:id" exact component={Delete} />
      </Switch>
    </Router>
  );
}
export default App;