import React, { useState } from 'react';
import { Form } from 'react-bootstrap';

const ToggleTheme = ({onColorChange}) => {
	const [toggleSwitch, setToggleSwitch] = useState(false);
	const handleToggle = (status) => {
		setToggleSwitch(status);
		if (status) {
			document.body.classList.add('dark-theme');
		} else {
			document.body.classList.remove('dark-theme');
		}
	};

const handleCtoggle = (e) => {
    onColorChange(e.target.value);
}

	return (
        <>
            <Form className="toggle-switch">
                <Form.Label onClick={() => handleToggle(false)}>
                </Form.Label>
                <Form.Check
                    type="switch"
                    id="custom-switch"
                    checked={toggleSwitch}
                    onChange={() => handleToggle(!toggleSwitch)}
                />
                <Form.Label onClick={() => handleToggle(true)}>
                </Form.Label>
            </Form>
            <Form.Control type="color" onChange={handleCtoggle}></Form.Control>
        </>
	);
};

export default ToggleTheme;