import styled, { createGlobalStyle } from 'styled-components'
import Modal from 'react-bootstrap/Modal';

const GlobalModal = createGlobalStyle`
    .modal-content {
        border: solid black;
    }
`;
const ModalHeader= styled(Modal.Header)`
    border: none;
`;
const ModalFooter= styled(Modal.Footer)`
    border: none;
`;

const ModalTitle = styled(Modal.Title)`
    color: #910c94;
`;
export { ModalHeader, ModalTitle, ModalFooter, GlobalModal};
