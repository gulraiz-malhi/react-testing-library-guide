import React from 'react';
import './App.css';
import TestAsync from './components/TestAsync';
import TestAxios from './components/TestAxios';
import CounterProvider from './components/TestContext';
import TestElements from './components/TestElements';
import TestEvents from './components/TestEvents';
import { FetchGreeting } from './components/TestNetworkAsync';
import TestRedux from './components/TestRedux';
import TestRouter from './components/TestRouter';

function App() {
  return (
    <div className="App">
      <h1 data-testid="custom-element">Testing 1</h1>
      <form>
        <label htmlFor="example">Example</label>
        <input placeholder="username" id="example" />
      </form>

      {/* <TestElements /> */}
       {/* <TestEvents /> */}
       {/* <TestAsync /> */}
      {/* <TestAxios url={'https://reqres.in/api/users?page=2'}/> */}
      {/* <TestRedux /> */}
      {/* <CounterProvider /> */}
      {/* <TestRouter /> */}
      {/* <FetchGreeting /> */}
    </div>
  );
}


export default App;
