import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increaseAge } from '../store/userSlice';
import { increaseAmount } from '../store';

function Cart() {
    let state = useSelector((state) => {
        return state;
    });
    let dispatch = useDispatch();

    return (
        <div>
            <h6>
                {state.user.name}({state.user.age})의 장바구니
            </h6>
            <button
                onClick={() => {
                    dispatch(increaseAge(10));
                }}
            >
                버튼
            </button>
            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {state.cart.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>1</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>안녕</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            dispatch(increaseAmount());
                                        }}
                                    >
                                        +
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;
