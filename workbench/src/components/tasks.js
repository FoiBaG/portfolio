import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function TaskContent() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addTask = (event) => {
    event.preventDefault();
    if (taskName.trim() !== '') {
      setTasks([...tasks, taskName]);
      setTaskName('');
    }
  };

  const removeTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  return (
    <>
      <div>
        <div className="tasks-content">
          <h2>My tasks</h2>
          <form onSubmit={addTask}>
            <Button type="submit" onClick={handleShow}><i className="bi bi-plus"></i>New Task</Button>
            <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
              <Modal.Header closeButton>
                <Modal.Title>Add new task</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <input type="text" name="taskName" value={taskName} placeholder="Tasks text" onChange={handleTaskNameChange} />
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Cancel
                </Button>
                <Button variant="primary">Add</Button>
              </Modal.Footer>
            </Modal>
          </form>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                {task}{" "}
                <Button onClick={() => removeTask(index)}><i className="bi bi-x"></i>Remove Task</Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TaskContent;