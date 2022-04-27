import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { saveShippingAddress } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function ShippingAddressScreen(props) {
    const navigation = useRef(useNavigate());
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const cart = useSelector(state => state.cart);
    const { shippingAddress } = cart;
    useEffect(() => {
        if (!userInfo) {
            navigation.current('/signin');
        }
    }, []);
    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [complement, setComplement] = useState(shippingAddress.complement);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);
    const dispatch = useDispatch();
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(saveShippingAddress({ fullName, address, complement, city, postalCode, country }));
        navigation.current('/payment');
        //TODO: dispatch save shipping address action
    }
    return (
        <div>
            <CheckoutSteps step1 step2></CheckoutSteps>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Endereço de Envio</h1>
                </div>
                <div>
                    <label htmlFor="fullName">Nome Completo</label>
                    <input type="text" id="fullName" placeholder="Digite seu nome completo" value={fullName} onChange={(e) => setFullName(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="address">Endereço</label>
                    <input type="text" id="address" placeholder="Digite seu endereço" value={address} onChange={(e) => setAddress(e.target.value)} required></input>
                </div>

                <div>
                    <label htmlFor="complement">Complemento</label>
                    <input type="text" id="complement" placeholder="Digite o complemento" value={complement} onChange={(e) => setComplement(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="city">Cidade</label>
                    <input type="text" id="city" placeholder="Digite a cidade" value={city} onChange={(e) => setCity(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="postalCode">CEP</label>
                    <input type="text" id="postalCode" placeholder="Digite o CEP" value={postalCode} onChange={(e) => setPostalCode(e.target.value)} required></input>
                </div>
                <div>
                    <label htmlFor="country">País</label>
                    <input type="text" id="country" placeholder="Digite o país" value={country} onChange={(e) => setCountry(e.target.value)} required></input>
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Próximo</button>
                </div>
            </form>
        </div>
    )
}
