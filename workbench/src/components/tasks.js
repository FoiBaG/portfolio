import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';

function TasksContent() {

  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleRemoveTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <>
        <h2>TASKS</h2>
        <div className="tasks-content">
        <div className="tasks-buttons">
            <Button className="addtask" onClick={() => handleAddTask('New Task')}>
            <i className="bi bi-plus"></i>New Task
            </Button>{' '}
            {tasks.map((task, index) => (
            <Button
                key={index}
                className="removetask"
                onClick={() => handleRemoveTask(index)}
            >
                <i className="bi bi-x"></i>Delete Task
            </Button>
            ))}
        </div>
        </div>
    </>
  );
}

export default TasksContent;