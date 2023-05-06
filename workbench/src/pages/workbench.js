import React from 'react';
import Header from '../components/common/header';
import TasksContent from '../components/tasks';
import Clock from '../components/clock';
import CalendarNote from '../components/calendar';
import NotesComp from '../components/notes';
import LinksContent from '../components/links';
import Calculator from '../components/calculator';


function WorkBench() {

  return (
    <>
        <Header />
        <TasksContent />
        <Clock />
        <CalendarNote />
        <NotesComp />
        <LinksContent />
        <Calculator />
    </>
  );
}

export default WorkBench;