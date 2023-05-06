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

	return (
        <>
			<Form className="toggle-switch">
				<Form.Label onClick={() => handleToggle(false)}>
					<i className="bi bi-sun-fill"></i>
				</Form.Label>
				<Form.Check
					type="switch"
					id="custom-switch"
					checked={toggleSwitch}
					onChange={() => handleToggle(!toggleSwitch)}
				/>
				<Form.Label onClick={() => handleToggle(true)}>
					<i className="bi bi-moon-fill"></i>
				</Form.Label>
			</Form>
        </>
	);
};

export default ToggleTheme;