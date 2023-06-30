import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { addItem } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

function Detail(props) {
    const { id } = useParams();
    const result = props.shoes.find((x) => x.id === Number(id));
    const [count, setCount] = useState(0);
    const [pop, setPop] = useState(true);
    const [num, setNum] = useState('');
    const [tab, setTab] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setPop(false);
        }, 2000);
    }, []);

    useEffect(() => {
        if (isNaN(num)) {
            alert('그러지 마세요');
        }
    }, [num]);

    let state = useSelector((state) => {
        return state;
    });
    let dispatch = useDispatch();

    return (
        <div className="container">
            {pop ? (
                <div className="alert alert-warning">2초 이내 구매시 할인</div>
            ) : null}
            <div className="row">
                <div className="col-md-6">
                    <img
                        src={`https://codingapple1.github.io/shop/shoes${result.id}.jpg`}
                        width="100%"
                        alt=""
                    />
                </div>
                <div className="col-md-6 mt-4">
                    <input
                        type="text"
                        onChange={(e) => {
                            setNum(e.target.value);
                        }}
                    />
                    <h4 className="pt-5">{result.title}</h4>
                    <p>{result.content}</p>
                    <p>{result.price}원</p>
                    <button
                        className="btn btn-danger"
                        onClick={() => {
                            dispatch(
                                addItem({
                                    id: result.id,
                                    name: result.title,
                                    count: 1,
                                })
                            );
                        }}
                    >
                        주문하기
                    </button>
                </div>
            </div>

            <Nav defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-0" onClick={() => setTab(0)}>
                        Active
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-1" onClick={() => setTab(1)}>
                        Link
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link eventKey="link-2" onClick={() => setTab(2)}>
                        Link
                    </Nav.Link>
                </Nav.Item>
            </Nav>

            <TabContent tab={tab} />
        </div>
    );
}

function TabContent({ tab }) {
    const [fade, setFade] = useState('');

    useEffect(() => {
        setTimeout(() => {
            setFade('end');
        }, 10);

        return () => {
            setFade('');
        };
    }, [tab]);

    return (
        <div className={`start ${fade}`}>
            {[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tab]}
        </div>
    );
}

export default Detail;
