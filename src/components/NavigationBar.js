import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { LinkContainer } from 'react-router-bootstrap';

const Styles = styled.div``;
export const NavigationBar = () => (
	<Styles>
		<Navbar bg="dark" variant="dark" expand="lg">
			<Container>
				<LinkContainer to="/">
					<Navbar.Brand>
						<img alt="logo" src={logo} width="30" height="30" className="d-inline-block align-top" />
						{' React Bootstrap'}
					</Navbar.Brand>
				</LinkContainer>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<LinkContainer to="/">
							<Nav.Link>Home</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/about">
							<Nav.Link>About</Nav.Link>
						</LinkContainer>
						<LinkContainer to="/contact">
							<Nav.Link>Contact</Nav.Link>
						</LinkContainer>

						<NavDropdown title="Dropdown" id="basic-nav-dropdown">
							<LinkContainer to="/tomas">
								<NavDropdown.Item>Link1</NavDropdown.Item>
							</LinkContainer>
							<LinkContainer to="/tomas2">
								<NavDropdown.Item>Link2</NavDropdown.Item>
							</LinkContainer>
							<NavDropdown.Divider />
							<LinkContainer to="/Link3">
								<NavDropdown.Item>Link3</NavDropdown.Item>
							</LinkContainer>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	</Styles>
);
