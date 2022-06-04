import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsUser } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProfileScreen() {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    const userDetails = useSelector(state => state.userDetails);
    const { loading, error, user } = userDetails;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(detailsUser(userInfo._id));
    }, [dispatch, userInfo._id]);
    const submitHandler = (e) => {
        e.preventDefault();
        //dispatch update profile
    }
    return (
        <div>
            <form className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Perfil do Usuário</h1>
                </div>
                {
                    loading ? <LoadingBox></LoadingBox>
                        :
                        error ? <MessageBox variant="danger">{error}</MessageBox>
                            :
                            <>
                                <div>
                                    <label htmlFor="name">Nome</label>
                                    <input id="name" type="text" placeholder="Digite seu nome" value={user.name}></input>
                                </div>
                                <div>
                                    <label htmlFor="email">E-mail</label>
                                    <input id="email" type="text" placeholder="Digite seu e-mail" value={user.email}></input>
                                </div>
                                <div>
                                    <label htmlFor="password">Senha</label>
                                    <input id="password" type="text" placeholder="Digite sua senha"></input>
                                </div>
                                <div>
                                    <label htmlFor="confirmPassword">Confirme a Senha</label>
                                    <input id="confirmPassword" type="text" placeholder="Confirme sua senha"></input>
                                </div>
                                <div>
                                    <label />
                                    <button className="primary" type="submit">Atualizar</button>
                                </div>
                            </>
                }
            </form>
        </div>
    )
}
