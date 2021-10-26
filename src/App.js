import Home from "./Home"
import './App.css';
import { Switch, Route} from "react-router-dom"
import AddUser from "./Component/AddUser";
import ViewUser from "./Component/ViewUser";
import UpdateUser from "./Component/UpdateUser";

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/adduser" component={AddUser} />
        <Route exact path="/" component={Home} />
        <Route exact path="/viewuser/:id" component={ViewUser} />
        <Route exact path="/updateuser/:id" component={UpdateUser} />
        <Route exact path="/adduser" component={AddUser} />
      </Switch>
    </div>
  );
}

export default App; 
