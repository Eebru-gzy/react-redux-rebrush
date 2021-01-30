// import logo from './logo.svg';
import './App.css';
import Todolist from './Todolist'
import { Link, Route, Redirect} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <h1> The Todo List</h1>
      <p><Link to="/todos">See My Todos</Link></p>
      <p><Link to="/todos/new">Add a Todo</Link></p>
      <Route path='/todos' component={Todolist} />
      <Route exact path='/' render={ ()=> <Redirect to="/todos" /> } />
    </div>
  );
}

export default App;
