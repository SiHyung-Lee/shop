import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Detail(props) {
    const { id } = useParams();
    const result = props.shoes.find((x) => x.id === Number(id));
    const [count, setCount] = useState(0);
    const [pop, setPop] = useState(true);
    const [num, setNum] = useState('');

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

    return (
        <div className="container">
            {pop ? (
                <div className="alert alert-warning">2초 이내 구매시 할인</div>
            ) : null}
            <div className="row">
                <div className="col-md-6">
                    <img
                        src="https://codingapple1.github.io/shop/shoes1.jpg"
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
                        onClick={() => setCount(1)}
                    >
                        주문하기
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Detail;
