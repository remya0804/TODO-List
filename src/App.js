import './App.css';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import { TodoProvider } from './Context/TodoContext';

function App() {
  return (

    <TodoProvider>

        <div className="appcontainer">

        <h1 className="appcontainer-title"> TODO APP</h1>

        <TaskForm />

        <TaskList />

        </div>

     </TodoProvider>
   
  );
}

export default App;
