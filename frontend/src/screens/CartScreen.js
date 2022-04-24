import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useParams } from 'react-router-dom';
import { addToCart, removeFromCart } from '../actions/cartActions';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
    /*const { id } = useParams();
    const productId = id;
    const qtde = props.location.search ? Number(props.location.search.split('=')[1]) : 1;*/

    const params = useParams();
    const productId = params.id;
    const { search } = useLocation();
    const qtdeInUrl = new URLSearchParams(search).get('qtde');
    const qtde = qtdeInUrl ? Number(qtdeInUrl) : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qtde));
        }
    }, [dispatch, productId, qtde]);
    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    }
    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }
    return (
        <div className='row top'>
            <div className='col-2'>
                <h1>Carrinho</h1>
                {
                    cartItems.length === 0 ?
                        <MessageBox>
                            Carrinho vazio.
                            <Link to="/">Bora comprar!</Link>
                        </MessageBox>
                        :
                        (
                            <ul>
                                {
                                    cartItems.map(item => (
                                        <li key={item.product}>
                                            <div className='row'>
                                                <div>
                                                    <img src={item.image} alt={item.name} className="small"></img>
                                                </div>
                                                <div className='min-30'>
                                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                                </div>
                                                <div>
                                                    <select value={item.qtde} onChange={(e) => dispatch(
                                                        addToCart(item.product, Number(e.target.value))
                                                    )}>
                                                        {[...Array(item.countInStock).keys()].map(
                                                            x => (
                                                                <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                            )
                                                        )}
                                                    </select>
                                                </div>
                                                <div>
                                                    R${item.price}
                                                </div>
                                                <div>
                                                    <button type="button" onClick={() => removeFromCartHandler(item.product)}>Remover</button>
                                                </div>
                                            </div>
                                        </li>
                                    )
                                    )
                                }
                            </ul>
                        )
                }
            </div>
            <div className='col-1'>
                <div className='card card-body'>
                    <ul>
                        <li>
                            <h2>
                                Subtotal({cartItems.reduce((a, c) => a + c.qtde, 0)} itens): R${cartItems.reduce((a, c) => a + c.price * c.qtde, 0)}
                            </h2>
                        </li>
                        <li>
                            <button type="button" onClick={checkoutHandler} className="primary block" disabled={cartItems.length === 0}>Finalizar Compra</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}