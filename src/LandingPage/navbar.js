import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar style={{paddingTop:'1%', paddingLeft:'1%',paddingBottom:'1%',paddingRight:'1%', backgroundColor:'#3f51b5',  fontWeight: 'bold',}} light expand="md">
          <NavbarBrand  style={{ color:'white',paddingLeft:'9%',  fontFamily:'Times New Roman'}} href="/">Hackathon Events</NavbarBrand> 
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar style={{paddingRight:'5%'}} >
            <Nav  className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{color:'white'}} href="/services/">Services</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:'white'}}href="/">Contact Us</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar  style={{ }}>
                <DropdownToggle  style={{color:'white'}}nav caret >
                  SingUp
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Hacker 
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Non Hacker
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}