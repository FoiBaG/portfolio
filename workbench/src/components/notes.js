import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import FileSaver from 'file-saver';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

function NotesComp() {

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSaveClick = () => {
    const file = new Blob([inputValue], { type: 'text/plain;charset=utf-8' });
    FileSaver.saveAs(file, 'myNotepad.txt');
  };

  return (
    <>
      <div className="notes-content">
        <div className="notes-header">
          <h2>My Notepad</h2>
          {['left'].map((placement) => (
          <OverlayTrigger
          key={placement}
          placement={placement}
          overlay={
            <Tooltip id={`tooltip-${placement}`}>
              Save
            </Tooltip>
          }
          >
            <Button className="download-icon" onClick={handleSaveClick}>
              <i class="bi bi-download"></i>
            </Button>
          </OverlayTrigger>
        ))}
        </div>
          <textarea value={inputValue} onChange={handleInputChange} />
      </div>
    </>
  );
}


export default NotesComp;