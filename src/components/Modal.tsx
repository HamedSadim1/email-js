import * as React from "react";
import { Button, Modal } from "react-bootstrap";

const StaticExample: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container m-5">
      <Button variant="primary" onClick={toggleModal}>
        Launch demo modal
      </Button>
      <Modal show={isOpen} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default StaticExample;
