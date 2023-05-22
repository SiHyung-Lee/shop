import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link } from 'react-router-dom';

function App() {
    let [shoes] = useState(data);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<div>Main page</div>} />
                <Route path="/detail" element={<div>Detail page</div>} />
            </Routes>

            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Cart</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="main-bg"></div>
            <Container fluid="md">
                <Row>
                    {shoes.map((shoe) => {
                        return <Card shoe={shoe} />;
                    })}
                </Row>
            </Container>
        </div>
    );
}

function Card({ shoe }) {
    const id = shoe.id + 1;
    return (
        <Col>
            <img
                src={`https://codingapple1.github.io/shop/shoes${id}.jpg`}
                width="80%"
                alt=""
            />
            <h4>{shoe.title}</h4>
            <p>{shoe.content}</p>
            <p>{shoe.price}</p>
        </Col>
    );
}
export default App;
