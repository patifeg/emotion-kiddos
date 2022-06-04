import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { listOrderMine } from '../actions/orderActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function OrderHistoryScreen(props) {
    const navigation = useRef(useNavigate());
    const orderMineList = useSelector(state => state.orderMineList);
    const { loading, error, orders } = orderMineList;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listOrderMine());
    }, [dispatch]);
    return (
        <div>
            <h1>Histórico de Compras</h1>
            {loading ? <LoadingBox></LoadingBox> :
                error ? <MessageBox variant="danger">{error}</MessageBox>
                    :
                    (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>DATA</th>
                                    <th>TOTAL</th>
                                    <th>PAGO</th>
                                    <th>ENTREGUE</th>
                                    <th>AÇÕES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order) => (
                                    <tr key={order._id}>
                                        <td>{order._id}</td>
                                        <td>{order.createdAt.substring(0, 10)}</td>
                                        <td>{order.totalPrice.toFixed(2)}</td>
                                        <td>{order.isPaid ? order.paidAt.substring(0, 10) : 'Não'}</td>
                                        <td>{order.isDelivered ? order.deliveredAt.substring(0, 10) : 'Não'}</td>
                                        <td><button type="button" className="small" onClick={() => { navigation.current(`/order/${order._id}`) }}>Detalhes</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )
            }
        </div>
    )
}
