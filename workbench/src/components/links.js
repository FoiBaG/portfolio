import React from 'react';
import Button from 'react-bootstrap/Button';

function LinksContent() {
    return (
        <>
            <h2>QUICK ACCESS LINKS</h2>
            <div>
                <div className="links-buttons">
                    <Button><i class="bi bi-plus"></i>Add</Button>{' '}
                    <Button><i class="bi bi-x"></i>Remove</Button>{' '}
                </div>
            </div>
        </>
    );
}

export default LinksContent;