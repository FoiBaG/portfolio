import React from 'react';
import Header from '../components/common/header';
import TasksContent from '../components/tasks';
import Clock from '../components/clock';
import CalendarNote from '../components/calendar';
import NotesComp from '../components/notes';
import LinksContent from '../components/links';
import Calculator from '../components/calculator';
import { Container } from 'react-bootstrap';


function WorkBench() {

  return (
    <>
        <Header />
        <Container className="body-container">
          <TasksContent />
          <Clock />
          <CalendarNote />
          <NotesComp />
          <LinksContent />
          <Calculator />
        </Container>
    </>
  );
}

export default WorkBench;