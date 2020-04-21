import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import '../../styles/modalNote.css';

function NoteModal(props) { 
    const [animationModal] = useState(props.animationModal);


   return (
        <Modal show={props.showModal} onHide={props.handleCloseModal} animation={animationModal}>
            <Modal.Header>
                <Modal.Title className="col-12 text-center addNoteModelLabel">
                    <img src={process.env.PUBLIC_URL + `/assets/note.png`} alt="note adding" />
                </Modal.Title>
            </Modal.Header>
            <Modal.Body className="form-add-note">
                {props.children}
            </Modal.Body>
            <Modal.Footer>
                {props.modalFooter}
            </Modal.Footer>
        </Modal>
  );
}

export default NoteModal;









