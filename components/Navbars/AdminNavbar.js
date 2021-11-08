import React, {useState} from "react";
import Link from "next/link";
import Router from "next/router";
// reactstrap components
import {
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Form,
  FormGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Navbar,
  Nav,
  Container,
  Media,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "reactstrap";

function AdminNavbar({ brandText }) {
  const [actionModal, setactionModal] = useState(false);
  const navigateToLogin = () =>{
    Router.push("/auth/login");
  }
  const navigateToRegister = () =>{
    Router.push("/auth/register");
  }
  const showModal = () =>{
    setactionModal(true);
  }
  const hiddenModal = () =>{
    setactionModal(false);
  }

  return (
    <>
      <div>
        <Modal toggle={hiddenModal} isOpen={actionModal}>
          <ModalHeader
            close={<button className="close" onClick={hiddenModal}>×</button>}
            toggle={hiddenModal}
          >
            Crear una cuenta
          </ModalHeader>
          <ModalBody>
            Registrate o incia sesión para empezar a agregar productos a tu inventario.
          </ModalBody>
          <ModalFooter>
            <Button
              color="primary"
              onClick={navigateToLogin}
            >
              INICIAR SESIÓN
            </Button>
            {' '}
            <Button onClick={navigateToRegister}>
              REGISTRARTE
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <Navbar className="navbar-top navbar-dark" expand="md" id="navbar-main">
      <Container fluid>
          <Link href="/admin/dashboard">
            <a className="h4 mb-0 text-uppercase d-none d-lg-inline-block">
            </a>
          </Link>
          <Nav className="align-items-center d-none d-md-flex" navbar>
            <UncontrolledDropdown nav>
              <DropdownToggle className="pr-0" nav>
                <Media className="align-items-center">
                  <Media className="ml-2 d-none d-lg-block">
                    <div style={{ color: 'black' }} onClick={showModal}>iniciar sesión</div>
                  </Media>
                </Media>
              </DropdownToggle>
            </UncontrolledDropdown>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default AdminNavbar;
