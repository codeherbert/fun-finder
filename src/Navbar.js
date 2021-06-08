import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import { 
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    NavbarText } from 'reactstrap';

function NavbarMain(props) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const dogLinks = props.dogs.map(dog => (
        <NavItem key={dog.name}>
            <NavLink tag={RRNavLink} activeClassName="active" exact to={`/home/${dog.name}`}>
                {dog.name}
            </NavLink>
        </NavItem>
    ));

    return (
        <div>
            <Navbar color="dark" dark expand="md">
                <NavbarBrand href="/home">Dog App</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                    <NavItem>
                        <NavLink tag={RRNavLink} activeClassName="active" exact to="/home/">Home</NavLink>
                    </NavItem>
                    { dogLinks }
                    </Nav>
                    <NavbarText></NavbarText>
                </Collapse>
            </Navbar>
        </div>
    );
}

export default NavbarMain;