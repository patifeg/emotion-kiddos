import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { addToCart } from '../actions/cartActions';

export default function CartScreen(props) {
    /*const { id } = useParams();
    const productId = id;
    const qtde = props.location.search ? Number(props.location.search.split('=')[1]) : 1;*/

    const params = useParams();
    const productId = params.id;
    const { search } = useLocation();
    const qtdeInUrl = new URLSearchParams(search).get('qtde');
    const qtde = qtdeInUrl ? Number(qtdeInUrl) : 1;
    const dispatch = useDispatch();
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qtde));
        }
    }, [dispatch, productId, qtde]);

    return (
        <div>
            <h1>Cart Screen</h1>
            <p>Adicionar ao Carrinho: ProductID: {productId} Qtde: {qtde}</p>
        </div>
    );
}