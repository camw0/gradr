import Button from '../elements/Button';
import type { Component } from 'solid-js';

const NotFound: Component = () => (
    <div class="grid h-screen place-items-center">
        <div class="bg-gray-200 rounded-lg p-8">
            <p class="text-5xl">404 - Not Found</p>
            <p class="text-2xl mt-4 text-gray-400">Try navigating to a different page.</p>
            <div class="text-center mt-4">
                <Button to={'/'}>Return Home</Button>
            </div>
        </div>
    </div>
);

export default NotFound;
