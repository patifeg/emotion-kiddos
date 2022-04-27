import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentMethodScreen() {
    const navigation = useRef(useNavigate());
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;
    useEffect(() => {
        if (!shippingAddress.address) {
            navigation.current('/shipping');
        }
    }, []);
    const [paymentMethod, setPaymentMethod] = useState('PayPal');
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paymentMethod));
        navigation.current('/placeorder');
    }
    return (
        <div>
            <CheckoutSteps step1 step2 step3></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Modo de Pagamento</h1>
                </div>
                <div>
                    <div>
                        <input type="radio" id="paypal" name="paymentMethod" required checked onChange={(e) => setPaymentMethod(e.target.value)}></input>
                        <label htmlFor="paypal">PayPal</label>
                    </div>
                </div>
                <div>
                    <div>
                        <input type="radio" id="stripe" name="paymentMethod" required onChange={(e) => setPaymentMethod(e.target.value)}></input>
                        <label htmlFor="stripe">Stripe</label>
                    </div>
                </div>
                <div>
                    <button className="primary" type="submit">Próximo</button>
                </div>
            </form>
        </div>
    )
}
