import { Button1, Button3 } from './ButtonLib';
import AboutPage from './AboutPage';
import Profile from './Profile';
import './App.css';
import ShoppingList from './ShoppingList';
import CountState from './CountState';

import { useState } from 'react';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

function CountState2({ count, onClick }) {
  return (
    <div>
      <button onClick={onClick}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  return (
    <div className="wrapper">
      <h1>Welcome to my app</h1>
      <div>
        <MyButton />
        <Button1 />
        <Button3 />
        <AboutPage />
        <Profile />
        <ShoppingList />
      </div>
      <div>
        <CountState />
        <CountState />
        <p>Sharing data between components</p>
        <CountState2 count={count} onClick={handleClick} />
        <CountState2 count={count} onClick={handleClick} />
      </div>
    </div>
  );
}