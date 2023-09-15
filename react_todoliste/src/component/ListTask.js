import React from 'react'; // Make sure to import React
import { tasks } from '../data/tasks.js';
import DisplayTask from './DisplayTask.js'; // Verify the correct path to DisplayTask.js
import '../css/ListTask.css';

function ListTask() {
  const addNewTask = () => {
    console.log("fait")
    // Create a new task object
    const newTask = {
      name: 'New Task', // Set the desired name and date values here
      date: '2023-09-15',
    };

    // Add the new task to the tasks array
    tasks.push(newTask);

    // Optional: You can update the state or trigger a re-render here
    // if you are using React's state management.

    // For example, if tasks is a state variable, you can do:
    // setTasks([...tasks, newTask]);
    
  };
  
  return (
    <div className="ListTask">
      {tasks.map((element, index) => (
        <div className="OneElement" onClick={addNewTask} key={index}>
          <DisplayTask name={element.name} date={element.date} />
          hello
        </div>
      ))}
    </div>
  );
}
export { tasks };
export default ListTask;
