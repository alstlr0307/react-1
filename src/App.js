import { Button1, Button3 } from './ButtonLib';
import AboutPage from './AboutPage';
import Profile from './Profile';
import './App.css';
import ShoppingList from './ShoppingList';
import CountState from './CountState';

function MyButton() {
  return (
    <button>I'm a button</button>
  );
}

export default function App() {
  return (
    <div className="wrapper">
      <div>
      <h1>Welcome to my app</h1>
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
      </div>
    </div>
  );
}