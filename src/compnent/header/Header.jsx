import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import logo from "../../assets/logo.png";

const Header = (args) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" dark expand="md" sticky="top" {...args}>
        <NavbarBrand href="/">
          <img src={logo} alt="EdoNoveX" className="img-fluid" width={150} />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <div className="group">
              <input
                placeholder="What do you want to learn"
                type="text"
                className="input"
              />
              <i className="fas fa-search icon"></i>
            </div>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Explore Courses
              </DropdownToggle>
              <DropdownMenu color="dark" dark>
                <DropdownItem>IT & Web Development</DropdownItem>
                <DropdownItem>Digital Marketing & Email Marketing</DropdownItem>
                <DropdownItem>Communication Buildup</DropdownItem>
                <DropdownItem>Personal Development</DropdownItem>
                <DropdownItem>Wordpress Development</DropdownItem>
                <DropdownItem>Cyber Security</DropdownItem>
                <DropdownItem>Graphics Design</DropdownItem>
                <DropdownItem>Client Getting</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Discover Career
              </DropdownToggle>
              <DropdownMenu color="dark" dark>
                <DropdownItem>Health Science</DropdownItem>
                <DropdownItem>Finance</DropdownItem>
                <DropdownItem>Information Technology</DropdownItem>
                <DropdownItem>Education & Training</DropdownItem>
                <DropdownItem>
                  Business Management and Administration
                </DropdownItem>
                <DropdownItem>Marketing, Sales, and Service</DropdownItem>
                <DropdownItem>
                  Arts, Audio/Video Technology, and Communications
                </DropdownItem>
                <DropdownItem>Human Services</DropdownItem>
                <DropdownItem>
                  Agriculture, Food, and Natural Resources
                </DropdownItem>
                <DropdownItem>Hospitality and Tourism</DropdownItem>
                <DropdownItem>
                  Science, Technology, Engineering, and Mathematics
                </DropdownItem>
                <DropdownItem>Architecture and Construction</DropdownItem>
                <DropdownItem>
                  Government and Public Administration{" "}
                </DropdownItem>
                <DropdownItem>
                  Transportation, Distribution, and Logistics
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                More
              </DropdownToggle>
              <DropdownMenu color="dark" dark>
                <DropdownItem>About</DropdownItem>
                <DropdownItem>Blog</DropdownItem>
                <DropdownItem>Creator</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <Button style={{ background: "none" }} className="mx-2 border-0">
            Log In
          </Button>
          <Button color="success">Sign Up</Button>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
