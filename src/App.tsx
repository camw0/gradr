import Button from './elements/Button';
import type { Component } from 'solid-js';

const App: Component = () => {
  return (
    <div class="grid h-screen place-items-center bg-[url('https://images.pexels.com/photos/316466/pexels-photo-316466.jpeg')] bg-cover">
      <div class="text-center py-10">
          <div class="text-6xl pb-6">
              <p class="text-gray-400 py-4">👋 Welcome to <span class="font-bold">Gradr</span>,</p>
              <p class="text-gray-500 py-4">an easier way to</p>
              <p class="text-gray-600 py-4">stay on track.</p>
          </div>
          <p class="text-gray-700">With Gradr, you can manage tasks,</p>
          <p class="text-gray-800">log assignments, study your courses</p>
          <p class="text-gray-900">and <span class="underline">so much more</span>. ✨</p>
          <div class="grid grid-cols-2 pt-10">
              <Button to={'/signup'}>Sign Up</Button>
              <Button to={'/login'}>Log In</Button>

          </div>
      </div>
    </div>
  );
};

export default App;
