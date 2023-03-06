import NotFound from '../pages/NotFound';
import type { Component } from 'solid-js';
import { Route, Routes } from '@solidjs/router';
import LoginContainer from '../pages/auth/LoginContainer';

const AuthRouter: Component = () => (
    <Routes>
        <Route path={'/login'} component={LoginContainer} />
        <Route path={'/*'} component={NotFound} />
    </Routes>
);

export default AuthRouter;
