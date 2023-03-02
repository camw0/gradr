import NotFound from './pages/NotFound';
import type { Component } from 'solid-js';
import AuthRouter from './routers/AuthRouter';
import { Route, Routes } from '@solidjs/router';
import IndexContainer from './pages/IndexContainer';

const App: Component = () => (
    <Routes>
        <Route path={'/'} component={IndexContainer} />
        <Route path={'/auth/*'} component={AuthRouter} />
        <Route path={'/*'} component={NotFound} />
    </Routes>
);

export default App;
