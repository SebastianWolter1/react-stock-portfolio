import React, { useContext } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { StockContext } from '../global/Context';

const MyModal = () => {
  const { showModal, handleClose } = useContext(StockContext)



  return (
    <>
    <div className='modal-container'>

      <Modal className='modal' show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal Title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Modal Content</Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
    </>
  );
};

export default MyModal;