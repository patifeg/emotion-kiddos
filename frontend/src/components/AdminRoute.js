import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Outlet } from '../../node_modules/react-router-dom/index';

export default function AdminRoute({ component: Component, ...rest }) {
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    return userInfo && userInfo.isAdmin ? <Outlet /> : <Navigate to="/signin" />;
}