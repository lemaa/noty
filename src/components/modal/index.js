import React, { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import {ModalHeader, ModalTitle, ModalFooter, GlobalModal} from '../../styles/modalNote';

function NoteModal(props) { 
    const [animationModal] = useState(props.animationModal);

   return (
        <Modal show={props.showModal} onHide={props.handleCloseModal} animation={animationModal}>
            <GlobalModal/>            
            <ModalHeader>
                <ModalTitle className="col-12 text-center">
                    <img src={process.env.PUBLIC_URL + `/assets/note.png`} alt="note adding" />
                </ModalTitle>
            </ModalHeader>
            <Modal.Body className="form-add-note">
                {props.children}
            </Modal.Body>
            <ModalFooter>
                {props.modalFooter}
            </ModalFooter>
        </Modal>
  );
}

export default NoteModal;









