import type { JSXElement } from 'solid-js';

interface Props {
    children: JSXElement;
}

const GuestLayout = ({ children }: Props) => (
    <div class={'grid h-screen lg:grid-cols-2 place-items-center'}>
        <div class="bg-gray-200 p-10 rounded">
            {children}
        </div>
    </div>
);

export default GuestLayout;