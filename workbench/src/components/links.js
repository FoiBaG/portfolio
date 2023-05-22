import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function LinksContent() {
    const [links, setLinks] = useState([]);
    const [linkName, setLinkName] = useState('');
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const addLink = (event) => {
        event.preventDefault();
        if (linkName.trim() !== '') {
            setLinks([...links, linkName]);
            setLinkName('');
        }
    };

    const removeLink = (index) => {
        const newLinks = [...links];
        newLinks.splice(index, 1);
        setLinks(newLinks);
    };

    const handleLinkNameChange = (event) => {
        setLinkName(event.target.value);
    };

    return (
        <>
            <div className="body-links">
                <h2>QUICK ACCESS LINKS</h2>
                <div>
                    <ul>
                        {links.map((link, index) => (
                            <>
                                <a href={link} rel="noreferrer" target="_blank"><li key={index}>
                                    {link}{" "}
                                </li></a>
                                <Button onClick={() => removeLink(index)}><i className="bi bi-x"></i>Remove Link</Button>
                            </>
                        ))}
                    </ul>
                </div>
                <div>
                    <form onSubmit={addLink}>
                        <Button type="submit" onClick={handleShow} onChange={addLink}><i className="bi bi-plus"></i>Add</Button>
                        <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
                        <Modal.Header closeButton>
                        </Modal.Header>
                        <Modal.Body>
                            <input type="url" name="taskName" value={linkName} placeholder="Link URL" onChange={handleLinkNameChange} />
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Cancel</Button>
                            <Button variant="primary" onClick={addLink}>Add</Button>
                        </Modal.Footer>
                        </Modal>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LinksContent;