import React from 'react';
import { NavLink } from 'react-router-dom';
import {NavbarSection , Logo , LogoText , UlList , ListItem , Anchor , NLink} from './Style.js';



const Navbar =() => {
 
  return (
    <NavbarSection>
            
            <div className="container">
                
                <Logo>
                    <LogoText>Ultra Profile</LogoText>
                </Logo>
                
           
                
                <UlList>
                    <ListItem><NLink to="/" exact className="main-nav" activeClassName="main-nav-active">Home</NLink></ListItem>
                    <ListItem><Anchor href="#">Work</Anchor></ListItem>
                    <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
                    <ListItem><Anchor href="#">Resume</Anchor></ListItem>
                    <ListItem><Anchor href="#">About</Anchor></ListItem>
                    <ListItem><NLink to="/contact" exact className="main-nav" activeClassName="main-nav-active">Contact</NLink></ListItem>
                </UlList>
                
            </div>
            
        </NavbarSection>
  )
}

export default Navbar;
