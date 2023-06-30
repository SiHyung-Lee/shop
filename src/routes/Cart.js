import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { changeName, increase } from '../store/userSlice';
import { addCount, removeCount, removeItem } from '../store/cartSlice';

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
                    dispatch(increase(10));
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
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {state.cart.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.count}</td>
                                <td>안녕</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            dispatch(addCount(item.id));
                                        }}
                                    >
                                        +
                                    </button>
                                    <button
                                        onClick={() => {
                                            dispatch(removeCount(item.id));
                                        }}
                                    >
                                        -
                                    </button>
                                </td>
                                <td>
                                    <button
                                        onClick={() => {
                                            dispatch(removeItem(item.id));
                                        }}
                                    >
                                        삭제
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
