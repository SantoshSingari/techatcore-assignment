import React from 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
//import { InlineWidget } from "react-calendly";

class App extends React.Component {
   render() {
      return (
         <div>
            <Header/>
            <Content/>
            <Footer/>
         </div>
      );
   }
}

// Header Component start 
class Header extends React.Component {
   render() {
    var imgStyle = {
      width : 100
    }
    var navLinkColor = {
     color : "rgba(107,114,128,var(--text-opacity))"
    }
    return (
         <Navbar bg='light' expand='lg'>
           <Navbar.Brand href="#"><img style ={imgStyle} alt ="code&co" src="https://d33wubrfki0l68.cloudfront.net/b4589e8fe7b1c2e72b5c12181a779e752107d1b5/c4f50/images/codeandco.svg"></img></Navbar.Brand>
           <Navbar.Toggle aria-controls="basic-navbar-nav" />
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className='mr-auto'>
               <Nav.Link href="#"></Nav.Link>            
             </Nav>
             <Form inline>
             <Nav.Link href="#" style ={navLinkColor}>Why Us? </Nav.Link>
               <Nav.Link href="#" style ={navLinkColor} >Case Studies </Nav.Link>
               <Nav.Link href="#" style ={navLinkColor}>Services  </Nav.Link>
               <Nav.Link href="#" style ={navLinkColor}>Contact </Nav.Link>
             </Form>
           </Navbar.Collapse>
         </Navbar>
      );
    }
}



// Content Component start 
class Content extends React.Component {
   render() {
     return (
      <div class="container" style={{marginTop : "10%"}}>
         <h1>Actionable technology & product due diligence advisory for global investors</h1>
         <p>We combine extensive technology and product knowledge with our passion for entrepreneurship, strategy, and finance to help the world’s most successful funds make confident investment decisions.</p>
      </div>
      );
   }
}


// Footer Component start 
class Footer extends React.Component {
  render() {
    return (
     <div class="container" style = {{marginTop : "5%"}}>
      <>
      <Button variant="outline-secondary"  style={{backgroundColor: 'black', color: 'white'}}>Schedule A Call </Button>{' '}
      <Button variant="outline-secondary">Learn More</Button>{' '}
      </>
     </div>
    );
  }
}

export default App;