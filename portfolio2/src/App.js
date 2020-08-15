import React from 'react';
import {BrowserRouter as Router, Route, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar'
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Avery Rouser',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
      ],
      home: {
        title: "Be relentless",
        subTitle: "Projects that make a difference",
        subTitleText: "Check out my projects below"
      },
      About: {
        title: "About Me",
      },
      Contact: {
        title: "Let's Connect!",
      }
    }
  }

  render() {
    return (
        <Router>
          <Container className="p-0" fluid={true}>
            
            <Navbar>
              <Navbar.Brand>Avery Rouser</Navbar.Brand>
            </Navbar>



          </Container>
        </Router>
      );
    }
  }

export default App;
