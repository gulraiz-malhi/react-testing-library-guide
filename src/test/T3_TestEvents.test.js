import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
// import TestEvents from '../components/TestEvents'

const TestEvents = () => {
  const [counter, setCounter] = React.useState(0)

return (
<>
  <h1 data-testid="counter">{ counter }</h1>
  <button data-testid="button-up" onClick={() => setCounter(counter + 1)}> Up</button>
  <button data-testid="button-down" onClick={() => setCounter(counter - 1)}>Down</button>
</>
  )
}


describe('<TestEvents />', () => {
  afterEach(cleanup);
  
  it('increments counter', () => {
    const { getByTestId } = render(<TestEvents />); 
    
    fireEvent.click(getByTestId('button-up'))

    expect(getByTestId('counter')).toHaveTextContent('1')
  });

  it('decrements counter', () => {
    const { getByTestId } = render(<TestEvents />); 
    
    fireEvent.click(getByTestId('button-down'))

    expect(getByTestId('counter')).toHaveTextContent('-1')
  })
});