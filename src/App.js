import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import List from './components/list.js';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/edit/:id" exact component={List} />
        <Route path="/delete/:id" exact component={List} />
      </Switch>
    </Router>
  );
}
export default App;