import Field from '../../elements/Field';
import type { Component } from 'solid-js';
import GuestLayout from '../../elements/GuestLayout';

const LoginContainer: Component = () => (
    <GuestLayout>
        <p class="text-6xl text-center font-semibold">Log In to <span class="text-gray-700">Gradr</span>.</p>
        <div class="my-10">
            <Field name="email" placeholder="bill@microsoft.com" label="Username or Email" />
            <Field name="password" type="password" label="Password" />
        </div>
    </GuestLayout>
);

export default LoginContainer;
