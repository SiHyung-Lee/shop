import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './App.css';
import { useState } from 'react';
import data from './data';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Detail from './routes/Detail';
import Event from './routes/Event';
import axios from 'axios';
import Cart from './routes/Cart';

function App() {
    let [shoes, setShoes] = useState(data);
    let navigate = useNavigate();

    return (
        <div className="App">
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Shoes Shop</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
                        <Nav.Link onClick={() => navigate('/detail')}>
                            Detail
                        </Nav.Link>
                        <Nav.Link onClick={() => navigate('/event')}>
                            Event
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <div className="main-bg"></div>
                            <Container fluid="md">
                                <Row>
                                    {shoes.map((shoe, index) => {
                                        return <Card shoe={shoe} key={index} />;
                                    })}
                                </Row>
                            </Container>
                            <button
                                onClick={() => {
                                    axios
                                        .get(
                                            'https://codingapple1.github.io/shop/data2.json'
                                        )
                                        .then((data) => {
                                            const result = data.data;
                                            const arr = [...shoes, ...result];
                                            setShoes(arr);
                                        })
                                        .catch(() => {
                                            console.log('실패');
                                        });
                                }}
                            >
                                버튼
                            </button>
                        </>
                    }
                />
                <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
                <Route path="/event" element={<Event />}>
                    <Route
                        path="one"
                        element={<p>첫 주문시 양배추즙 서비스</p>}
                    />
                    <Route path="two" element={<p>생일기념 쿠폰받기</p>} />
                </Route>
                <Route path="*" element={<div>No page</div>} />
                <Route path="/cart" element={<Cart />}></Route>
            </Routes>
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
