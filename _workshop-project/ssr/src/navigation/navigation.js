import React from 'react'

import {
    Switch,
    Route,
} from 'react-router-dom';

import AuthGuard from './authGuard';

import HomePage from '../pages/home-page/home';
import RoomPage from '../pages/room-page/room';
import ProfilePage from '../pages/profile-page/profile';
import ProfileImageUploadPage from '../pages/profile-page-upload-image/profile-update-image';
import LogoutPage from '../pages/logout-page/logout';
import CreateRoomPage from '../pages/create-room-page/create';

import RegisterPage from '../pages/register-page/register';
import LoginPage from '../pages/login-page/login';
import ErrorPage from '../pages/404-page/notFound';

const Navigation = () => {

    return (
            <Switch>
                <AuthGuard path='/' exact={true} component={HomePage} validate={false} />

                <AuthGuard
                    path='/auth/login'
                    component={LoginPage}
                    redirect='/'
                />
                <AuthGuard
                    path='/auth/register'
                    component={RegisterPage}
                    redirect='/'
                />

                <AuthGuard path='/product/details/:id' component={RoomPage} validate={false} />

                <AuthGuard path='/product/create'
                    component={CreateRoomPage}
                    authorization={true}
                    redirect='/auth/login'
                />


                <AuthGuard path='/user/profile/image/upload'
                    component={ProfileImageUploadPage}
                    authorization={true}
                    redirect='/auth/login'
                />
                <AuthGuard path='/user/profile'
                    component={ProfilePage}
                    authorization={true}
                    redirect='/auth/login'
                />
                <AuthGuard path='/user/logout'
                    component={LogoutPage}
                    authorization={true}
                    redirect='/auth/login'
                />

                <Route component={ErrorPage} />
            </Switch>
    )
}

export default Navigation